import { getUserFormSchema } from "@/Pages/ProfilePage/Components/ProfileForm/schema/schema";

export const getReadingsFormSchema = () =>
  getUserFormSchema().pick(["address"]);
