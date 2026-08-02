import { useRef, useEffect } from 'react';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    
    gsap.fromTo(footerRef.current, 
      { opacity: 0 },
      {
        opacity: 1, 
        duration: 1.5, 
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%"
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2026 Pedro Miguel Moreira da Costa</p>
        <div className={styles.divider}></div>
        <p className={styles.text}>Análise e Desenvolvimento de Sistemas</p>
        <div className={styles.divider}></div>
        <p className={styles.text}>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
