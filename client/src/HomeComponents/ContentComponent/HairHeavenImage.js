import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

const dataImage = [
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.ytimg.com/vi/GCv96fpnWkE/maxresdefault.jpg',
        title: 'love you'
    },
    {
        img : 'https://cdn.shopify.com/s/files/1/0747/3829/products/mNS0490_41183d68-b16f-4065-a0d7-252fa01697c4_1024x1024.jpg?v=1487864046',
        title: 'love you'
    },
    {
        img : 'https://i.ytimg.com/vi/AQxsVBQwYS8/maxresdefault.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
    {
        img : 'https://i.imgur.com/0jQAdlZ.jpg',
        title: 'love you'
    },
];


function ImageGridList(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {dataImage.map((tile,index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </section>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);