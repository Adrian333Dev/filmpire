import { styled } from '@mui/material';

export const Main = styled('div')(({ theme }) => ({
	display: 'flex',
	height: '100%',
	width: '100%',
}));
export const StyledToolbar = styled('div')(({ theme }) => ({
	height: '70px',
}));
export const Content = styled('main')(({ theme }) => ({
	flexGrow: 1,
	padding: '2em',
}));
