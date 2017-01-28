import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { POSTER } from '../../../constants/poster_path';
// import styles from './styles/Card';

// const Card = movie => (
//   <View style={{margin: 120}}>
//     {/* <Text>Hola</Text> */}
//     <Image
//       // style={styles.poster}
//       source={{ uri: `${POSTER}/${movie.poster_path}` }}
//     />
//   </View>
// );


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
    console.log('in Card', this.props.poster_path);
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


// const styles = StyleSheet.create({
//
//   card: {
//     alignItems: 'center',
//     borderRadius: 5,
//     overflow: 'hidden',
//     borderColor: 'grey',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     elevation: 1,
//   },
//   thumbnail: {
//     flexGrow: 0.3,
//     width: 300,
//     height: 300,
//   },
//   text: {
//     fontSize: 20,
//     paddingTop: 10,
//     paddingBottom: 10
//   },
//   noMoreCards: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })

export default Card;
