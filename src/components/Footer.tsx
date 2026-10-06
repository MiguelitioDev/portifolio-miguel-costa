import styles from './Footer.module.css';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.leftCol}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Pedro Miguel Moreira da Costa. Todos os direitos reservados.
          </p>
          <p className={styles.education}>
            Graduando em Análise e Desenvolvimento de Sistemas · Ceará, Brasil
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className={styles.backToTop}
          aria-label="Voltar ao topo da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
