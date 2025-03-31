import { persistReducer, persistStore } from "redux-persist";
import { authSlice } from "./slices/auth/state";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "../api/api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [authSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rootApi.middleware),
});

export const persistor = persistStore(store);
