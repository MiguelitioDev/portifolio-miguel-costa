import styles from './Projects.module.css';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ongoingProjects } from '../data/projects';

export default function Projects() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={containerRef} id="projetos" className={`${styles.projectsSection} reveal-on-scroll`} aria-label="Projetos em andamento">
      <div className="site-container">
        <div className={styles.headerArea}>
          <span className="section-tag">Portfólio Selecionado</span>
          <h2 className="section-title">Projetos em Andamento</h2>
          <p className="section-subtitle">
            Aplicações web e protótipos reais em desenvolvimento ativo. Cada projeto reflete decisões de 
            engenharia de software, usabilidade e rigor visual.
          </p>
        </div>

        <div className={styles.projectsList}>
          {ongoingProjects.map((project) => (
            <article key={project.id} className={styles.projectCard} data-reveal>
              {/* Screenshot & Mockup Frame */}
              <div className={styles.imageWrapper}>
                <div className={styles.browserHeader} aria-hidden="true">
                  <div className={styles.browserDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.browserAddress}>
                    {project.demoUrl.replace('https://', '')}
                  </div>
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLinkImage}
                  tabIndex={-1}
                  aria-label={`Visualizar demonstração de ${project.title}`}
                >
                  <img
                    src={project.imageUrl}
                    alt={`Captura de tela do projeto ${project.title}`}
                    width={1200}
                    height={750}
                    loading="lazy"
                    className={styles.projectImg}
                  />
                  <div className={styles.imageHoverOverlay}>
                    <span className={styles.viewBadge}>
                      <span>Acessar demonstração</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </div>

              {/* Information Column */}
              <div className={styles.contentWrapper}>
                <div className={styles.metaRow}>
                  <span className={styles.indexNumber}>{project.index}</span>
                  <div className={styles.statusBadge}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>

                <p className={styles.projectDescription}>{project.description}</p>

                <ul className={styles.tagList} aria-label={`Tecnologias utilizadas em ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tagPill}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className={styles.actionRow}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    <span>Ver projeto ao vivo</span>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
