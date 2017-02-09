import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const iconClose =(<Icon name="md-close-circle" size={28} color="rgba(255,255,255,0.8)" />)


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
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 2,
    margin: 0,
    backgroundColor:'rgba(0,0,0,0)',
    borderRadius:25,
    borderWidth: 0,
    borderColor: 'white'
  },
  startText:{
      color:'#94de45',
      textAlign:'center',
      fontSize: 18
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
            underlayColor='rgba(0,0,0,0)'>
              <Text style={buttonStyle.startText}>{iconClose}</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

export default MovieItem;
