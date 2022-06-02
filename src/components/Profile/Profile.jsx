import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../features/authSlice';

import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

const Profile = () => {
	const { user } = useSelector(userSelector);

	const favorite = [];

	const logOut = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	return (
		<Box>
			<Box display={'flex'} justifyContent='space-between'>
				<Typography variant='4' gutterBottom>
					My Profile
				</Typography>
				<Button color='inherit' onClick={logOut}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{!favorite.length ? (
				<Typography variant='h5'>
					Add favorites or watchlist some movies to see them here!
				</Typography>
			) : (
				<Box>FAVORITES</Box>
			)}
		</Box>
	);
};

export default Profile;
