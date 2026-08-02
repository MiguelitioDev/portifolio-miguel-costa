import React, { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import videoUrl from '../../video/kling_20260801_VIDEO_Voc____um__2717_0.mp4';

const FADE_DURATION = 0.5; // Segundos de crossfade

export default function Hero() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    // Garante que ambos estão mutados e carregados para autoplay
    v1.muted = true;
    v2.muted = true;
    
    // Inicia o vídeo 1
    v1.play().catch(e => console.warn("Autoplay prevent:", e));

    const handleTimeUpdate = () => {
      const active = activeVideo === 1 ? v1 : v2;
      const next = activeVideo === 1 ? v2 : v1;
      
      // Se não tiver duração carregada, ignora
      if (!active.duration) return;

      const timeLeft = active.duration - active.currentTime;

      // Inicia o crossfade
      if (timeLeft <= FADE_DURATION && !isTransitioning.current) {
        isTransitioning.current = true;
        
        // Prepara o próximo vídeo
        next.currentTime = 0;
        next.style.opacity = '1';
        next.style.zIndex = '1';
        active.style.zIndex = '2';
        
        next.play().catch(e => console.warn(e));

        // Fade out no vídeo atual
        gsap.to(active, {
          opacity: 0,
          duration: FADE_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            active.pause();
            setActiveVideo(activeVideo === 1 ? 2 : 1);
            isTransitioning.current = false;
          }
        });
      }
    };

    // Anexa o listener apenas no vídeo ativo
    const currentActive = activeVideo === 1 ? v1 : v2;
    currentActive.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      currentActive.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [activeVideo]);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.videoWrapper}>
        <video 
          ref={videoRef1}
          className={styles.bgVideo} 
          src={videoUrl}
          playsInline
          muted
          autoPlay
          style={{ opacity: 1, zIndex: 1 }}
        />
        <video 
          ref={videoRef2}
          className={styles.bgVideo} 
          src={videoUrl}
          playsInline
          muted
          style={{ opacity: 0, zIndex: 0 }}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Análise e</span>
          <span>Desenvolvimento</span>
          <span>Web.</span>
        </h1>
        <p className={styles.subtitle}>
          Engenharia de software inteligente e de alta performance. 
          Construindo aplicações web modernas, escaláveis e impulsionadas por IA para a melhor experiência do usuário.
        </p>
      </div>

      <div className={styles.bottomFade}></div>
    </section>
  );
}
