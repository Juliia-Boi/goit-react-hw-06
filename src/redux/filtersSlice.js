import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.value;

export default filtersSlice.reducer;
