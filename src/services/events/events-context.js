import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "../../config/environment";

export const allEvents = createAsyncThunk("events/all", async () => {
  try {
    const request = await fetch(`${END_POINT.BASE_URL}/event/all`);
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(`${error.message} error`);
  }
});

export const porpularEvents = createAsyncThunk("events/porpular", async () => {
  try {
    const request = await fetch(`${END_POINT.BASE_URL}/event/porpular`);
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(`${error.message} error`);
  }
});

const event = createSlice({
  name: "event",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allEvents.fulfilled, (state, action) => {
      state.allEvents = action.payload.events;
      state.status = "events loaded";
    }),
      builder.addCase(allEvents.rejected, (state, action) => {
        state.error = action.error;
      }),
      builder.addCase(porpularEvents.fulfilled, (state, action) => {
        state.porpularEvents = action.payload;
        state.status = "events loaded";
      }),
      builder.addCase(porpularEvents.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const eventReducer = event.reducer;
