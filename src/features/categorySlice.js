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
			state.searchQuery = '';
		},
		searchMovie: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

export const { selectCategory, searchMovie } = categorySlice.actions;

export default categorySlice.reducer;
