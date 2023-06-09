import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Divider, Drawer, List, ListItem } from '@mui/material';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const { userData, logout } = useAuth();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
    router.push('/');
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box
              sx={{
                  height: '44px',
                  width: '116px',
                  background: `url(/images/logo-small-edu.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!userData?.profileId ? <Avatar>
                    {userData?.name.charAt(0)}
                </Avatar> : <Avatar alt="User Profile" src={`https://ucarecdn.com/${userData?.profileId}/`} />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ width: '100%', margin: '8px 0px' }}>
                    <Typography textAlign="center" variant='h6'>Account Details</Typography>
                    <Divider />
                </Box>
                <List sx={{ padding: 0 }}>
                    <ListItem>
                        <Typography textAlign="left" variant='body1'>Name: {userData?.name}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography textAlign="left" variant='body1'>Email: {userData?.email}</Typography>
                    </ListItem>
                </List>
              </Box>
              <Divider />
              <MenuItem onClick={handleLogout} sx={{ margin: '8px 0px'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                    <Box sx={{ width: '40px'}}>
                        <LogoutIcon />
                    </Box>
                    <Box sx={{ width: '120px'}}>
                        <Typography textAlign="left">Logout</Typography>
                    </Box>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;