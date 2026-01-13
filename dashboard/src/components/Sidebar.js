import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RealEstateAgentRoundedIcon from '@mui/icons-material/RealEstateAgentRounded';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default function Sidebar({ open, onClose }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
        { text: 'Holdings', icon: <AccountBalanceWalletIcon />, path: '/holdings' },
        { text: 'Positions', icon: <RealEstateAgentRoundedIcon />, path: '/positions' },
        { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
        { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    ];

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': { width: drawerWidth },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={onClose}>
                    {theme.direction === 'rtl'
                        ? <ChevronRightIcon />
                        : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={location.pathname === item.path}
                            onClick={() => {
                                navigate(item.path);
                                onClose();
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />
        </Drawer>
    );
}
