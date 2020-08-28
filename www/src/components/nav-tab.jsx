import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
    Avatar,
    AppBar,
    Badge,
    Tabs,
    Tab,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
} from "@material-ui/core"

import {
    AccountCircle,
    Home as HomeIcon,
    HomeWork as HomeWorkIcon,
    Wallpaper as WallpaperIcon,
    Forum as ForumIcon,
    Notifications,
    ExitToApp
} from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '15px',
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        marginRight:'15px',
        marginLeft: '15px'
    },
}));

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = window.user_session
    
  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="主页" icon={<HomeIcon />} href={"/"} />
          <Tab label="博客" icon={<WallpaperIcon />} href={"/blogs/"} />
          <Tab label="论坛" icon={<ForumIcon />} href={"/forum/"} />
          <div className={classes.grow}></div>
            {user.isLogin ? (
                //用户已登录
                <div>
                    <IconButton color="inherit" href={"/messages/"}>
                        <Badge badgeContent={user.messageCount||0} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleClickAvatar}
                        color="inherit"
                    >
                        <Avatar alt={user.username} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseAvatarMenu}
                    >
                        <MenuItem ico onClick={() => location.href=`/users/${user.uid}/`}>
                            <ListItemIcon>
                                <HomeWorkIcon fontSize={"small"}/>
                            </ListItemIcon>
                            个人主页
                        </MenuItem>
                        <MenuItem onClick={handleCloseAvatarMenu}>
                            <ListItemIcon>
                                <ExitToApp fontSize={"small"}/>
                            </ListItemIcon>
                            退出登录
                        </MenuItem>
                    </Menu>
                </div>
            ):(
                // 用户未登录
                <React.Fragment></React.Fragment>
            )}
          
        </Tabs>
      </AppBar>
    </div>
  );
}
