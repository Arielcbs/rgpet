import React, { useContext, useState } from 'react';
import 
{ Select, MenuItem, Divider, AppBar, Toolbar, Typography, Button, Box, withStyles, IconButton, Hidden, List, ListItem, Drawer, CssBaseline } 
from '@material-ui/core';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PetsIcon from '@material-ui/icons/Pets';
import CropFreeIcon from '@material-ui/icons/CropFree';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Logo from './imgs/Logo';

const useLanguage = {
    english: {
        chlang: 'Change Language:',
        lang: 'EN',
        landing: 'Landing Page',
        login: 'Login',
        register: 'Register',
        profile: 'Profile',
        pets: 'Pets',
        scan: 'Scan a Pet',
        logout: 'Logout',
        close: 'Close',
        contact: 'Contact Us'
    },
    portuguese: {
        chlang: 'Mudar idioma:',
        lang: 'PT-BR',
        landing: 'Página Inicial',
        login: 'Entre',
        register: 'Cadastre-se',
        profile: 'Perfil',
        pets: 'Pets',
        scan: 'Escanear um Pet',
        logout: 'Deslogar',
        close: 'Fechar',
        contact: 'Fale Conosco'
    }
}

function Navbar(props){
    const { language, changeLanguage } = useContext(LanguageContext);
    const { chlang, landing, login, register, profile, pets, scan, logout, close, contact } = useLanguage[language];
    const [mobileOpen, setMobileOpen] = useState(false);
    //MAKE THIS COME FROM THE BACK, A STATE PROBABLY SHOULD COME FROM THE GLOBAL STATE (APP.JS), VIA PROPS OR HOOKS.
    const [isLogged, setLogged] = useState(true);
    const { classes, container } = props;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawerContentLogged = (
        <Box>
            <Typography  style={{margin:'1rem'}} variant='h6'>RG Pet</Typography>
            <List>
            <ListItem button key='home'><HomeIcon /> {landing}</ListItem>
            <ListItem button key='profile'><PersonOutlineIcon /> {profile}</ListItem>
            <ListItem button key='pets'><PetsIcon /> {pets}</ListItem>
            <ListItem button key='scan'><CropFreeIcon /> {scan}</ListItem>
            <ListItem button key='contact'><HeadsetMicIcon /> {contact}</ListItem>
            </List>
        </Box> 
    )
    
    const drawerContentUnlogged = (
        <Box>
            <Typography variant='h6'>RG Pet</Typography>
            <List>
            <ListItem button key='home'><HomeIcon /> {landing}</ListItem>
            <ListItem button key='login'><PersonOutlineIcon /> {login}</ListItem>
            <ListItem button key='register'><PersonAddOutlinedIcon /> {register}</ListItem>
            <ListItem button key='scan'><CropFreeIcon /> {scan}</ListItem>
            <ListItem button key='contact'><HeadsetMicIcon /> {contact}</ListItem>
            </List>
            
        </Box> 
    )

    return(
        <div>
        <CssBaseline />
        <AppBar position='fixed' color='inherit'>
            <Toolbar >
            <Typography style={{paddingTop:'.4rem'}} variant='h6'>
                <Logo  name='logo' /> 
            </Typography>
                <div className={classes.rightMenu}>
                    <Hidden xsDown>
                        <Button>
                            <PersonOutlineIcon />
                            <Box style={{marginLeft: '0.2rem'}}>{isLogged ? profile : login }</Box>
                        </Button>
                        {isLogged ? ""
                        :
                        <Button>
                            <PersonAddOutlinedIcon />
                            <Box style={{marginLeft: '0.2rem'}}>{register}</Box>
                        </Button>
                        }
                        
                        <Select style={{marginLeft:'0.2rem'}} value={language} onChange={changeLanguage}>
                            <MenuItem value='english'>EN</MenuItem>
                            <MenuItem value='portuguese'>PT-BR</MenuItem>
                        </Select>
                    </Hidden>
                    <Hidden smUp>
                        <Button>
                            <PersonOutlineIcon />
                        </Button>
                    </Hidden>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor='right'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                        
                    >
                        { isLogged ? drawerContentLogged : drawerContentUnlogged}
                        <Divider />
                        <List>
                            <ListItem >{chlang}</ListItem>
                            <Select style={{marginLeft:'1rem'}} value={language} onChange={changeLanguage}>
                                <MenuItem value='english'>EN</MenuItem>
                                <MenuItem value='portuguese'>PT-BR</MenuItem>
                            </Select>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button onClick={handleDrawerToggle}>{close}</ListItem>
                        </List>
                    </Drawer>
                    
                    
                    
                    
                </div>
            </Toolbar>
        </AppBar>
        
        </div>
    )
}

export default withStyles(styles)(Navbar);