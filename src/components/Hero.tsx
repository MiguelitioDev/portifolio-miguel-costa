import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { ArrowDown, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import videoUrl from '../../video/kling_20260801_VIDEO_Voc____um__2717_0.mp4';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section className={styles.heroSection} aria-label="Apresentação">
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          src={videoUrl}
          playsInline
          muted
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.videoOverlay} />
        <div className={styles.bottomGradient} />
      </div>

      <div className={`site-container ${styles.heroContent}`} ref={contentRef}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>Desenvolvedor Web & Engenharia de Software</span>
        </div>

        <h1 className={styles.heroTitle}>
          Construindo interfaces refinadas e aplicações{' '}
          <span className={styles.highlightText}>modernas.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Pedro Miguel Moreira da Costa. Graduando em Análise e Desenvolvimento de Sistemas, 
          com foco em desenvolvimento frontend avançado, arquitetura limpa e entregas de alto impacto comercial.
        </p>

        <div className={styles.ctaGroup}>
          <a href="#projetos" className={styles.btnPrimary}>
            <span>Explorar Projetos em Andamento</span>
            <ArrowDown size={18} aria-hidden="true" />
          </a>

          <a
            href="https://wa.me/5585981562955?text=Ol%C3%A1%20Miguel,%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <MessageSquare size={18} aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <div className={styles.metricsRow}>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>3+</span>
            <span className={styles.metricLabel}>Projetos Reais Ativos</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>ADS</span>
            <span className={styles.metricLabel}>Graduação em Andamento</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Foco em Qualidade & DX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
