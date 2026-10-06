import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <div className={`site-container ${styles.inner}`}>
        <a href="#" className={styles.brand} aria-label="Pedro Miguel Costa - Início">
          <div className={styles.logoMonogram}>M</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Miguel Costa</span>
            <div className={styles.brandStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Disponível para projetos</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.navLinks}>
            <li>
              <a href="#sobre" className={styles.navLink}>Sobre</a>
            </li>
            <li>
              <a href="#capacidades" className={styles.navLink}>Capacidades</a>
            </li>
            <li>
              <a href="#projetos" className={styles.navLink}>Projetos</a>
            </li>
            <li>
              <a href="#contato" className={styles.navLink}>Contato</a>
            </li>
          </ul>

          <a 
            href="https://wa.me/5585981562955?text=Ol%C3%A1%20Miguel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            <span>Falar comigo</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <a href="#sobre" className={styles.mobileNavLink} onClick={closeMenu}>Sobre</a>
            </li>
            <li>
              <a href="#capacidades" className={styles.mobileNavLink} onClick={closeMenu}>Capacidades</a>
            </li>
            <li>
              <a href="#projetos" className={styles.mobileNavLink} onClick={closeMenu}>Projetos</a>
            </li>
            <li>
              <a href="#contato" className={styles.mobileNavLink} onClick={closeMenu}>Contato</a>
            </li>
          </ul>

          <a
            href="https://wa.me/5585981562955?text=Ol%C3%A1%20Miguel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
