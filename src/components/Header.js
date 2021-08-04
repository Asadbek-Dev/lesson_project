import { makeStyles } from "@material-ui/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily:'Hahmlet',
    },
    appbar:{
        background:'none',
        
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto',
    },
    appbarTitle:{
        flexGrow:'1',
    },
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    colorText:{
        color:'#5aff3d'
    },
    container:{
        textAlign:'center',
    },
    title:{
        color:'#fff',
        fontSize:'4.5rem'
    }
}));


const Header = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Island.</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to <br/> 
                    My<span className={classes.colorText}>Island.</span>
                </h1>
            </div>
        </div>
    )
}

export default Header;


