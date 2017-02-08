import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const POSTER = 'https://image.tmdb.org/t/p/w500';

class MovieCard extends Component {

  render() {
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
              </View>

              <Image
                style={styles.thumbnail}
                source={{uri: `${POSTER}/${this.props.movie.poster_path}`}}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.box, styles.box2]}>
                <TouchableOpacity>
                  <Text>Description</Text>
                </TouchableOpacity>
                <Text>{this.props.movie.overview}</Text>
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
  },

  backdrop: {
    flex: 1,
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 100
  },

  date: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    // fontWeight: 'italic',
    marginHorizontal: 100
  },
  thumbnail: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    left: 10,
    width: 70,
    height: 100,
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
    // height: 100,
    backgroundColor: '#333',
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  trailerBox: {
    backgroundColor: 'orange'
  },

  two: {
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {
    movie: state.movies.find(movie => movie.id === parseInt(state.movieRecomm.movieId, 10)),
  }
}


export default connect(mapStateToProps)(MovieCard);
