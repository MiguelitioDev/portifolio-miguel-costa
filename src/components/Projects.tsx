import { useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import nexserveImg from '../foto/nexserve.png';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'NexServe ERP',
      category: 'SaaS / ERP',
      description: 'Sistema comercial robusto para restaurantes. Simula backend em nuvem usando IndexedDB e Zustand, oferecendo performance ultrarrápida, escalabilidade e gestão de PDV.',
      tags: ['React 18', 'TypeScript', 'Tailwind', 'Zustand', 'IndexedDB'],
      demoUrl: '',
      githubUrl: '',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      category: 'Web App',
      description: 'Painel financeiro interativo focado em visualização de dados e análise preditiva.',
      tags: ['React', 'TypeScript', 'Framer Motion', 'Recharts'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'E-commerce Premium',
      category: 'E-commerce',
      description: 'Plataforma de vendas com transições fluidas e carrinho persistente.',
      tags: ['Next.js', 'Stripe', 'Tailwind', 'Zustand'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'AI Generator',
      category: 'Inteligência Artificial',
      description: 'Interface geradora de imagens conectada a modelos de difusão de ponta.',
      tags: ['React', 'Node.js', 'OpenAI', 'CSS Modules'],
      demoUrl: '#',
      githubUrl: '#',
      imageUrl: '',
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray(`.${styles.projectCard}`);

    // Horizontal Scroll
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth
      }
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <h2 className={styles.header}>Projetos</h2>
      <div className={styles.scrollContainer}>
        <div ref={scrollWrapperRef} className={styles.scrollWrapper}>
          {projects.map((proj, idx) => {
            const isComingSoon = proj.githubUrl === "#" || proj.demoUrl === "#" || !proj.githubUrl || !proj.demoUrl;

            return (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardImageContainer}>
                    {proj.imageUrl ? (
                      <img src={proj.imageUrl} alt={proj.title} className={styles.cardImage} />
                    ) : (
                      <div className={styles.cardImagePlaceholder}>
                        <div className={styles.imageOverlay}></div>
                        <span className={styles.placeholderText}>{proj.title.charAt(0)}</span>
                      </div>
                    )}
                    {isComingSoon && <div className={styles.comingSoonTag}>Em Breve Nessa Semana</div>}
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>

                    <div className={styles.techList}>
                      {proj.tags.map((tag, i) => (
                        <span key={i} className={styles.techTag}>{tag}</span>
                      ))}
                    </div>

                    <div className={styles.cardActions}>
                      {isComingSoon ? (
                        <>
                          <div className={styles.disabledBtn}>
                            <FaGithub size={20} />
                            <span>Código em breve</span>
                          </div>
                          <div className={`${styles.disabledBtn} ${styles.disabledBtnPrimary}`}>
                            <ExternalLink size={20} />
                            <span>Projeto em breve</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <a href={proj.githubUrl} target="_blank" rel="noreferrer" className={styles.actionBtn}>
                            <FaGithub size={20} />
                            <span>Código</span>
                          </a>
                          <a href={proj.demoUrl} target="_blank" rel="noreferrer" className={styles.actionBtnPrimary}>
                            <ExternalLink size={20} />
                            <span>Ver Projeto</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
