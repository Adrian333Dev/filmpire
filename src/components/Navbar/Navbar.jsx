import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
import Search from '../Search/Search';
import { fetchToken, moviesApi, createSessionId } from '../../utils';
import { setUser, userSelector } from '../../features/authSlice';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const Navbar = () => {
	const { isAuth, user } = useSelector(userSelector);
	const [mobileOpen, setMobileOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');
	const theme = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = localStorage.getItem('request_token');
	const sessionIdLS = localStorage.getItem('session_id');
	const colorMode = useContext(ColorModeContext);

	useEffect(() => {
		const logInUser = async () => {
			if (token) {
				if (sessionIdLS) {
					const { data: userData } = await moviesApi.get(
						`/account?session_id=${sessionIdLS}`
					);
					dispatch(setUser(userData));
				} else {
					const sessionId = await createSessionId();
					const { data: userData } = await moviesApi.get(
						`/account?session_id=${sessionId}`
					);
					dispatch(setUser(userData));
				}
			}
		};
		logInUser();
	}, [token]);

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
					<IconButton
						color='inherit'
						sx={{ ml: 1 }}
						onClick={colorMode.toggleColorMode}
					>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuth ? (
							<Button color='inherit' onClick={fetchToken}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<LinkBtn
								color='inherit'
								onClick={() => navigate(`/profile/${user.id}`)}
							> 
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									sx={{ width: 30, height: 30 }}
									alt='Profile'
									src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
								/>
							</LinkBtn>
						)}
					</div>
					{isMobile && <Search />}
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
