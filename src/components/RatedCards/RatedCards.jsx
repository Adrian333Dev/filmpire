import React from 'react';
import { Typography, Box } from '@mui/material';

import Movie from '../Movie/Movie';
import { Container } from './styles';

const RatedCards = ({ title, data }) => {
	return (
		<Box>
			<Typography variant='h5' gutterBottom>
				{title}
			</Typography>
			<Container>
				{data?.results.map((movie, i) => (
					<Movie key={movie.id} movie={movie} i={i} />
				))}
			</Container>
		</Box>
	);
};

export default RatedCards;
