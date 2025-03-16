import { Page } from "@/Components/Page/Page";
import { mainPageRoute } from "./main/config";
import { Route, Routes } from "react-router-dom";
import { readingsMainRoute } from "./readings/config";
import { readingsApplyRoute } from "./readings/readingsHistory/config";
import { readingsHistoryRoute } from "./readings/readingsApply/config";
import { applicationMainRoute } from "./application/config";
import { applicationHistoryRoute } from "./application/applicationHistory/config";
import { applicationApplyRoute } from "./application/applicationApply/config";

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
        <Route
          path={applicationMainRoute.path}
          element={applicationMainRoute.element}
        >
          <Route
            index
            path={applicationApplyRoute.path}
            element={applicationApplyRoute.element}
          />
          <Route
            path={applicationHistoryRoute.path}
            element={applicationHistoryRoute.element}
          />
        </Route>
      </Route>
    </Routes>
  );
};
