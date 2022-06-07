import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Navbar, Movies, MovieInfo, Actors, Profile } from './components/index';
import { Content, Main, StyledToolbar } from './styles';
import useAlan from './components/Alan';

const App = () => {
	const alanBtnContainer = useRef(null);
	useAlan();
	return (
		<Main>
			<CssBaseline />
			<Navbar />
			<Content>
				<StyledToolbar />
				<Routes>
					<Route path='/' element={<Movies />} />
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
