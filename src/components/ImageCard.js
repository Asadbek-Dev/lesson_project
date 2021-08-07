import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '35vw',
    background:'rgba(0,0,0,0.5)',
    margin:'20px'
  },
  media: {
    height: '30vh',
  },
  title:{
      fontFamily:'Hahmlet',
      fontWeight:'bold',
      fontSize:'2rem',
      color:'#fff'
  },
  desc:{
    fontFamily:'Hahmlet',
    fontSize:'1.1rem',
    color:'#ddd'
  }
});

export default function ImageCard({place}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {place.description}
          </Typography>
        </CardContent>
    </Card>
  );
}