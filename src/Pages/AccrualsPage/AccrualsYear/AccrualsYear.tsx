import { AppTable } from "@/shared/Components/AppTable";
import { getAccrualsColumns, getAccrualsColumnsMobile } from "../helpers";
import { useAppSelector } from "@/services/store/hooks";
//import { Button } from "antd";
//import { useAddPaymentMutation } from "@/services/api/entities/payments/api";
import { paymentsSelector } from "@/services/store/slices/payments/selectors";
import { ResponsiveBlockSwitcher } from "@/shared/Components/ResponsiveBlockSwitcher";
import styles from "../styles.module.css";

export const AccrualsYear = () => {
  const data = useAppSelector(paymentsSelector);

  /*
  const [addPayment] = useAddPaymentMutation();
  const submit = () => {
    addPayment({
      paymentMethod: "test",
      amount: 123,
      status: "test",
    });
  };
*/
  /*
  const { year } = useParams();
  
  const getDataSource = () => {
    switch (year) {
      case "2025": {
        return mockupData2025;
      }
      case "2024": {
        return mockupData2024;
      }
      case "2023": {
        return mockupData2023;
      }
    }
  };*/
  return (
    <div>
      <ResponsiveBlockSwitcher
        desktop={<AppTable columns={getAccrualsColumns()} dataSource={data} />}
        mobile={
          <AppTable
            columns={getAccrualsColumnsMobile()}
            dataSource={data}
            virtual
            scroll={{ x: 342, y: 500 }}
            rootClassName={styles.table}
          />
        }
      />
    </div>
  );
};

/*
 <Button
        onClick={() => {
          submit();
        }}
      >
        Отправить
      </Button>
*/
