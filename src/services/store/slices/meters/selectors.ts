import { RootState } from "../../hooks";

export const metersSelector = (state: RootState) => state.meters.currentMeters;
