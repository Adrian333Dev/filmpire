import { styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	textOverflow: 'ellipsis',
	width: '230px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	marginTop: '10px',
	marginBottom: 0,
	textAlign: 'center',
}));

export const Links = styled('div')(({ theme }) => ({
	alignItems: 'center',
	fontWeight: 'bolder',
	cursor: 'pointer',
	[theme.breakpoints.up('xs')]: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

export const Img = styled('img')(({ theme }) => ({
	borderRadius: '5px',
	transition: 'all 0.25s ease-in-out',
	height: '300px',
	marginBottom: 1,
	'&:hover': {
		transform: 'scale(1.05)',
	},
}));
