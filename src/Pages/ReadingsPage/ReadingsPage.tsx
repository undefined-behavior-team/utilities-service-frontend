import { useEffect } from "react";
import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { getPath } from "@/shared/utils";
import { useAppDispatch } from "@/services/store/hooks";
import { useGetMetersMutation } from "@/services/api/entities/meters/api";
import styles from "./styles.module.css";
import { setMeters } from "@/services/store/slices/meters/state";
import { GetMetersResponse } from "@/services/api/entities/meters/types";
import { handleMeterType } from "@/shared/utils/handle-meter-type";
import { MaybeType } from "@/shared/types/utility-types";
import { Meter } from "@/shared/types";

export const ReadingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [getMeters] = useGetMetersMutation();

  const handleMetersResponse = (data: GetMetersResponse) => {
    const validArray: MaybeType<Meter[]> = [];
    data.map((item) =>
      validArray.push({
        meterType: handleMeterType(item.meterName.toLowerCase().trim()),
        meterCount: item.data,
        createdAt: item.createdAt,
      })
    );
    return validArray;
  };

  useEffect(() => {
    getMeters()
      .unwrap()
      .then((data) => dispatch(setMeters(handleMetersResponse(data))));
  }, [dispatch, getMeters]);

  return (
    <div className={styles.root}>
      <Tabs
        onChange={(e) => navigate(e)}
        activeKey={getPath()}
        items={[
          {
            key: "apply",
            label: <div className={styles["tabs-item"]}>Подать показания</div>,
          },
          {
            key: "history",
            label: <div className={styles["tabs-item"]}>История</div>,
          },
        ]}
      />
      <Outlet />
    </div>
  );
};

/**
 *       <Segmented
        options={[
          {
            label: <div>Подать показания</div>,
            value: "apply",
          },
          {
            label: <div>История</div>,
            value: "history",
          },
        ]}
        onChange={(e) => navigate(e)}
      />
 */
