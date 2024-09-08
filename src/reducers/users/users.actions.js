import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data);
  return response;
});

export { fetchUsers };
