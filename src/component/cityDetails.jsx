import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      maxWidth:700
     },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const CityDetail = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
return(
  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
 >
    <Card className={classes.root}>
    <CardContent>
      <Typography variant="h5" component="h2">
            Patna
       </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Bihar
      </Typography>
      <Typography variant="body2" component="p">
        Patna is the capital of the Bihar
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
</Grid>
)
}


export default CityDetail