import { Controller, useFormContext } from "react-hook-form";
import TextArea, { TextAreaProps, TextAreaRef } from "antd/es/input/TextArea";
import { forwardRef } from "react";

export const FormTextArea = forwardRef<
  TextAreaRef,
  TextAreaProps & { name: string }
>(({ name = "", ...props }, ref) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextArea
          ref={ref}
          value={value}
          status={errors[name] ? "error" : ""}
          onChange={onChange}
          {...props}
        />
      )}
    />
  );
});
