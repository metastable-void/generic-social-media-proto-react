import { configureStore } from '@reduxjs/toolkit';

import { drawerSlice } from '../ui/drawer';
import { directionSlice } from '../ui/direction';

export const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
    direction: directionSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
