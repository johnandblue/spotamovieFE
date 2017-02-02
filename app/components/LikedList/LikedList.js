import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SegmentedControlIOS
} from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions'
import MovieItem from './components/MovieItem';


class LikedList extends Component {
  state = {
    cardIndex: 0
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.moviesLiked !== nextProps.moviesLiked) {
      nextProps.moviesLiked.map(movieId => {
        this.props.getMovieFromId(movieId)
      })
    }
    if(this.props.moviesDisliked !== nextProps.moviesDisliked) {
      nextProps.moviesDisliked.map(movieId => {
        this.props.getMovieFromId(movieId)
      })
    }
  }

  componentDidMount() {
    this.props.getMoviesLiked()
    this.props.getMoviesDisliked()

  }

  clickUnlike = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.unLikeMovie(movieId);
  }

  render() {
    let title='';
    const movies = this.props.movies;

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
        style={{
          backgroundColor:'#494953',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch'
        }}>
        <View style={{ alignItems:'center', marginTop: 70}}>
          <Text style={{margin: 20, fontSize: 20, color: 'white'}}>
            Movie {this.props.mode === 'likes' ? "Likes" : "Dislikes"}
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <SegmentedControlIOS
            values={['Liked', 'Disliked']}
            selectedIndex={0}
            
          />
        </View>
        <ScrollView
          style={{flex:1}}>
          <View style={{
           flexDirection: 'row',
           flexWrap: 'wrap',
           alignItems: 'flex-start'
          }}>
            {
              movies.map((movie) =>
                <MovieItem
                  key={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                />
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    movies: state.movies,
    moviesLiked: state.moviesLiked,
    moviesDisliked: state.moviesDisliked,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMoviesDisliked: () => dispatch(ActionCreators.getMoviesDisliked()),
  getMoviesLiked: () => dispatch(ActionCreators.getMoviesLiked()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  unLikeMovie: (movieId) => dispatch(ActionCreators.unLikeMovie(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedList);
