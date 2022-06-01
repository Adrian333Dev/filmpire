import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AppBar,
	IconButton,
	Button,
	Avatar,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import {
	Menu,
	AccountCircle,
	Brightness4,
	Brightness7,
} from '@mui/icons-material';
import { DrawerPaper, IconBtn, LinkBtn, Nav, StyledToolbar } from './styles';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');
	const theme = useTheme();
	const navigate = useNavigate();
	const isAuthenticated = true;

	return (
		<>
			<AppBar position='fixed'>
				<StyledToolbar>
					{isMobile && (
						<IconBtn
							edge='start'
							onClick={() => setMobileOpen((prevState) => !prevState)}
						>
							<Menu />
						</IconBtn>
					)}
					<IconButton color='inherit' sx={{ ml: 1 }}>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && 'Search ... '}
					<div>
						{!isAuthenticated ? (
							<Button color='inherit'>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<LinkBtn color='inherit' onClick={() => navigate('/profile/:id')}>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar sx={{ width: 30, height: 30 }} alt='Profile' />
							</LinkBtn>
						)}
					</div>
					{isMobile && 'Search ... '}
				</StyledToolbar>
			</AppBar>
			<div>
				<Nav>
					{isMobile ? (
						<DrawerPaper
							variant='temporary'
							anchor='right'
							open={mobileOpen}
							onClose={() => setMobileOpen((prevState) => !prevState)}
							ModalProps={{ keepMounted: true }}
						>
							<Sidebar setMobileOpen={setMobileOpen} />
						</DrawerPaper>
					) : (
						<DrawerPaper variant='permanent' open>
							<Sidebar setMobileOpen={setMobileOpen} />
						</DrawerPaper>
					)}
				</Nav>
			</div>
		</>
	);
};

export default Navbar;
