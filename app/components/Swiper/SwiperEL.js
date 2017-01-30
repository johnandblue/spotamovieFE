import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import styles from './styles/SwiperEl';
import { ButtonsGroup, Card, NoMoreCard } from './components';
import ActionCreators from '../../actions'

// import { InfoModal } from '../infoModal';
// import { addMovieToLikedList } from './actions';
// import { openModalInfo, closeModalInfo } from '../ui';

const path = 'https://movied.herokuapp.com/discover';

class SwiperEL extends Component {
  state = { cardIndex: 0 }

  componentDidMount() {
    this.props.getMovies(path)
  }

  _handleYup = movie => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    // this.props.addMovieToLikedList({
    //   id: movie.id,
    //   title: movie.title,
    //   image: movie.poster_path
    // });
  }

  _handleNope = () => this.setState({ cardIndex: this.state.cardIndex + 1 })

  _clickLike= () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
    const movie = this.props.movies[this.state.cardIndex];
    // this.props.addMovieToLikedList({
    //   id: movie.id,
    //   title: movie.title,
    //   image: movie.poster_path
    // });
  }

  _clickDislike = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
  }



  render() {
    // const { movies,
    //   modalInfoShow, openModalInfo, closeModalInfo
    // } = this.props;

    let title=' ';
    const movies = this.props.movies;
    console.log(movies);
    if (this.state.cardIndex > movies.length - 1) {
      return <NoMoreCard />;
    }
    if (!movies.length) {
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
          handleYup={this._handleYup}
          handleNope={this._handleNope}
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
              <Text
                style={{color: 'red'}}
              >
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
            // onPress={like}
          >
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                margin: 20
              }}
            >
              <Text
                style={{color: 'green'}}
              >
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
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovies: (route) => dispatch(ActionCreators.getMovies(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(SwiperEL);
