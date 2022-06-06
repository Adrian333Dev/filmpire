import { Button, styled, Typography } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const Btn = styled(Button)(({ theme }) => ({
	margin: '30px 2px',
}));

export const PageNum = styled(Typography)(({ theme }) => ({
	margin: '0 20px !important',
	color: theme.palette.text.primary,
}));
