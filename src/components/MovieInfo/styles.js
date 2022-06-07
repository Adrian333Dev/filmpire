import { Box, Grid, styled, Modal } from '@mui/material';

export const ContainerSpaceAround = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	margin: '10px 0 !important',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
}));

export const GenresContainer = styled(Grid)(({ theme }) => ({
	margin: '10px 0 !important',
	display: 'flex',
	justifyContent: 'space-around',
	flexWrap: 'wrap',
}));

export const GenreImg = styled('img')(({ theme }) => ({
	filter: theme.palette.mode === 'dark' && 'invert(1)',
	marginRight: '10px',
	height: '30px',
}));

export const CastImg = styled('img')(({ theme }) => ({
	width: '100%',
	maxWidth: '7em',
	height: '8em',
	objectFit: 'cover',
	borderRadius: '10px',
}));

export const Links = styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			padding: '0.5rem 1rem',
		},
}));

export const BtnsContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
}));

export const Poster = styled('img')(({ theme }) => ({
	borderRadius: '5px',
	boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
	width: '100%',
	height: 'auto',
	[theme.breakpoints.down('md')]: {
		margin: '0 auto',
		width: '50%',
	},
	[theme.breakpoints.down('sm')]: {
		margin: '0 auto',
		width: '100%',
		maxWidth: '350px',
		marginBottom: '30px',
	},
}));

export const StyledModal = styled(Modal)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const Video = styled('iframe')(({ theme }) => ({
	width: '50%',
	height: '50%',
	[theme.breakpoints.down('sm')]: {
		width: '90%',
		height: '90%',
	},
}));
