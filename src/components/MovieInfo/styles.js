import { Grid, styled } from '@mui/material';

export const Container = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	margin: '10px 0 !important',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
}));

export const Poster = styled('img')(({ theme }) => ({
	borderRadius: '5px',
	boxShadow: '0.5em 1em 1em rgb(64,64,70)',
	width: '80%',
	[theme.breakpoints.down('sm')]: {
		margin: '0 auto',
		width: '100%',
		// height: '350px',
		marginBottom: '30px',
	},
	[theme.breakpoints.down('md')]: {
		margin: '0 auto',
		width: '50%',
		// height: '350px',
	},
}));
