import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const iconPulse =(<Icon name="md-pulse" size={16} color="goldenrod" />)

const POSTER = 'https://image.tmdb.org/t/p/w500';


class MovieCard extends Component {


  render() {
    const overview = this.props.movie.overview;
    const lengthOv = 312;
    let trimmedOv  = overview.length > lengthOv ?
                    overview.substring(0, lengthOv) + "..." :
                    overview;
    return (

      <View style={styles.container}>
          <View style={styles.marginRow}>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.row}>
              <Image
                style={styles.backdrop}
                source={{uri: `${POSTER}/${this.props.movie.backdropPath}`}}
              />
            </View>

            <View style={styles.middleRow}>
              <View style={[styles.box, styles.box3]}>
                <Text style={styles.title}>{this.props.movie.title}</Text>
                <Text style={styles.date}>{this.props.movie.releaseDate}</Text>
                <Text style={styles.voteAverage}>{iconPulse}  {this.props.movie.voteAverage}/10</Text>
              </View>

              <Image
                style={styles.thumbnail}
                source={{uri: `${POSTER}/${this.props.movie.poster_path}`}}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.box, styles.box2]}>
                <Text style={styles.description}>Description</Text>
                <Text></Text>
                <Text style={styles.overview}>{trimmedOv}</Text>
              </View>
            </View>
          </View>

          <View style={styles.marginRow}>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 50,

  },

  cardContainer: {
    flex: 3,
    justifyContent: 'space-between',
    shadowColor: 'silver',
    shadowRadius: 4,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 0
    }

  },

  backdrop: {
    flex: 1,
  },

  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 100,
    paddingTop: 10,
    color: 'goldenrod'
  },

  date: {
    fontFamily: 'Raleway',
    fontSize: 12,
    marginHorizontal: 100,
    color: 'grey'
  },

  voteAverage: {
    fontFamily: 'Raleway',
    fontSize: 12,
    marginHorizontal: 100,
    color: 'goldenrod'
  },

  description: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
  },

  overview: {
    fontFamily: 'Raleway-Medium',
    fontSize: 13,
  },

  thumbnail: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    left: 10,
    width: 70,
    height: 100,
    borderColor: 'silver'
  },


  middleRow: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  marginRow: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 30
  },
  box: {
    flex: 1,
  },
  box2: {
    backgroundColor: '#f0fff0',
    padding: 10
  },
  box3: {
    backgroundColor: '#254441'
  },

});

const mapStateToProps = (state) => {
  return {
    movie: state.movies.find(movie => movie.id === parseInt(state.movieRecomm.movieId, 10)),
  }
}


export default connect(mapStateToProps)(MovieCard);
