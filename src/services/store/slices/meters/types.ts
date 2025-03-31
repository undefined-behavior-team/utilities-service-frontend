import { Meter } from "@/shared/types";
import { PayloadAction } from "@reduxjs/toolkit";

export type MetersState = { currentMeters: Meter[] };

export type SetMeters = (
  state: MetersState,
  action: PayloadAction<Meter[]>
) => void;
