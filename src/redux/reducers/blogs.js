import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  blogs: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const blogsReducer = createReducer(initialState, (builder) => {
  // get all services
  builder
    .addCase("getAllBlogsRequest", (state) => {
      state.isLoading = true; // Set loading state to true when request starts
    })
    .addCase("getAllBlogsSuccess", (state, action) => {
      state.isLoading = false; // Set loading state to false on success
      state.blogs = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllBlogsFailed", (state, action) => {
      state.isLoading = false; // Set loading state to false on failure
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});
