import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const POSTER = 'https://image.tmdb.org/t/p/w500';

const styles = {
  poster: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  posterCard: {
    borderRadius: 10,
    // width: 230,
    // height: 368,
    width: 230,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
}

const Card = React.createClass({
  render() {
    return (
      // <View style={styles.poster}>
        <Image
          resizeMode="cover"
          style={styles.posterCard}
          source={{uri: `${POSTER}/${this.props.poster_path}`}}
        />
      // </View>
    )
  }
})

export default Card;
