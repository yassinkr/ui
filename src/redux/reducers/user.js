
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // Indicates if the user is authenticated
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase("LoadUserRequest", (state) => {
    state.loading = true; // Set loading state to true when user loading starts
  });
  builder.addCase("LoadUserSuccess", (state, action) => {
    state.isAuthenticated = true; // Set authenticated state to true on successful load
    state.loading = false; // Set loading state to false on success
    state.user = action.payload; // Set the loaded user data
  });
  builder.addCase("LoadUserFail", (state, action) => {
    state.loading = false; // Set loading state to false on failure
    state.error = action.payload; // Set the error message
    state.isAuthenticated = false; // Set authenticated state to false
  });
  builder.addCase("clearErrors", (state) => {
    state.error = null; // Clear error state
  });
  
  builder.addCase("clearMessages", (state) => {
    state.successMessage = null; // Clear success message state
  });
});
