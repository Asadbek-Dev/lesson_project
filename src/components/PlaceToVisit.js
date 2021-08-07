import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageCard from './ImageCard';
import places from './static/place'

const useStyles=makeStyles((theme) => ({
    root:{
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))
const PlaceToVisit = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ImageCard place={places[1]}/>
            <ImageCard place={places[0]}/>
        </div>
    )
}

export default PlaceToVisit;
