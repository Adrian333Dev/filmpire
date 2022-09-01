import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import { Container, CssTextField } from './styles';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../features/categorySlice';

const Search = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const location = useLocation();

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			dispatch(searchMovie(query));
		}
	};

	if (location.pathname !== '/') return null;

	return (
		<Container>
			<CssTextField
				onKeyPress={handleKeyPress}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				variant='standard'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</Container>
	);
};

export default Search;
