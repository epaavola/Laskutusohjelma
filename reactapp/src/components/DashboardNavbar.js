import React , { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/Inbox';
import Settings from '@material-ui/icons/Settings';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

/**
 * Navigation bar and leftside menu for dashboard
 */ 

const DashboardNavbar = (props) => {
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
 
const handleDrawerClick = () => {
    if(!open) setOpen(true);
    else setOpen(false);
}

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.Toolbar}>
            <IconButton 
                edge="start"  
                color="inherit" 
                aria-label="menu"
                onClick={handleDrawerClick}
                className={classes.menuButton}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Laskutusohjelma
            </Typography>
            <Button color="inherit" component={Link} to ="/">Logout</Button>
            </Toolbar>
        </AppBar>
        <Drawer 
            className={classes.Drawer}
            variant="persistent"
            open={open}
            anchor="left"
            >
            <Divider />
                <List>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                            <ListItemIcon>
                                <KeyboardArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Etusivu" />   
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <InsertDriveFile />
                        </ListItemIcon>
                        <ListItemText primary="Uusi Lasku" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Asiakkaat" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Arkisto" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Asetukset" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <LiveHelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard" onClick={handleDrawerClick}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tietoa Meistä" />
                    </ListItem>
                </List>
            <Divider />
        </Drawer>
    </div>
  );
}

export default withRouter(DashboardNavbar)