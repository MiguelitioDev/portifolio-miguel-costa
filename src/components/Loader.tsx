import { useEffect, useRef } from 'react';
import styles from './Loader.module.css';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<SVGSVGElement>(null);
  const shieldRef = useRef<SVGSVGElement>(null);
  const binary0Ref = useRef<HTMLSpanElement>(null);
  const binary1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animate gear rotation
    gsap.to(gearRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear"
    });

    // Animate shield pulsing glow
    gsap.to(shieldRef.current, {
      filter: "drop-shadow(0 0 25px rgba(139, 178, 248, 0.8))",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animate binary digits blinking/fading
    gsap.to(binary0Ref.current, { opacity: 1, duration: 0.5, yoyo: true, repeat: -1, ease: "steps(1)" });
    gsap.to(binary1Ref.current, { opacity: 1, duration: 0.5, yoyo: true, repeat: -1, delay: 0.25, ease: "steps(1)" });

    // Keep loader for 2.2 seconds, then fade out
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          }
        });
      } else {
        onComplete();
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.loaderContainer}>
      <div className={styles.emblemContainer}>
        
        {/* Shield SVG */}
        <svg ref={shieldRef} className={styles.shield} viewBox="0 0 100 110">
          <path d="M50 5 L10 20 L10 60 C10 80, 40 100, 50 105 C60 100, 90 80, 90 60 L90 20 Z" />
        </svg>

        {/* Gear SVG */}
        <svg ref={gearRef} className={styles.gear} viewBox="0 0 100 100">
          <path d="M50 15 A35 35 0 1 0 50 85 A35 35 0 1 0 50 15 Z" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="15" />
        </svg>

        {/* Central Circuit Track / Lightning Bolt */}
        <svg className={styles.circuit} viewBox="0 0 100 100">
          <path d="M50 20 L40 50 L60 50 L50 80" />
        </svg>

        <span ref={binary0Ref} className={`${styles.binaryText} ${styles.binary0}`}>0</span>
        <span ref={binary1Ref} className={`${styles.binaryText} ${styles.binary1}`}>1</span>

      </div>
      
      <div className={styles.loadingText}>Sistemas</div>
    </div>
  );
}
