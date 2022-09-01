import React, { useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Navbar, Movies, MovieInfo, Actors, Profile } from './components/index';
import { Content, Main, StyledToolbar } from './styles';
import useAlan from './components/Alan';

const App = () => {
	const alanBtnContainer = useRef(null);
	const navigate = useNavigate();
	useAlan();

	useEffect(() => {
		navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Main>
			<CssBaseline />
			<Navbar />
			<Content>
				<StyledToolbar />
				<Routes>
					<Route path='/' element={<Movies />} />
					<Route path='/categories/:id' element={<Movies />} />
					<Route path='/genre/:id' element={<Movies />} />
					<Route path='/approved' element={<Movies />} />
					<Route path='/movie/:id' element={<MovieInfo />} />
					<Route path='/actors/:id' element={<Actors />} />
					<Route path='/profile/:id' element={<Profile />} />
				</Routes>
			</Content>
			<div ref={alanBtnContainer} />
		</Main>
	);
};

export default App;
