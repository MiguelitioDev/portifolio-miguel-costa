import { useRef, useEffect } from 'react';
import styles from './Technologies.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Layout, Server, Box, Sparkles, Terminal, FileJson, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const containerRef = useRef<HTMLElement>(null);

  const affinities = [
    { label: "Em uso em projetos", color: "#10b981" }, // Verde
    { label: "Conhecimento básico", color: "#fbbf24" }, // Amarelo
    { label: "Aprendendo", color: "#3b82f6" } // Azul
  ];

  const technologies = [
    { name: "JavaScript", status: 0, icon: <Terminal size={24} /> },
    { name: "Python", status: 1, icon: <Code2 size={24} /> },
    { name: "HTML", status: 0, icon: <Layout size={24} /> },
    { name: "CSS", status: 0, icon: <Layout size={24} /> },
    { name: "React", status: 0, icon: <Globe size={24} /> },
    { name: "Node.js", status: 0, icon: <Server size={24} /> },
    { name: "Express.js", status: 0, icon: <Server size={24} /> },
    { name: "Three.js", status: 0, icon: <Box size={24} /> },
    { name: "Inteligência Artificial", status: 0, icon: <Sparkles size={24} /> },
  ];

  const apis = [
    { name: "SheetsDB", status: 0, icon: <Database size={24} /> },
    { name: "Supabase", status: 0, icon: <Database size={24} /> },
    { name: "Firecrawl", status: 0, icon: <FileJson size={24} /> },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    const items = gsap.utils.toArray(`.${styles.techItem}`);
    
    gsap.fromTo(items, 
      { opacity: 0, y: 20 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const TechCard = ({ item }: { item: any }) => (
    <div className={styles.techItem}>
      <div className={styles.techIconWrapper}>
        {item.icon}
      </div>
      <div className={styles.techInfo}>
        <h4>{item.name}</h4>
        <div className={styles.statusWrapper}>
          <span 
            className={styles.statusDot} 
            style={{ backgroundColor: affinities[item.status].color }}
          ></span>
          <span className={styles.statusText}>{affinities[item.status].label}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Linguagens e Tecnologias</h2>
          
          <div className={styles.legend}>
            {affinities.map((aff, i) => (
              <div key={i} className={styles.legendItem}>
                <span className={styles.statusDot} style={{ backgroundColor: aff.color }}></span>
                <span>{aff.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech, idx) => (
            <TechCard key={idx} item={tech} />
          ))}
        </div>

        <div className={styles.apiSection}>
          <h3 className={styles.subtitle}>APIs</h3>
          <div className={styles.grid}>
            {apis.map((api, idx) => (
              <TechCard key={`api-${idx}`} item={api} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
