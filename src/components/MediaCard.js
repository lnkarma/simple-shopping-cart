import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import { SetCartContext } from './CartContext';

const RupeeSign = () => <span style={{ fontSize: 'small' }}>&#8377;</span>;

const useStyles = makeStyles({
  // root: {
  // // maxWidth: 345,
  // maxHeight: '100vh',
  // // position: 'relative',
  // },
  media: {
    // maxHeight: '1vh',
    // height: '500%',
    // width: 'auto%',
    paddingTop: '100%',
    backgroundSize: 'contain',
    // paddingTop: '133.33%',
  },
  actionArea: {
    // paddingBottom: '8px',
    // paddingBottom: 50,
  },
  action: {
    // margin: 0,
    // marginTop: -25,
    // paddingTop: 0,
    // paddingBottom: 0,
    // padding: '10,8',
    // paddingLeft: 8,
  },
  // expand: {
  // margin: 'auto',
  // },
});

export default function MediaCard({ product }) {
  const setCart = useContext(SetCartContext);
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
      <Card className={classes.root}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={product.photo}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" noWrap>
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {product.description}
            </Typography>

            <Hidden smDown>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </Hidden>
            <Typography>
              <b>
                <RupeeSign />
                {product.price}
              </b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={
              () =>
                setCart({
                  type: 'add',
                  product: { id: product.name, quantity: 1 },
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  product: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
