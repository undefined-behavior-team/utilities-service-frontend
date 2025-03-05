import { Page } from "../../Components/Page/Page";
import { mainPageRoute } from "./main/config";

import { Route, Routes } from "react-router-dom";
import { readingsMainRoute } from "./readings/config";
import { readingsApplyRoute } from "./readings/readingsHistory/config";
import { readingsHistoryRoute } from "./readings/readingsApply/config";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route path={mainPageRoute.path} element={mainPageRoute.element} />
        <Route
          path={readingsMainRoute.path}
          element={readingsMainRoute.element}
        >
          <Route
            index
            path={readingsApplyRoute.path}
            element={readingsApplyRoute.element}
          />
          <Route
            path={readingsHistoryRoute.path}
            element={readingsHistoryRoute.element}
          />
        </Route>
      </Route>
    </Routes>
  );
};
