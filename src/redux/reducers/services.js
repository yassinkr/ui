

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  services: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const servicesReducer = createReducer(initialState, (builder) => {
  // get all services
  builder
    .addCase("getAllServicesRequest", (state) => {
      state.isLoading = true; // Set loading state to true when request starts
    })
    .addCase("getAllServicesSuccess", (state, action) => {
      state.isLoading = false; // Set loading state to false on success
      state.services = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllServicesFailed", (state, action) => {
      state.isLoading = false; // Set loading state to false on failure
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});
