import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
    Avatar,
    AppBar,
    Badge,
    Tabs,
    Tab,
    IconButton
} from "@material-ui/core"

import {
    AccountCircle,
    Home as HomeIcon,
    Wallpaper as WallpaperIcon,
    Forum as ForumIcon,
    Notifications,
} from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      // width: '100%',
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
            {/* userBar */}
          <div className={classes.grow}></div>
          <div>
              <IconButton aria-label="show 17 new notifications" color="inherit" href={"/messages/"}>
                  <Badge badgeContent={17} color="secondary">
                    <Notifications />
                  </Badge>
              </IconButton>
                <IconButton
                    aria-label="account of current user"
                    // aria-controls={menuId}
                    aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <Avatar alt="Remy Sharp">F</Avatar>
                </IconButton>
          </div>
        </Tabs>
      </AppBar>
    </div>
  );
}
