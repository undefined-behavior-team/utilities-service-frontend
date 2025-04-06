import { AppForm } from "@/shared/Components/AppForm";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { Button, Modal, ModalProps } from "antd";
import { useForm } from "react-hook-form";
import { FormSelector } from "@/shared/Components/AppForm/FormSelector";
import { FC, useEffect } from "react";
import { getStatusTag } from "@/Pages/ApplicationPage/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSelectedApplicationSchema } from "./schema";
import { SelectedApplicationFormValues } from "../../types";
import { useUpdateApplicationHomeownerMutation } from "@/services/api/entities/application/api";
import styles from "./styles.module.css";
import { selectedApplicationSelector } from "@/services/store/slices/applications/selectors";
import { useAppSelector } from "@/services/store/hooks";
import classNames from "classnames";

export const ApplicationModal: FC<ModalProps> = ({ ...props }) => {
  const selectedApplication = useAppSelector(selectedApplicationSelector);

  const formApi = useForm({
    resolver: yupResolver(getSelectedApplicationSchema()),
    defaultValues: {
      description: selectedApplication?.description ?? "",
      name: selectedApplication?.name ?? "",
      status: selectedApplication?.status ?? 0,
    },
  });

  const { reset } = formApi;

  const [updateApplication] = useUpdateApplicationHomeownerMutation();

  const submit = (data: SelectedApplicationFormValues) => {
    updateApplication({ body: { ...data }, id: selectedApplication?.id ?? "" });
    window.location.reload();
  };

  const modalClassNames = {
    content: styles["modal-content"],
    body: styles["modal-body"],
  };

  useEffect(() => {
    reset({
      description: selectedApplication?.description ?? "",
      name: selectedApplication?.name ?? "",
      status: selectedApplication?.status ?? 0,
    });
  }, [reset, selectedApplication]);

  return (
    <Modal
      {...props}
      footer={false}
      centered
      classNames={modalClassNames}
      title="Редактирование заявки"
    >
      <AppForm formApi={formApi} onSubmit={submit} className={styles.root}>
        <FormInput name="name" className={styles.input} />
        <FormInput name="description" className={styles.input} />
        <FormSelector
          name="status"
          className={classNames(styles.input, styles.selector)}
          options={[
            { label: getStatusTag(0), value: 0 },
            { label: getStatusTag(1), value: 1 },
            { label: getStatusTag(2), value: 2 },
          ]}
        />
        <Button
          variant="solid"
          color="blue"
          className={styles.button}
          htmlType="submit"
        >
          Обновить
        </Button>
      </AppForm>
    </Modal>
  );
};
