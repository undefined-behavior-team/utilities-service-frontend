import styles from "./styles.module.css";
import { MeterCard } from "./Components/MeterCard/MeterCard";
import { Button } from "antd";
import { PlusInCircleIcon } from "@/shared/icons";
import { useEffect, useState } from "react";
import { AddMeterForm } from "./Components/AddMeterForm/AddMeterForm";
import { useNavigate } from "react-router-dom";
import { appRouterPaths } from "@/app/routes/appRouterPaths";
import { useAppSelector } from "@/services/store/hooks";
import { metersSelector } from "@/services/store/slices/meters/selectors";

export const Meters = () => {
  const data = useAppSelector(metersSelector);
  const [addMeter, setAddMeter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [addMeter]);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.title}>Счётчики</p>
        <div
          className={styles["show-all"]}
          onClick={() => navigate(appRouterPaths.readings.history)}
        >
          Показать всё
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.cards}>
          {data
            .slice(-4)
            .reverse()
            .map((item) => {
              return (
                <MeterCard
                  key={item.id}
                  meterCount={item.meterCount}
                  meterType={item.meterType}
                />
              );
            })}
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          className={styles.button}
          onClick={() => setAddMeter(!addMeter)}
        >
          <PlusInCircleIcon width={40} height={40} fill="#004f9e" />
          Добавить счётчик
        </Button>
      </div>
      {addMeter && <AddMeterForm setAddMeter={setAddMeter} />}
    </div>
  );
};
