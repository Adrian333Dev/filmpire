import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

// ! toolkit
import categoryReducer from '../features/categorySlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		currentCategory: categoryReducer,
		user: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tmdbApi.middleware),
});
