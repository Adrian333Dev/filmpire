import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	Movie as MovieIcon,
	Theaters,
	Language,
	PlusOne,
	Favorite,
	FavoriteBorderOutlined,
	Remove,
	ArrowBack,
} from '@mui/icons-material';
import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';

import { useGetMovieQuery } from '../../services/TMDB';
import { Container, Poster } from './styles';

const MovieInfo = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);

	if (isFetching) {
		return (
			<Box display={'flex'} justifyContent='center' alignItems={'center'}>
				<CircularProgress size={'8rem'} />
			</Box>
		);
	}

	if (error) {
		return (
			<Box display={'flex'} justifyContent='center' alignItems={'center'}>
				<Link to={'/'}>Something has gone wrong - Go back</Link>
			</Box>
		);
	}

	return (
		<Container container>
			<Grid item xs={12} lg={4}>
				<Poster
					src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
					alt={data?.title}
				/>
			</Grid>
			<Grid item container direction={'column'} lg={7}>
				<Typography variant='h3' align={'center'} gutterBottom>
					{data?.title} {data.release_date.split('-')[0]}
				</Typography>
				<Typography variant='h5' align={'center'} gutterBottom>
					{data?.tagline}
				</Typography>
				<Container item>
					<Box display={'flex'} align='center'>
						<Rating readOnly value={data.vote_average / 2} />
					</Box>
				</Container>
			</Grid>
		</Container>
	);
};

export default MovieInfo;
