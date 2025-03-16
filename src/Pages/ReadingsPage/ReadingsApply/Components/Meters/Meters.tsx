import { Meter } from "@/shared/types";
import styles from "./styles.module.css";
import { MeterCard } from "./Components/MeterCard/MeterCard";
import { Button } from "antd";
import { PlusInCircleIcon } from "@/shared/icons";
import { useState } from "react";
import { AddMeterForm } from "./Components/AddMeterForm/AddMeterForm";
import { useNavigate } from "react-router-dom";
import { appRouterPaths } from "@/app/routes/appRouterPaths";

export const Meters = () => {
  const [addMeter, setAddMeter] = useState(false);
  const navigate = useNavigate();

  const data: Meter[] = [
    {
      id: "1",
      meterType: "COLD_WATER",
      meterCount: 0,
    },
    {
      id: "2",
      meterType: "GAS",
      meterCount: 123,
    },
    {
      id: "3",
      meterType: "GAS",
      meterCount: 321,
    },
    {
      id: "4",
      meterType: "ELECTRICITY",
      meterCount: 0,
    },

    {
      id: "5",
      meterType: "ELECTRICITY",
      meterCount: 0,
    },
  ];

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
      {addMeter && <AddMeterForm />}
    </div>
  );
};
