import { Page } from "@/Components/Page/Page";
import { mainPageRoute } from "./main/config";
import { Route, Routes } from "react-router-dom";
import { readingsMainRoute } from "./readings/config";
import { readingsApplyRoute } from "./readings/readingsHistory/config";
import { readingsHistoryRoute } from "./readings/readingsApply/config";
import { applicationMainRoute } from "./application/config";
import { applicationHistoryRoute } from "./application/applicationHistory/config";
import { applicationApplyRoute } from "./application/applicationApply/config";
import { accrualsRoute } from "./accruals/config";
import { accrualsYearRoute } from "./accruals/accrualsYear/config";
import { newsPageRoute } from "./news/config";
import { servicesPageRoute } from "./services/config";
import { profilePageRoute } from "./profile/config";

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
        <Route path={accrualsRoute.path} element={accrualsRoute.element}>
          <Route
            path={accrualsYearRoute.path}
            element={accrualsYearRoute.element}
          />
        </Route>
        <Route path={newsPageRoute.path} element={newsPageRoute.element} />
        <Route
          path={servicesPageRoute.path}
          element={servicesPageRoute.element}
        />
        <Route
          path={profilePageRoute.path}
          element={profilePageRoute.element}
        />
      </Route>
    </Routes>
  );
};
