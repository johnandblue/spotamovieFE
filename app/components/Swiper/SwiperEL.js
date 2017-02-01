import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import styles from './styles/SwiperEl';
import { ButtonsGroup, Card, NoMoreCard } from './components';
import ActionCreators from '../../actions'
import { likeMovie, dislikeMovie } from '../../actions/actions';


class SwiperEL extends Component {
  state = {
    cardIndex: 0
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.moviesSurvey !== nextProps.moviesSurvey) {
      nextProps.moviesSurvey.map(movieId => {
        this.props.getMovieFromId(movieId)
      })
    }
  }

  componentDidMount() {
    this.props.getMoviesSurvey()
  }

  handleYup = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.likeMovie(movieId);
    console.log(movieId);
  }

  handleNope = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.dislikeMovie(movieId);
    console.log(movieId);
  }
  //
  // clickLike = movie => {
  //   const movie = this.props.movies[this.state.cardIndex];
  //   this.setState({ cardIndex: this.state.cardIndex + 1 });
  //   this.props.likeMovie(movie);
  // }
  //
  // clickDislike = movie => {
  //   const movie = this.props.movies[this.state.cardIndex];
  //   this.setState({ cardIndex: this.state.cardIndex + 1 });
  //   this.props.dislikeMovie(movie);
  //
  // }

  render() {
    let title='';
    const movies = this.props.movies;

    if (this.state.cardIndex > movies.length - 1) {
      return <NoMoreCard />;
    }
    console.log(movies.length, this.props.moviesSurvey.length);
    if (movies.length !== this.props.moviesSurvey.length) {
      // Render a loader
      return null
    }
    return (
      <View
        style={{backgroundColor:'#494953', flex: 1,  alignItems: 'center'}}>
        <View
          style={{flexDirection: 'column', alignItems:'center', marginTop: 100}}
        >
          <Text
            style={{margin: 20, fontSize: 20, color: 'white'}}
          >
            {movies[this.state.cardIndex].title}
          </Text>
        </View>
        <SwipeCards
          cards={movies}
          renderCard={data => <Card {...data} />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          renderNoMoreCards={() => <NoMoreCard />}
        />
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            margin: 20
          }}
        >
          <TouchableOpacity
            // onPress={dislike}
          >
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                margin: 20
              }}
            >
              <Text style={{color: 'red'}}>
                NO
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={info}
          >
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                margin: 20
              }}            >
              <Text>INFO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.clicLike}
          >
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                margin: 20
              }}
            >
              <Text style={{color: 'green'}}>
                YES
              </Text>
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
    moviesSurvey: state.moviesSurvey,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  // getMoviesDiscover: () => dispatch(ActionCreators.getMoviesDiscover()),
  getMoviesSurvey: () => dispatch(ActionCreators.getMoviesSurvey()),
  likeMovie: (movieId) => {dispatch(ActionCreators.likeMovie(movieId))},
  dislikeMovie: (movieId) => dispatch(ActionCreators.dislikeMovie(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwiperEL);
