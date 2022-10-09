import React, { useState } from 'react';
import {
    ListItemText,
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
} from '@mui/material/';
import style from './sideNav.module.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { Link } from 'react-router-dom';

export default function SideNav() {
    const [openNav, setOpenNav] = useState<boolean>(false);
    
    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setOpenNav(open);
        };

    return (
            <>
                <div className={style.drawerBtn} onClick={toggleDrawer(true)}>
                    <span className={style.drawerSpan}>{'>'}</span>
                </div>
                <Drawer
                    anchor={'left'}
                    open={openNav}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem disablePadding sx={{ width: '300px' }}>
                                <Link className={style.link} to="/">
                                    <ListItemIcon>
                                        <HouseOutlinedIcon className={style.icon}/>
                                        <ListItemText primary="Главная" />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>

                            <ListItem disablePadding sx={{ width: '200px' }}>
                                <Link className={style.link} to="/favorite">
                                    <ListItemIcon>
                                        <FavoriteBorderOutlinedIcon className={style.icon} />
                                        <ListItemText primary="Избранное" />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>

                            <ListItem disablePadding sx={{ width: '200px' }}>
                                <Link className={style.link} to="/rated">
                                    <ListItemIcon>
                                        <FavoriteBorderOutlinedIcon className={style.icon} />
                                        <ListItemText primary="Ваши оценки" />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
            </>
    );
}
