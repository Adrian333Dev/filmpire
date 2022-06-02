import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
	name: 'currentCategory',
	initialState: {
		categoryName: '',
		page: 1,
		searchQuery: '',
	},
	reducers: {
		selectCategory: (state, action) => {
			state.categoryName = action.payload;
		},
	},
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
