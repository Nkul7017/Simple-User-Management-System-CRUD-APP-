/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const GetAllUser = createAsyncThunk("Users", async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const AddUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(`http://localhost:5000/users`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const UpdateUser = createAsyncThunk("updateUser", async ({data, _id}) => {
  try {
    console.log(_id);
    const response = await axios.put(
      `http://localhost:5000/users/${_id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const DeleteUser = createAsyncThunk("deleteUser", async (_id) => {
  try {
    console.log(_id);
    const response = await axios.delete(`http://localhost:5000/users/${_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const UserSlice = createSlice({
  name: "User",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [GetAllUser.pending]: (state) => {
      state.loading = true;
    },
    [GetAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleUser = [];
      state.users = action.payload;
    },
    [GetAllUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateUser.pending]: (state) => {
      state.loading = true;
    },
    [UpdateUser.fulfilled]: (state, action) => {
      console.log("updated user fulfilled", action.payload);
      state.loading = false;
      state.users = state.users.map((ele) =>
        ele._id === action.payload._id ? action.payload : ele
      );
    },
    [UpdateUser.rejected]: (state) => {
      state.loading = true;
    },
    [AddUser.pending]: (state) => {
      state.loading = false;
    },
    [AddUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [AddUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [DeleteUser.pending]: (state) => {
      state.loading = true;
    },
    [DeleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      
      const { _id } = action.payload;
      if (_id) {
        state.users = state.users.filter((user) => user._id !== _id);
      }
    },
    [DeleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },  
});
export default UserSlice.reducer;
