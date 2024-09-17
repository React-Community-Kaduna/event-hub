import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { END_POINT } from "../src/config/environment";
import { useState } from "react";

const initialState = {
  events: [],
  status: "idle",
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  var myHeaders = new Headers();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM3MTg5NTY0ZDRkZDJiZjg5NWQzNDYiLCJpYXQiOjE3MjYyNzQyMjEsImV4cCI6MTcyODg2NjIyMX0.If99rA1BFIbZkDY1_7bmCHhIgPXfkczNfljuDx3tPho";

  myHeaders.append("x-auth-token", token);
  var e = [];
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  await fetch(`${END_POINT.BASE_URL1}/event/all`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("redux", result);
      e = result.events;
    })
    .catch((error) => {
      console.log("error", error);
    });
  console.log("e", e);
  return e;
});

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default eventsSlice.reducer;
