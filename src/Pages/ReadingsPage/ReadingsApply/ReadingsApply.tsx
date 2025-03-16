import { ApplyForm } from "./Components/ApplyForm/ApplyForm";
import { Meters } from "./Components/Meters/Meters";
import styles from "./styles.module.css";

export const ReadingsApply = () => {
  return (
    <div className={styles.root}>
      <ApplyForm />
      <Meters />
    </div>
  );
};
