import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {
	useGetActorQuery,
	useGetMoviesByActorQuery,
} from '../../services/TMDB';
import { ArrowBack } from '@mui/icons-material';
import MovieList from '../MovieList/MovieList';
import { Img } from './styles';
import Pagination from '../Pagination/Pagination';

const Actors = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isFetching, error } = useGetActorQuery(id);
	const [page, setPage] = useState(1);
	const { data: movies } = useGetMoviesByActorQuery({ id, page });

	if (isFetching) {
		return (
			<Box display='flex' justifyContent='center'>
				<CircularProgress size='8rem' />
			</Box>
		);
	}

	if (error) {
		console.log(error);
		return (
			<Box display='flex' justifyContent='center' alignItems='center'>
				<Button
					startIcon={<ArrowBack />}
					onClick={() => navigate(-1)}
					color='primary'
				>
					Go back
				</Button>
			</Box>
		);
	}

	return (
		<>
			<Grid container spacing={3}>
				<Grid item lg={5} xl={4}>
					<Img
						src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
						alt={data.name}
					/>
				</Grid>
				<Grid
					item
					lg={7}
					xl={8}
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h2' gutterBottom>
						{data?.name}
					</Typography>
					<Typography variant='h5' gutterBottom>
						Born: {new Date(data?.birthday).toDateString()}
					</Typography>
					<Typography variant='body1' align='justify' paragraph>
						{data?.biography || 'Sorry, no biography yet...'}
					</Typography>
					<Box marginTop='2rem' display='flex' justifyContent='space-around'>
						<Button
							variant='contained'
							color='primary'
							target='_blank'
							href={`https://www.imdb.com/name/${data?.imdb_id}`}
						>
							IMDB
						</Button>
						<Button
							startIcon={<ArrowBack />}
							onClick={() => navigate(-1)}
							color='primary'
						>
							Back
						</Button>
					</Box>
				</Grid>
			</Grid>
			<Box margin='2rem 0'>
				<Typography variant='h2' gutterBottom align='center'>
					Movies
				</Typography>
				{movies && <MovieList movies={movies} limit={12} />}
				<Pagination
					currentPage={page}
					setPage={setPage}
					totalPages={movies?.total_pages}
				/>
			</Box>
		</>
	);
};

export default Actors;
