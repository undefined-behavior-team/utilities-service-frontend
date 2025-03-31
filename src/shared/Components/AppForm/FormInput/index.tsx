import { Controller, useFormContext } from "react-hook-form";
import { type InputProps } from "antd";
import { ErrorMessage } from "@hookform/error-message";
import { AppInput } from "../../AppInput";
import type { FC } from "react";

export const FormInput: FC<InputProps> = ({ name = "", ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <AppInput
          value={value}
          status={errors[name] ? "error" : ""}
          suffix={<ErrorMessage errors={errors} name={name} />}
          onChange={onChange}
          {...props}
        />
      )}
    />
  );
};
