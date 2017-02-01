import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const POSTER = 'https://image.tmdb.org/t/p/w500';

const styles = {
  posterCard: {
    borderRadius: 10,
    width: 20,
    height: 20,
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  poster: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  }
}

class MovieItem extends Component {

  render() {
    console.log(this.props);
    return (

      <View style={styles.poster}>
        <Text style={{margin: 20, fontSize: 20, color: 'white'}}>
          {this.props.title}
        </Text>
        <Image
          style={styles.posterCard}
          source={{uri: `${POSTER}/${this.props.poster_path}`}}
        />
      </View>
    )
  }
}

export default MovieItem;
