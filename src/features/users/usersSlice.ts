import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (dispatch, state) => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
);

interface userstate {
  users: { name: string }[];
  status: "loading" | null | "success" | "reject";
} 

interface users {
  name: string;
}

// interface statususer{
//   status: "loading" | null | "success" | "success";
// }

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state: userstate) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state: userstate, action: PayloadAction<users[]>) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state: userstate) => {
      state.status = "reject";
    },
  },
});

export default usersSlice.reducer;
