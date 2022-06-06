import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../features/authSlice';

import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useGetListQuery } from '../../services/TMDB';
import RatedCards from '../RatedCards/RatedCards';

const Profile = () => {
	const { user } = useSelector(userSelector);

	const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
		listName: 'favorite/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});
	const { data: watchlistMovies, refetch: refetchWatchlisted } =
		useGetListQuery({
			listName: 'watchlist/movies',
			accountId: user.id,
			sessionId: localStorage.getItem('session_id'),
			page: 1,
		});

	useEffect(() => {
		refetchFavorites();
		refetchWatchlisted();
	}, []);

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
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
				<Typography variant='h5'>
					Add favorites or watchlist some movies to see them here!
				</Typography>
			) : (
				<Box>
					<RatedCards title='Favorite Movies' data={favoriteMovies} />
					<RatedCards title='Watchlist' data={watchlistMovies} />
				</Box>
			)}
		</Box>
	);
};

export default Profile;
