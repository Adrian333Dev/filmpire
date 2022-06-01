import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Divider,
	List,
	ListItemText,
	ListSubheader,
	ListItemIcon,
	Box,
	CircularProgress,
	useTheme,
	ListItemButton,
} from '@mui/material';

import { GenreImg, LinkContainer, StyledLink } from './styles';

const demoCategories = [
	{ label: 'Comedy', value: 'comedy' },
	{ label: 'Action', value: 'action' },
	{ label: 'Horror', value: 'horror' },
	{ label: 'Animation', value: 'animation' },
];
const categories = [
	{ label: 'Popular', value: 'popular' },
	{ label: 'Top Rated', value: 'top_rated' },
	{ label: 'Upcoming', value: 'upcoming' },
];

const redLogo =
	'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo =
	'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<>
			<LinkContainer onClick={() => navigate('/')}>
				<img
					src={theme.palette.mode === 'light' ? redLogo : blueLogo}
					alt='Filmpire Logo'
				/>
			</LinkContainer>
			<Divider />
			<List>
				<ListSubheader>Categories</ListSubheader>
				{categories.map(({ label, value }) => (
					<StyledLink onClick={() => navigate('/')}>
						<ListItemButton>
							{/* <ListItemIcon>
								<GenreImg src={redLogo} className='genreImages' />
							</ListItemIcon> */}
							<ListItemText primary={label} />
						</ListItemButton>
					</StyledLink>
				))}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{demoCategories.map(({ label, value }) => (
					<StyledLink onClick={() => navigate('/')}>
						<ListItemButton>
							{/* <ListItemIcon>
								<GenreImg src={redLogo} className='genreImages' />
							</ListItemIcon> */}
							<ListItemText primary={label} />
						</ListItemButton>
					</StyledLink>
				))}
			</List>
		</>
	);
};

export default Sidebar;
