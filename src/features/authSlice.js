import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
	isAuth: false,
	sessionId: '',
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isAuth = true;
			state.sessionId = localStorage.getItem('session_id');
			localStorage.setItem('accountId', action.payload.id);
		},
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;
