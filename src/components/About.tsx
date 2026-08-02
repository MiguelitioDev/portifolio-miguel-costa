import { useRef, useEffect } from 'react';
import styles from './About.module.css';
import gsap from 'gsap';
import fotoPerfil from '../foto/perfil.webp';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            {/* O placeholder da imagem que utilizará blend modes e máscara de opacidade */}
            <div className={styles.photoPlaceholder} style={{ backgroundImage: `url(${fotoPerfil})` }}>
              <div className={styles.photoOverlay}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>Resumo Profissional</h2>
          
          <div className={styles.textContent}>
            <p>
              Sou um desenvolvedor focado em criar soluções web que unem performance e uma estética refinada. 
              Ao longo do meu desenvolvimento em projetos reais, percebi que a verdadeira inovação está na interseção 
              entre engenharia sólida e a Inteligência Artificial.
            </p>
            <p>
              Tenho aplicado conceitos de IA durante o meu ciclo de desenvolvimento, não apenas para otimizar fluxos 
              de trabalho, mas também para construir funcionalidades mais inteligentes e preditivas para o usuário final.
            </p>
            <p>
              Minha jornada é marcada pelo aprendizado contínuo. Busco sempre a evolução profissional, adotando 
              tecnologias modernas e aprimorando minhas capacidades técnicas para entregar produtos escaláveis, 
              acessíveis e que geram impacto real.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Nome:</span>
              <span className={styles.infoValue}>Pedro Miguel Moreira da Costa</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Matrícula:</span>
              <span className={styles.infoValue}>2522696</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Semestre:</span>
              <span className={styles.infoValue}>3º</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
