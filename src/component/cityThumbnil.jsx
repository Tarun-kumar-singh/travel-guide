import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
      maxWidth: '745px',
      justifyContent: 'center'
    },
    media: {
        height: 300,
    },
  });
const Thumbnil = () => {
    const classes = useStyles();
    return(
             <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://image.shutterstock.com/image-photo/kerala-boat-house-india-tourism-260nw-1233987922.jpg"
                    />           
                </CardActionArea>
            </Card>
            )
}

export default Thumbnil