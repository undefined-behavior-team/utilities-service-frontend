/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import styles from "./styles.module.css";

type Props = {
  formApi: UseFormReturn<any>;
  onSubmit?: SubmitHandler<any>;
  className?: string;
};

export const AppForm: FC<PropsWithChildren<Props>> = ({
  onSubmit = () => {},
  formApi,
  children,
  className,
}) => {
  return (
    <FormProvider {...formApi}>
      <form
        className={classNames(styles.form, className)}
        onSubmit={formApi.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
