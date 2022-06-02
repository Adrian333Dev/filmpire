import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Box,
	CircularProgress,
	useMediaQuery,
	Typography,
} from '@mui/material';

import { useGetMoviesQuery } from '../../services/TMDB';
import { selectCategory } from '../../features/categorySlice';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
	const [page, setPage] = useState(1);
	const categorieName = useSelector(
		(state) => state.currentCategory.categoryName
	);
	const { data, error, isFetching } = useGetMoviesQuery({
		categorieName,
		page,
	});
	if (isFetching) {
		return (
			<Box display={'flex'} justifyContent={'center'}>
				<CircularProgress size={'4rem'} />
			</Box>
		);
	}

	if (data && !data.results.length) {
		return (
			<Box display={'flex'} alignItems={'center'} mt='20px'>
				<Typography variant='h4'>
					No Movies that match that name.
					<br />
					Please search for something else
				</Typography>
			</Box>
		);
	}

	if (error) return 'An error has occured.';

	return (
		<div>
			<MovieList movies={data} />
		</div>
	);
};

export default Movies;
