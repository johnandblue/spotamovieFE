import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const POSTER = 'https://image.tmdb.org/t/p/w500';

const styles = {
  poster: {
    margin: 3
  },
  posterCard: {
    borderRadius: 5,
    width: 118,
    height: 177
  }
}

class MovieItem extends Component {

  render() {
    return (
      <View style={styles.poster}>
        <Image
          style={styles.posterCard}
          source={{uri: `${POSTER}/${this.props.image}`}}
        />
      </View>
    )
  }
}

export default MovieItem;
