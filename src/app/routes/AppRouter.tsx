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
import { authPageRoute } from "./auth/config";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { AuthRoute } from "./AuthRoute/AuthRoute";
import { adminPageRoute } from "./admin/config";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={authPageRoute.path}
        element={<AuthRoute>{authPageRoute.element}</AuthRoute>}
      />
      <Route
        path={adminPageRoute.path}
        element={<ProtectedRoute>{adminPageRoute.element}</ProtectedRoute>}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Page />
          </ProtectedRoute>
        }
      >
        <Route
          path={mainPageRoute.path}
          element={<ProtectedRoute>{mainPageRoute.element}</ProtectedRoute>}
        />
        <Route
          path={readingsMainRoute.path}
          element={<ProtectedRoute>{readingsMainRoute.element}</ProtectedRoute>}
        >
          <Route
            index
            path={readingsApplyRoute.path}
            element={
              <ProtectedRoute>{readingsApplyRoute.element}</ProtectedRoute>
            }
          />
          <Route
            path={readingsHistoryRoute.path}
            element={
              <ProtectedRoute>{readingsHistoryRoute.element}</ProtectedRoute>
            }
          />
        </Route>
        <Route
          path={applicationMainRoute.path}
          element={
            <ProtectedRoute>{applicationMainRoute.element}</ProtectedRoute>
          }
        >
          <Route
            index
            path={applicationApplyRoute.path}
            element={
              <ProtectedRoute>{applicationApplyRoute.element}</ProtectedRoute>
            }
          />
          <Route
            path={applicationHistoryRoute.path}
            element={
              <ProtectedRoute>{applicationHistoryRoute.element}</ProtectedRoute>
            }
          />
        </Route>
        <Route
          path={accrualsRoute.path}
          element={<ProtectedRoute>{accrualsRoute.element}</ProtectedRoute>}
        >
          <Route
            path={accrualsYearRoute.path}
            element={
              <ProtectedRoute>{accrualsYearRoute.element}</ProtectedRoute>
            }
          />
        </Route>
        <Route
          path={newsPageRoute.path}
          element={<ProtectedRoute>{newsPageRoute.element}</ProtectedRoute>}
        />
        <Route
          path={servicesPageRoute.path}
          element={<ProtectedRoute>{servicesPageRoute.element}</ProtectedRoute>}
        />
        <Route
          path={profilePageRoute.path}
          element={<ProtectedRoute>{profilePageRoute.element}</ProtectedRoute>}
        />
      </Route>
    </Routes>
  );
};
