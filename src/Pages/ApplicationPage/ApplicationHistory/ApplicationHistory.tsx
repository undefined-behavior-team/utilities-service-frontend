import { AppTable } from "@/shared/Components/AppTable";
import { getApplicationColumns } from "../helpers";

export const ApplicationHistory = () => {
  const data = [
    {
      id: "3",
      date: "01.01.2025",
      status: "NEW",
      topic: "Тема заявки",
      person: "Зачем То Там",
      address: "ул. Пушкина, д.Колотушкина, корпус 2, кв.3",
    },
    {
      id: "2",
      date: "01.01.2025",
      status: "RECEIVED",
      topic: "Тема заявки",
      person: "Что То Там",
      address: "ул.Пушкина, д.Колотушкина, корпус 2, кв.2",
    },
    {
      id: "1",
      date: "01.01.2025",
      status: "DONE",
      topic: "Тема заявки",
      person: "Кто То Там",
      address: "ул.Пушкина, д.Колотушкина, корпус 2, кв.1",
    },
  ];

  return (
    <div>
      <AppTable columns={getApplicationColumns()} dataSource={data} />
    </div>
  );
};
