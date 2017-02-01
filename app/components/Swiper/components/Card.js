import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const POSTER = 'https://image.tmdb.org/t/p/w500';


const styles = {
  posterCard: {
    borderRadius: 10,
    width: 250,
    height: 400,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
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

const Card = React.createClass({
  render() {
    return (
      <View style={styles.poster}>
        <Image
         style={styles.posterCard}
          source={{uri: `${POSTER}/${this.props.poster_path}`}}
       />
        {/* <Image style={styles.thumbnail} source={{uri: `${POSTER}/${this.props.poster_path}`}} /> */}
        {/* <Text style={styles.text}>This is card {this.props.title}</Text> */}
      </View>
    )
  }
})

export default Card;
