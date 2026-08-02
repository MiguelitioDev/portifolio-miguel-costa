import { useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const projects = [
    { 
      title: "Protótipo RestaurantSystem", 
      desc: "Um sistema completo para gerenciamento de restaurantes, otimizando pedidos, estoque e atendimento com foco em usabilidade.", 
      techs: ["React", "Node.js", "Express"],
      githubUrl: "#",
      demoUrl: "#"
    },
    { 
      title: "Controle de Gastos com Chatbot e Digitalizador de Notas", 
      desc: "Plataforma financeira inteligente que utiliza IA para leitura de notas fiscais e chatbot para insights de economia.", 
      techs: ["Python", "React", "IA"],
      githubUrl: "#",
      demoUrl: "#"
    },
    { 
      title: "To Do List Universitário", 
      desc: "Aplicativo de produtividade adaptado para a rotina acadêmica, ajudando estudantes a organizarem provas, trabalhos e aulas.", 
      techs: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
      demoUrl: "#"
    },
    { 
      title: "Loja Digital Tech", 
      desc: "E-commerce moderno e responsivo com carrinho dinâmico, integração de pagamentos e interface imersiva em 3D.", 
      techs: ["Next.js", "Three.js", "Tailwind"],
      githubUrl: "#",
      demoUrl: "#"
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
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardImagePlaceholder}>
                   <div className={styles.imageOverlay}></div>
                   <span className={styles.placeholderText}>{proj.title.charAt(0)}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  
                  <div className={styles.techList}>
                    {proj.techs.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.cardActions}>
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className={styles.actionBtn}>
                      <FaGithub size={20} />
                      <span>Código</span>
                    </a>
                    <a href={proj.demoUrl} target="_blank" rel="noreferrer" className={styles.actionBtnPrimary}>
                      <ExternalLink size={20} />
                      <span>Ver Projeto</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
