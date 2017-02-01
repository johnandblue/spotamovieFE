import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions'
import MovieItem from './components/MovieItem';


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

class Liked extends Component {
  state = {
    cardIndex: 0
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.moviesLiked !== nextProps.moviesLiked) {
      nextProps.moviesLiked.map(movieId => {
        this.props.getMovieFromId(movieId)
      })
    }
  }

  componentDidMount() {
    this.props.getMoviesLiked()
  }

  clickUnlike = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.unLikeMovie(movieId);
  }

  render() {
    let title='';
    const movies = this.props.movies;
    console.log(movies);

    if (this.state.cardIndex > movies.length - 1) {
      return (
        <Text style={{margin: 20, fontSize: 20, color: 'blue'}}>
          Waiting for Movie Reccomendation
        </Text>
      );
    }
    // if (movies.length !== this.props.moviesSurvey.length) {
    //   // Render a loader
    //   return null
    // }

    return (
      <View
        style={{backgroundColor:'#494953', flex: 1,  alignItems: 'center'}}>
        <View style={{flexDirection: 'column', alignItems:'center', marginTop: 100}}>
          <Text style={{margin: 20, fontSize: 20, color: 'blue'}}>
            Movie Reccomendation
          </Text>
        </View>
          {
            movies.map((movie) =>
              <MovieItem
                key={movies.id}
                title={movie.title}
                image={movie.poster_path}
              />
            )
          }


        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            margin: 20
          }}>
          <TouchableOpacity
            onPress={this.clickUnlike}>
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                margin: 20
              }}>
              <Text>UNLIKE</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    movies: state.movies,
    moviesLiked: state.moviesLiked,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMoviesLiked: () => dispatch(ActionCreators.getMoviesLiked()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  unLikeMovie: (movieId) => dispatch(ActionCreators.unLikeMovie(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Liked);
