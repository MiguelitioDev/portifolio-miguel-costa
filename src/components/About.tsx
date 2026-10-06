import styles from './About.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import fotoPerfil from '../foto/perfil-optimized.jpg';

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="sobre" className={`${styles.aboutSection} reveal-on-scroll`} aria-label="Sobre mim">
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src={fotoPerfil}
              alt="Pedro Miguel Moreira da Costa"
              width={600}
              height={750}
              loading="lazy"
              className={styles.profileImage}
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageBadge}>
              <span className={styles.badgeTitle}>Pedro Miguel Moreira da Costa</span>
              <span className={styles.badgeSubtitle}>Desenvolvedor Web Fullstack</span>
            </div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div>
            <span className="section-tag">Trajetória & Perfil</span>
            <h2 className="section-title">Engenharia sólida com acabamento visual apurado.</h2>
          </div>

          <div className={styles.bioParagraphs}>
            <p>
              Sou desenvolvedor focado em construir interfaces que combinam <strong>rigor de engenharia</strong>, 
              <strong>performance máxima</strong> e uma <strong>estética editorial diferenciada</strong>. Desenvolvo aplicações 
              web completas, desde a arquitetura de estado até a interação final no navegador.
            </p>
            <p>
              Minha formação em <strong>Análise e Desenvolvimento de Sistemas</strong> me dá a base sólida para pensar 
              em modelagem de dados, componentização escalável e boas práticas de código. Ao mesmo tempo, atuo 
              ativamente na criação de produtos comerciais reais, entregando sites e protótipos que geram valor direto 
              para clientes.
            </p>
            <p>
              Acredito que o verdadeiro diferencial de um produto digital está no cuidado com os detalhes: 
              tempo de resposta instantâneo, acessibilidade nativa, tipografia legível e adaptação impecável em telas 
              de qualquer tamanho.
            </p>
          </div>

          <div className={styles.metadataGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Formação Acadêmica</span>
              <span className={styles.metaValue}>Análise e Desenv. de Sistemas (3º Semestre)</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Especialidade</span>
              <span className={styles.metaValue}>Frontend Moderno & Soluções Web</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Localização</span>
              <span className={styles.metaValue}>Ceará, Brasil (Remoto / Presencial)</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Disponibilidade</span>
              <span className={styles.metaValue}>Projetos Freelance & Oportunidades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
