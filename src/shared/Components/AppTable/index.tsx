import { Table, TableProps } from "antd";
import { FC } from "react";

export const AppTable: FC<TableProps> = ({ ...props }) => {
  return <Table {...props} />;
};
