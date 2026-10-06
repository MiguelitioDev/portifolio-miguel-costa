import styles from './Contact.module.css';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={containerRef} id="contato" className={`${styles.contactSection} reveal-on-scroll`} aria-label="Contato">
      <div className="site-container">
        <div className={styles.headerArea}>
          <span className="section-tag">Vamos Conversar</span>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Seja para o desenvolvimento de um novo projeto, proposta de freelance ou oportunidade profissional, 
            estou à disposição para conversar.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* Primary WhatsApp Conversion Card */}
          <div className={styles.primaryCard} data-reveal>
            <div className={styles.primaryHeader}>
              <div className={styles.primaryBadge}>
                <span className={styles.pulseGreen} aria-hidden="true" />
                <span>Canal Mais Rápido</span>
              </div>
              <h3 className={styles.primaryTitle}>
                Inicie uma conversa direta pelo WhatsApp
              </h3>
              <p className={styles.primaryDescription}>
                Envie uma mensagem com os detalhes do seu projeto ou ideia. Respondo com rapidez para 
                alinhar objetivos, prazos e escopo técnico.
              </p>
            </div>

            <div className={styles.primaryActionBox}>
              <a
                href="https://wa.me/5585981562955?text=Ol%C3%A1%20Miguel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsAppBtn}
              >
                <MessageCircle size={22} aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>
              <span className={styles.phoneDetail}>+55 (85) 98156-2955</span>
            </div>
          </div>

          {/* Secondary Channels */}
          <div className={styles.secondaryGrid} data-reveal>
            <a
              href="mailto:pedromiguelmoreiradacosta@gmail.com"
              className={styles.channelCard}
              aria-label="Enviar email para pedromiguelmoreiradacosta@gmail.com"
            >
              <div className={styles.channelIcon} aria-hidden="true">
                <Mail size={22} />
              </div>
              <div className={styles.channelContent}>
                <span className={styles.channelName}>Email Direto</span>
                <span className={styles.channelDetail}>pedromiguelmoreiradacosta@gmail.com</span>
              </div>
              <ArrowUpRight size={18} className={styles.channelArrow} aria-hidden="true" />
            </a>

            <a
              href="https://github.com/MiguelitioDev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="Acessar perfil do GitHub @MiguelitioDev"
            >
              <div className={styles.channelIcon} aria-hidden="true">
                <FaGithub size={22} />
              </div>
              <div className={styles.channelContent}>
                <span className={styles.channelName}>GitHub</span>
                <span className={styles.channelDetail}>github.com/MiguelitioDev</span>
              </div>
              <ArrowUpRight size={18} className={styles.channelArrow} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/miguel-m-costa-2a568435b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label="Acessar perfil do LinkedIn de Miguel Costa"
            >
              <div className={styles.channelIcon} aria-hidden="true">
                <FaLinkedin size={22} />
              </div>
              <div className={styles.channelContent}>
                <span className={styles.channelName}>LinkedIn</span>
                <span className={styles.channelDetail}>linkedin.com/in/miguel-m-costa</span>
              </div>
              <ArrowUpRight size={18} className={styles.channelArrow} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
