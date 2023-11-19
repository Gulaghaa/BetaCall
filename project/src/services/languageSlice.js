import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'az', 
  },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload; 
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
