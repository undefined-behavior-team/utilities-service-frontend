import { Controller, useFormContext } from "react-hook-form";
import type { FC } from "react";
import { AppSelector } from "../../AppSelector";
import { SelectProps } from "antd";
import { DefaultOptionType } from "antd/es/select";

type Props = {
  name: string;
};

export const FormSelector: FC<
  SelectProps<unknown, DefaultOptionType> & Props
> = ({ name = "", ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <AppSelector
          value={value}
          status={errors[name] ? "error" : ""}
          //suffix={<ErrorMessage errors={errors} name={name} />}
          onChange={onChange}
          {...props}
        />
      )}
    />
  );
};
