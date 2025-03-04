import { Segmented } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

export const ReadingsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Segmented
        options={[
          {
            label: <div>Подать показания</div>,
            value: "apply",
          },
          {
            label: <div>История</div>,
            value: "history",
          },
        ]}
        onChange={(e) => navigate(e)}
      />
      <Outlet />
    </div>
  );
};
