import { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { useDispatch } from 'react-redux';
import { searchMovie, selectCategory } from '../features/categorySlice';
import { fetchToken } from '../utils';

const useAlan = () => {
	const { setMode } = useContext(ColorModeContext);
	const dispatch = useDispatch();
	useEffect(() => {
		alanBtn({
			key: '1cc8dc8ac6800db217c7b97f2dd9d7742e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
				if (command === 'chooseGenre') {
					const foundGenre = genres.find(
						(g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
					);

					if (foundGenre) {
						window.location.href = '/';
						dispatch(selectCategory(foundGenre.id));
					} else {
						const category = genreOrCategory.startsWith('top')
							? 'top_rated'
							: genreOrCategory;
						window.location.href = '/';
						dispatch(selectCategory(category));
					}
				} else if (command === 'changeMode') {
					if (mode === 'light') {
						setMode('light');
					} else {
						setMode('dark');
					}
				} else if (command === 'login') {
					fetchToken();
				} else if (command === 'logout') {
					localStorage.clear();
					window.location.href = '/';
				} else if (command === 'search') {
					dispatch(searchMovie(query));
				}
			},
		});
	}, [dispatch, setMode]);
};

export default useAlan;
