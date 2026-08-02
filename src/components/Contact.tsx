import { useRef, useEffect } from 'react';
import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  const contacts = [
    { name: "Email", info: "pedromiguelmoreiradacosta@gmail.com", icon: <Mail size={32} />, href: "mailto:pedromiguelmoreiradacosta@gmail.com" },
    { name: "GitHub", info: "@MiguelitioDev", icon: <FaGithub size={32} />, href: "https://github.com/MiguelitioDev" },
    { name: "LinkedIn", info: "Miguel Costa", icon: <FaLinkedin size={32} />, href: "https://www.linkedin.com/in/miguel-m-costa-2a568435b/" },
    { name: "WhatsApp", info: "85 9 8156-2955", icon: <MessageCircle size={32} />, href: "https://wa.me/5585981562955" }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    const items = gsap.utils.toArray(`.${styles.contactCard}`);
    
    gsap.fromTo(items, 
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1, 
        scale: 1,
        y: 0, 
        duration: 0.8, 
        stagger: 0.15,
        ease: "back.out(1.2)",
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
        <div className={styles.header}>
          <h2 className={styles.title}>Vamos Conversar</h2>
          <p className={styles.subtitle}>Interessado em trabalhar juntos? Entre em contato por qualquer uma das plataformas abaixo.</p>
        </div>

        <div className={styles.grid}>
          {contacts.map((contact, idx) => (
            <a 
              key={idx} 
              href={contact.href} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.contactCard}
              aria-label={`Entrar em contato via ${contact.name}`}
            >
              <div className={styles.iconWrapper}>
                {contact.icon}
              </div>
              <div className={styles.cardContent}>
                <h3>{contact.name}</h3>
                <p>{contact.info}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
