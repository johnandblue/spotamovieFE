import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions';
import { Spinner } from 'nachos-ui';
import { styles, buttonStyle } from './styles/Recomm';
import { Actions } from 'react-native-router-flux';

const POSTER = 'https://image.tmdb.org/t/p/w500';

class Recomm extends Component {

  state = {
    cardIndex: 0
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.movieRecomm !== nextProps.movieRecomm) {
      this.props.getMovieFromId(nextProps.movieRecomm);
    }
  }

  componentDidMount() {
    this.props.getMovieRecommendation()
  }


  newReccom = movie => {
    this.props.getMovieRecommendation()
  }


  render() {
    console.log('recommendation: ', this.props.movieRecomm);
    const movie = this.props.movie;
    console.log('movie: ', movie);

    if (!movie) {
      return (
        <View style={styles.containerLoader}>
          <View style={styles.textView}>
            <Text style={styles.title}>
              LOADING YOUR RECOMMENDATIONS...
            </Text>
            <Spinner />
          </View>
        </View>
      )
    }

    return (
      <View style={{ backgroundColor: '#23222E', flexDirection: 'column', flex: 1,  alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
          <Text style={{ margin: 20, fontSize: 20, color: 'white' }}>
            Recommendations
          </Text>
          <View style={styles.poster}>
            <Image
              style={styles.posterCard}
              source={{uri: `${POSTER}/${movie.poster_path}`}}
            />
          </View>
          <TouchableHighlight
            style={buttonStyle.start}
            onPress={this.newReccom}
            underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Give me another one !</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={buttonStyle.start}
            onPress={() => Actions.Login()}
            underlayColor='#fff'>
            <Text style={buttonStyle.startText}>Back to Home Screen</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // movie: state.movies.pop(),
    movie: state.movies.find(movie => movie.id === parseInt(state.movieRecomm.movieId, 10)),
    movieRecomm: state.movieRecomm.movieId,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  getMovieRecommendation: () => dispatch(ActionCreators.getMovieRecommendation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Recomm);
