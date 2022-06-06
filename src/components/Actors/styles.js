import { styled } from '@mui/material';

export const Img = styled('img')(({ theme }) => ({
	maxWidth: '90%',
	borderRadius: '5px',
	objectFit: 'cover',
	boxShadow: '0.5em 0.5em 1em',
}));
