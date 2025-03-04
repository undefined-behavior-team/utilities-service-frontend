import { Input, InputProps } from "antd";
import { FC } from "react";

export const AppInput: FC<InputProps> = ({ ...props }) => {
  return <Input {...props} />;
};
