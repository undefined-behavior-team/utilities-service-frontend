import { MaybeType } from "@/shared/types/utility-types";
import { FC } from "react";
import { AdminFormLink } from "./AdminFormLink";
import { AdminAction } from "../../types";
import { AdminFormAdd } from "./AdminFormAdd";

type Props = {
  actionType: MaybeType<AdminAction>;
  handleReturn: () => void;
};

export const AdminForm: FC<Props> = ({ actionType, handleReturn }) => {
  switch (actionType) {
    case "LINK": {
      return <AdminFormLink handleReturn={handleReturn} />;
    }
    case "ADD": {
      return <AdminFormAdd handleReturn={handleReturn} />;
    }
  }
};
