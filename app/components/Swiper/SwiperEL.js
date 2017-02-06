import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import styles from './styles/SwiperEl';
import { ButtonsGroup, Card, NoMoreCard } from './components';
import ActionCreators from '../../actions'
import { likeMovie, dislikeMovie } from '../../actions/actions';
import Navigation from '../navigation/navigation';
import LikedList from '../LikedList/LikedList';
import { Actions } from 'react-native-router-flux';
import Login from '../../containers/Login'


const buttonStyle = {
  start:{
    padding: 20,
    margin: 50,
    backgroundColor:'#494953',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }
}

class SwiperEL extends Component {
  state = {
    cardIndex: 0
  }

  componentWillReceiveProps(nextProps) {
    console.log('movies in will props: ',this.props.movies);
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
    if (this.state.cardIndex > movies.length - 1) {
      return <Login />;
    }
    if (movies.length !== this.props.moviesSurvey.length) {
      // Render a loader
      return null;
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
          ref={ref => this._swiper = ref}
          cards={movies}
          renderCard={data => <Card {...data} />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          renderNoMoreCards={this.handleNoMore}
        />
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            margin: 20
          }}
        >
          <TouchableOpacity
            onPress={this.clickDislike}
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
            onPress={this.clickLike}
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
  resetMovies: () => dispatch(ActionCreators.resetMovies()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  getMoviesSurvey: () => dispatch(ActionCreators.getMoviesSurvey()),
  likeMovie: (movieId) => {dispatch(ActionCreators.likeMovie(movieId))},
  dislikeMovie: (movieId) => dispatch(ActionCreators.dislikeMovie(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwiperEL);
