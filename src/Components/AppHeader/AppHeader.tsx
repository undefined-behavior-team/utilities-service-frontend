import { ResponsiveBlockSwitcher } from "@/shared/Components/ResponsiveBlockSwitcher";
import { AppHeaderDesktop } from "./AppHeaderDesktop";
import { AppHeaderMobile } from "./AppHeaderMobile";

export const AppHeader = () => {
  return (
    <ResponsiveBlockSwitcher
      desktop={<AppHeaderDesktop />}
      mobile={<AppHeaderMobile />}
    />
  );
};
