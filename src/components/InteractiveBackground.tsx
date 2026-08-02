import React, { useRef, useEffect } from 'react';
import styles from './InteractiveBackground.module.css';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const colors = ['rgba(139, 178, 248, 0.4)', 'rgba(255, 255, 255, 0.2)']; // Azul e Prata base
    const highlightColor = 'rgba(139, 178, 248, 1)'; // Azul vivo para interação

    // Ajusta o tamanho e lida com pixel ratio para telas retina
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Mouse tracker
    let mouse = {
      x: -1000,
      y: -1000,
      radius: 180, // Raio de interação magnética
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', () => {
      setSize();
      init();
    });

    // Classe da Partícula
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;
      isHovered: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.isHovered = false;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isHovered ? highlightColor : this.color;
        
        if (this.isHovered) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = highlightColor;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset for lines
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Salvaguarda anti-NaN (evita divisão por zero se mouse ficar perfeitamente no ponto)
        if (distance < 1) distance = 1;
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // Efeito antigravidade (repulsão)
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
          this.isHovered = true;
        } else {
          this.isHovered = false;
          // Retorno elástico (lerp)
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.x -= dxBase / 15;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.y -= dyBase / 15;
          }
        }
      }
    }

    // Inicialização da Constelação
    const init = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000; // Densidade baseada na tela
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    // Conectar partículas com linhas
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < 10000) { // Distância máxima para conectar (100px)
            opacityValue = 1 - (distance / 10000);
            ctx.strokeStyle = `rgba(139, 178, 248, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Loop de Animação Principal
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Previne rodar o efeito em celulares (touch-only devices)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      init();
      animate();
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
