import { Select, SelectProps } from "antd";
import { FC } from "react";

export const AppSelector: FC<SelectProps> = ({ ...props }) => {
  return <Select {...props} />;
};
