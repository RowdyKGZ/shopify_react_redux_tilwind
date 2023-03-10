import { configureStore } from "@reduxjs/toolkit";

import playReducer from "./features/playerSlice";
import { shazamCoreApi } from "../redux/services/shazamCore";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
