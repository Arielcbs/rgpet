
const styles = theme =>({
    
    main: {
        margin: '0',
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            width: '40%',
            marginLeft: "auto",
            marginRight: "auto",
        }
    },

    input: {
        margin: "0"
    },

    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`
    },

    avatar: {
        margin: theme.spacing(),
        width: "10rem",
        height: "10rem",
        backgroundColor: theme.palette.secondary.main
    },
    
    form: {
        width: "90%",
        marginTop: theme.spacing(3)
    },

    submit: {
        marginTop: theme.spacing(3)
    },

    rightMenu: {
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    
    errors: {
        border: '2px solid red'
    },

    root: {
        display: 'flex',
      },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        }
    },

    appBar: {
        marginLeft: 240,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${240}px)`,
        }
    },

    menuButton: {
        marginRight: theme.spacing(2),
        
    },
    
    toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: 240,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      
    
    landing: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    landingPicture: {
        
        backgroundImage: "url('https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715734_960_720.jpg')",
        height: '100vh',
        width: '100vw',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: -1
    },

    landingText: {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '1.2em',
        backgroundColor: 'rgba(83, 207, 117)',
        [theme.breakpoints.up("sm")]: {
            fontSize: '1.7em',
        }
       
    },

    landingGrid: {
        display: 'flex',
        textAlign: 'center',
        marginBottom: '2rem'
        
    },

    petIcons: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '2rem'
    },

    infoText: {
        padding: '1.5rem',
        marginTop: '1rem',
        marginBottom: '2rem',
        [theme.breakpoints.up("sm")]: {
            fontSize: '1.2rem',
            maxWidth: '800px',
            alignItems: 'center'
        }
    },
    
    iconButton: {
        fontSize: '1em',
        color: 'white',
        backgroundColor: 'rgba(83, 207, 117)',
        [theme.breakpoints.up("sm")]: {
            fontSize: '1.5em',
        }
    }
});

export default styles;