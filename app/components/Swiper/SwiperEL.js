import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import  { styles } from './styles/SwiperEl';
import { ButtonsGroup, Card, NoMoreCard } from './components';
import ActionCreators from '../../actions'
import { likeMovie, dislikeMovie } from '../../actions/actions';
import SurveyNav from './components/SurveyNav';
import LikedList from '../LikedList/LikedList';
import { Actions } from 'react-native-router-flux';
import Login from '../../containers/Login';
import { Button, Spinner } from 'nachos-ui';
import Icon from 'react-native-vector-icons/Ionicons';

btnStyle = { margin: 5 }

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
    this.setState({ cardIndex: 0 });
    this.props.resetMovies()
    this.props.getMoviesSurvey()

  }
  handleNoMore = () => {
    this.setState({ cardIndex: 0 });
    this.props.resetMovies()
    this.props.getMoviesSurvey()
  }
  handleYup = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.likeMovie(movieId);
  }
  handleNope = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.dislikeMovie(movieId);
  }
  clickSkip =() => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    console.log('hello');
    this.props.skipMovie(movieId);
    this._swiper._goToNextCard();
  }
  clickLike = () => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.likeMovie(movieId);
    this._swiper._goToNextCard();
  }
  clickDislike = movie => {
    const movieId = this.props.movies[this.state.cardIndex].id;
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.dislikeMovie(movieId);
    this._swiper._goToNextCard();
  }

  render() {
    let title='';
    const movies = this.props.movies;
    if (!movies.length || movies.length < this.props.moviesSurvey.length) {
        return (
          <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.title}>
                LOADING SURVEY...
              </Text>
              <Spinner />
            </View>
          </View>
        )
    } else if (movies[this.state.cardIndex]) {
      return (
        <View
          style={styles.container}>

          <View
            style={styles.titleView}>
            <Text
              style={styles.title}>
              {movies[this.state.cardIndex].title}
            </Text>
          </View>

          <View
            style={styles.posterView}>
            <SwipeCards
              ref={ref => this._swiper = ref}
              cards={movies}
              renderCard={data => <Card {...data} />}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              renderNoMoreCards={() => <SurveyNav/>}
            />
          </View>

          <View
            style={styles.buttonView}
          >
            <Button
              style={btnStyle}
              onPress={this.clickUnlike}
              type='danger'
              iconName='md-close'>
            </Button>

            <Button
              style={btnStyle}
              onPress={this.clickLike}
              type='success'
              iconName='md-heart'>
            </Button>
          </View>

          <View
            style={styles.buttonView2}>
            <Button
              style={btnStyle}
              onPress={this.clickSkip}
              type='primary'
              iconName='md-arrow-dropup-circle'>
            </Button>
          </View>
        </View>
      );
    }
    else {
      return (
        <SurveyNav
          onHandleNoMore = {this.handleNoMore}
        />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesSurvey: state.moviesSurvey,
    user: state.user,
    moviesSkipped: state.moviesSkipped
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetMovies: () => dispatch(ActionCreators.resetMovies()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  getMoviesSurvey: () => dispatch(ActionCreators.getMoviesSurvey()),
  skipMovie: (movieId) => dispatch(ActionCreators.skipMovie(movieId)),
  likeMovie: (movieId) => dispatch(ActionCreators.likeMovie(movieId)),
  dislikeMovie: (movieId) => dispatch(ActionCreators.dislikeMovie(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwiperEL);
