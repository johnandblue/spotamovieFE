import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
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
    borderRadius: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#494953',
  },
}

const buttonStyle = {
  start:{
    padding: 10,
    marginTop: 30,
    backgroundColor:'#494953',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 16
  }
}

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
        <View style={{ backgroundColor: '#494953', flexDirection: 'column', flex: 1,  alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
            <Text style={{ margin: 20, fontSize: 20, color: 'white' }}>
              LOADING...
            </Text>

          </View>
        </View>
      )
    }

    return (
      <View style={{ backgroundColor: '#494953', flexDirection: 'column', flex: 1,  alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
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
