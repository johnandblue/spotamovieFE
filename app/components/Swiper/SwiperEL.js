import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
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
  const Frutas = [
    {text: 'Tomato', backgroundColor: 'red'},
    {text: 'Aubergine', backgroundColor: 'purple'},
    {text: 'Courgette', backgroundColor: 'green'},
    {text: 'Blueberry', backgroundColor: 'blue'},
    {text: 'Umm...', backgroundColor: 'cyan'},
    {text: 'orange', backgroundColor: 'orange'},
  ]

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
      <View>
        {/* <StatusBar barStyle="light-content" />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>
            {movies[this.state.cardIndex].title}
          </Text>
        </View> */}
        <View style={{margin: 100}}>
          <Text>
            {movies[this.state.cardIndex].title}
          </Text>
        </View>
        <SwipeCards
          // ref={ref => this._swiper = ref} // eslint-disable-line
          // containerStyle={styles.swiperContainer}
          cards={movies}
          renderCard={data => <Card {...data} />}
          handleYup={this._handleYup}
          handleNope={this._handleNope}
          // yupStyle={styles.yupAndNopeStyle}
          // yupTextStyle={styles.yupTextStyle}
          // nopeStyle={styles.yupAndNopeStyle}
          // nopeTextStyle={styles.nopeTextStyle}
          renderNoMoreCards={() => <NoMoreCard />}
        />
        {/* <ButtonsGroup
          info={() => openModalInfo(movies[this.state.cardIndex])}
          dislike={this._clickDislike}
          like={this._clickLike}
        />
        <InfoModal
          closeModalInfo={closeModalInfo}
          close={() => closeModalInfo()}
          visible={modalInfoShow}
          movie={this.props.modalInfoMovie}
        /> */}
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
