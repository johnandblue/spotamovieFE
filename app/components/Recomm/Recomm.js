import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions';

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

class Recomm extends Component {

  state = {
    cardIndex: 0
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.movieRecomm !== nextProps.movieRecomm) {
      nextProps.movieRecomm.map(movieId => {
        this.props.getMovieFromId(movieId);
      });
    }
  }

  componentDidMount() {
    this.props.getMovieRecommendation()
  }



  render() {

    const movies = this.props.movies;
    console.log(movies);

    if (this.state.cardIndex > movies.length - 1) {
      return null;
    }
    if (movies.length !== this.props.movieRecomm.length) {
      // Render a loader
      return null
    }
    return (
      // <View></View>
      <View style={{ backgroundColor: '#494953', flex: 1,  alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
          <Text style={{ margin: 20, fontSize: 20, color: 'white' }}>
            Recommendations
          </Text>
          <View style={styles.poster}>
            <Image
              style={styles.posterCard}
              source={{uri: `${POSTER}/${movies[this.state.cardIndex].poster_path}`}}
            />
          </View>
        </View>

        <View style={{ flex: 0.2, flexDirection: 'row', margin: 20 }}>

          <TouchableOpacity>
            <View style={{ flex: 0.2, flexDirection: 'row', margin: 20 }}>
              <Text>INFO</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    movies: state.movies,
    movieRecomm: state.movieRecomm,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  getMovieRecommendation: () => dispatch(ActionCreators.getMovieRecommendation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Recomm);
