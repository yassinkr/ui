import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  projects: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const projectsReducer = createReducer(initialState, (builder) => {
  // get all projects
  builder
    .addCase("getAllProjectsRequest", (state) => {
      state.isLoading = true; // Set loading state to true when request starts
    })
    .addCase("getAllProjectsSuccess", (state, action) => {
      state.isLoading = false; // Set loading state to false on success
      state.projects = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllProjectsFailed", (state, action) => {
      state.isLoading = false; // Set loading state to false on failure
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});

