import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const POSTER = 'https://image.tmdb.org/t/p/w500';

const styles = {
  poster: {
    margin: 12
  },
  posterCard: {
    borderRadius: 5,
    width: 100,
    height: 153
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
