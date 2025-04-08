import type { FC, HtmlHTMLAttributes } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  img: string;
  heading: string;
  text: string;
};

export const NewsItem: FC<HtmlHTMLAttributes<HTMLDivElement> & Props> = ({
  img,
  heading,
  text,
  ...props
}) => {
  return (
    <div className={classNames(styles.root, props.className)}>
      <div className={styles["image-block"]}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
      </div>
      <div className={styles["text-block"]}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.description}>{text}</div>
      </div>
    </div>
  );
};
