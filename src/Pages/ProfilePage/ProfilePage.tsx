import { ProfileForm } from "./Components/ProfileForm/ProfileForm";
import { ProfileHeader } from "./Components/ProfileHeader/ProfileHeader";
import styles from "./styles.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.root}>
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
};
