import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

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
const buttonStyle = {
  start:{
    padding: 4,
    margin: 5,
    backgroundColor:'rgba(0,0,0,0)',
    borderRadius:30,
    borderWidth: 2,
    borderColor: 'red'
  },
  startText:{
      color:'red',
      textAlign:'center',
      fontSize: 12
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
          <TouchableHighlight
            style={buttonStyle.start}
            onPress={() => this.props.onRemove()}
            underlayColor='red'>
              <Text style={buttonStyle.startText}>Remove</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

export default MovieItem;
