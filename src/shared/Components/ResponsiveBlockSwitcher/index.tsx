import { useEffect, useState, type FC, type ReactNode } from "react";

type Props = {
  mobile: ReactNode;
  desktop: ReactNode;
  mobileViewWidth?: number;
};

export const ResponsiveBlockSwitcher: FC<Props> = ({
  desktop,
  mobile,
  mobileViewWidth = 1000,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (mobileViewWidth >= width) {
    return <>{mobile}</>;
  }
  return <>{desktop}</>;
};
