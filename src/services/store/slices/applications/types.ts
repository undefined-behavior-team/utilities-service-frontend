import { Application } from "@/shared/types";
import { MaybeType } from "@/shared/types/utility-types";
import { PayloadAction } from "@reduxjs/toolkit";

export type ApplicationState = {
  currentApplications: Application[];
  selectedApplication: MaybeType<Application>;
};

export type SetApplications = (
  state: ApplicationState,
  action: PayloadAction<Application[]>
) => void;

export type SetSelectedApplication = (
  state: ApplicationState,
  action: PayloadAction<Application>
) => void;
