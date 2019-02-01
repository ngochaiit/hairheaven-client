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
        img : 'https://assets.bhg.com/bhg/styles/nfp_1080_portrait/public/images/2017/3/15/102997425.jpg?Br_hD_KsV700UmGK5Ha_g0vppUvAsZc3',
        title: 'love you'
    },
    {
        img : 'https://vnban.com/uploads/files/vn/238/thumb-816x460-86b7d8b04b7b72341715fa9e46feb91e.jpg',
        title: 'love you'
    },
    {
        img : 'https://khonggiansong.info/wp-content/uploads/2017/03/ban-cho-poodle-mau-trang-6.jpg',
        title: 'love you'
    },
    {
        img : 'https://cdn.omlet.co.uk/images/cache/1024/682/Dog-Siberian_Husky-A_beautiful_Siberian_Husky_puppy,_resting_its_tired,_little_legs.jpg',
        title: 'love you'
    },
    {
        img : 'http://i1.adis.ws/i/petsathome/breed-Husky-image-1-header.jpg?qlt=75',
        title: 'love you'
    },
    {
        img : 'http://lanlanpet.com/wp-content/uploads/2018/05/Cho-phoc-soc-o-viet-nam-gia-bao-nhieu-1.jpg',
        title: 'love you'
    },
    {
        img : 'http://www.pet-house.com.vn/res/product/album/474BF24F.jpg',
        title: 'love you'
    },
    {
        img : 'https://dogily.vn/wp-content/uploads/2018/09/b%C3%A1n_ch%C3%B3_ph%E1%BB%91c_s%C3%B3c_th%C3%A1ng_10.2019_dogily_petshop_6-300x250.jpg',
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