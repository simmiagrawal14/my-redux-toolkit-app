import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import counterReducer from '../features/counter/counterSlice'
const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export default store;