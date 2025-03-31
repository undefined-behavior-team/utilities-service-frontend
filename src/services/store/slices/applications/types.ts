import { Application } from "@/shared/types";
import { PayloadAction } from "@reduxjs/toolkit";

export type ApplicationState = { currentApplications: Application[] };

export type SetApplications = (
  state: ApplicationState,
  action: PayloadAction<Application[]>
) => void;
