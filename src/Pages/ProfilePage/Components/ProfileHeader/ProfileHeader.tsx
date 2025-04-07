import styles from "./styles.module.css";

export const ProfileHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>Профиль</div>
    </div>
  );
};

//<div className={styles["delete-all"]}>Удалить все данные</div>
