import { MeterTypes } from "@/shared/types";
import {
  getCountText,
  getTypeIcon,
  getTypeText,
} from "@/Pages/ReadingsPage/helpers";
import type { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  meterType: MeterTypes;
  meterCount: number;
};

export const MeterCard: FC<Props> = ({ meterType, meterCount }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>{getTypeIcon(meterType)}</div>
      <div className={styles.data}>
        <h5>{getTypeText(meterType)}</h5>
        <p>
          {meterCount} {getCountText(meterType)}
        </p>
      </div>
    </div>
  );
};
