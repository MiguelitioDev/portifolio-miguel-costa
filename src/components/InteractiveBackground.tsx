import styles from './InteractiveBackground.module.css';

export default function InteractiveBackground() {
  return (
    <div className={styles.ambientContainer} aria-hidden="true">
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />
      <div className={styles.ambientGlow3} />
      <div className={styles.ambientGrid} />
    </div>
  );
}
