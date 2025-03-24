import { appRouterPaths } from "@/app/routes/appRouterPaths";

export const navLinks = [
  {
    path: appRouterPaths.accruals.main,
    label: "Начисления",
  },
  {
    path: appRouterPaths.readings.apply,
    label: "Показания",
  },
  {
    path: appRouterPaths.application.apply,
    label: "Заявки",
  },
  {
    path: appRouterPaths.services,
    label: "Услуги",
  },
  {
    path: appRouterPaths.news,
    label: "Новости",
  },
];
