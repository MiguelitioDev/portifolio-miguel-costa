import styles from './Capabilities.module.css';
import { Layout, Server, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type SkillLevel = 'active' | 'learning' | 'basic';

interface Skill {
  name: string;
  level: SkillLevel;
  levelLabel: string;
}

interface SkillCategory {
  title: string;
  icon: typeof Layout;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Interfaces',
    icon: Layout,
    skills: [
      { name: 'React 19 / 18', level: 'active', levelLabel: 'Em projetos' },
      { name: 'TypeScript', level: 'active', levelLabel: 'Em projetos' },
      { name: 'Tailwind CSS', level: 'active', levelLabel: 'Em projetos' },
      { name: 'Vite', level: 'active', levelLabel: 'Em projetos' },
      { name: 'Zustand', level: 'active', levelLabel: 'Em projetos' },
      { name: 'HTML5 Semântico & CSS', level: 'active', levelLabel: 'Em projetos' },
      { name: 'React Router v6', level: 'active', levelLabel: 'Em projetos' },
    ],
  },
  {
    title: 'Backend & Armazenamento',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 'learning', levelLabel: 'Em evolução' },
      { name: 'Python', level: 'learning', levelLabel: 'Em evolução' },
      { name: 'Supabase', level: 'active', levelLabel: 'Em projetos' },
      { name: 'IndexedDB', level: 'active', levelLabel: 'Em projetos' },
      { name: 'APIs RESTful', level: 'active', levelLabel: 'Em projetos' },
    ],
  },
  {
    title: 'Ferramentas & Integrações',
    icon: Cpu,
    skills: [
      { name: 'Git & GitHub', level: 'active', levelLabel: 'Em projetos' },
      { name: 'SheetsDB', level: 'active', levelLabel: 'Em projetos' },
      { name: 'Firecrawl', level: 'active', levelLabel: 'Em projetos' },
      { name: 'Integrações com APIs de IA', level: 'active', levelLabel: 'Em projetos' },
    ],
  },
];

export default function Capabilities() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={containerRef} id="capacidades" className={`${styles.capabilitiesSection} reveal-on-scroll`} aria-label="Capacidades técnicas">
      <div className="site-container">
        <div className={styles.headerArea}>
          <span className="section-tag">Stack & Ferramentas</span>
          <h2 className="section-title">Capacidades Técnicas</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas aplicadas no dia a dia para desenvolver sistemas rápidos, 
            estruturados e de fácil manutenção.
          </p>

          <div className={styles.legendContainer}>
            <div className={styles.legendItem}>
              <span className={`${styles.levelBadge} ${styles.levelActive}`}>Em projetos</span>
              <span>Uso frequente em código de produção</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.levelBadge} ${styles.levelLearning}`}>Em evolução</span>
              <span>Estudo contínuo e aprofundamento</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className={styles.categoryCard} data-reveal>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon} aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <ul className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span
                        className={`${styles.levelBadge} ${
                          skill.level === 'active'
                            ? styles.levelActive
                            : skill.level === 'learning'
                            ? styles.levelLearning
                            : styles.levelBasic
                        }`}
                      >
                        {skill.levelLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
