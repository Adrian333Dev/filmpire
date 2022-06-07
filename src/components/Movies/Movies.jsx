import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Box,
	CircularProgress,
	useMediaQuery,
	Typography,
} from '@mui/material';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

const Movies = () => {
	const [page, setPage] = useState(1);
	const categorieName = useSelector(
		(state) => state.currentCategory.categoryName
	);
	const searchQuery = useSelector((state) => state.currentCategory.searchQuery);

	const { data, error, isFetching } = useGetMoviesQuery({
		categorieName,
		page,
		searchQuery,
	});
	const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
	const numberOfMovies = lg ? 17 : 19;

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
			<FeaturedMovie movie={data.results[0]} />
			<MovieList movies={data} limit={numberOfMovies} first/>
			<Pagination
				currentPage={page}
				setPage={setPage}
				totalPages={data.total_pages}
			/>
		</div>
	);
};

export default Movies;
