import styles from './Amount.module.scss'

interface AmountProps {
  title: string;
  value: string;
}

export function Amount({ title, value }: AmountProps) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}
