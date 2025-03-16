import { ReadingsForm } from "./Components/ReadingsForm/ReadingsForm";
import { Meters } from "./Components/Meters/Meters";
import styles from "./styles.module.css";

export const ReadingsApply = () => {
  return (
    <div className={styles.root}>
      <ReadingsForm />
      <Meters />
    </div>
  );
};
