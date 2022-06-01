import { Button, Drawer, IconButton, styled, Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	height: '80px',
	display: 'flex',
	justifyContent: 'space-between',
	marginLeft: '240px',
	[theme.breakpoints.down('sm')]: {
		marginLeft: 0,
		flexWrap: 'wrap',
	},
}));

export const IconBtn = styled(IconButton)(({ theme }) => ({
	color: 'inherit',
	outline: 'none',
	marginRight: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

export const Nav = styled('nav')(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		width: '240px',
		flexShrink: 0,
	},
}));

export const DrawerPaper = styled(Drawer)(({ theme }) => ({
	width: '240px',
}));

export const LinkBtn = styled(Button)(({ theme }) => ({
	'&:hover': {
		color: 'white !important',
		textDecoration: 'none',
	},
}));
