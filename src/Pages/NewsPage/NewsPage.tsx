import styles from "./styles.module.css";

export const NewsPage = () => {
  return (
    <div className={styles.root}>
      <img src="/news_2.png" alt="news" width={500} />
      <div className={styles["text-block"]}>
        <div className={styles.heading}>Новостей нет</div>
        <div className={styles.description}>
          И всё у всех хорошо и слава Богу.
        </div>
      </div>
    </div>
  );
};
