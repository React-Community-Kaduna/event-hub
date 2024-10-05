import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "../../config/environment";
import { useCookies } from "react-cookie";

export const userSignIn = createAsyncThunk("user/signIn", async (data) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const request = await fetch(
      "http://localhost:4000/api/users/login",
      requestOptions
    );
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(`${error.message} error`);
  }
});

const userSignUp = createAsyncThunk("user/signUp", async (data) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const request = await fetch(
      "http://{{localhost}}:8080/api/users/login",
      requestOptions
    );
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(`${error.message} error`);
  }
});

// export const getRegisteredEvents = createAsyncThunk("user/events", async () => {
//   const [cookies] = useCookies(["userCookie"]);
//   // const token = localStorage.getItem("token");
//   const token = cookies?.userCookie;

//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-auth-token": token,
//     },
//   };
//   try {
//     const request = await fetch(`${END_POINT}/users/events`, requestOptions);
//     if (!request.ok) {
//       throw new Error(request.status);
//     }
//     const response = await request.json();
//     console.log("reg events", response);
//     return response;
//   } catch (error) {
//     console.log(`${error.message} error`);
//   }
// });
const authentication = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    signUp: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    }),
      builder.addCase(userSignIn.rejected, (state, action) => {
        state.error = action.error;
      }),
      builder.addCase(userSignUp.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      }),
      builder.addCase(userSignUp.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { login, logout } = authentication.actions;
export const userReducer = authentication.reducer;
