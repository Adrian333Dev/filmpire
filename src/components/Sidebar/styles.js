import { Box, styled } from '@mui/material';

export const LinkContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	padding: '10% 0',
	'& img': {
		width: '70%',
	},
}));

export const StyledLink = styled(Box)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: 'none',
}));
export const GenreImg = styled('img')(({ theme }) => ({
	filter: theme.palette.mode === 'dark' && 'invert(1)',
	height: '30px',
}));
