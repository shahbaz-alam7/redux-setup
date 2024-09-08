import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./users.actions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: 0,
    users: [],
  },
  reducers: {
    increment: (state) => (state.value += 1),
    decrement: (state) => (state.value -= 1),
    incrementByAmount: (state, action) => (state.value += action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
