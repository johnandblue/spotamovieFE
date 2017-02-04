import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SegmentedControlIOS,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions'
import MovieItem from './components/MovieItem';
import { Actions } from 'react-native-router-flux';


let filteredMovies;

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

class LikedList extends Component {
  state = {
    cardIndex: 0,
    value: 'Liked',
    values: ['Liked', 'Disliked'],
    selectedIndex: 0
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
    filteredMovies = this.props.movies.filter((val) => this.props.moviesLiked.includes(val.id))
  }

  componentWillUpdate() {
    // this.props.getMoviesLiked()
    // this.props.getMoviesDisliked()
    console.log('will update');
    console.log(filteredMovies);
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


  _onChange = (event) => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
    if (this.state.value === 'Liked') {
      filteredMovies = this.props.movies.filter((val) => this.props.moviesDisliked.includes(val.id))
    }
    if (this.state.value === 'Disliked') {
      filteredMovies = this.props.movies.filter((val) => this.props.moviesLiked.includes(val.id))

    }
  };

  _onValueChange = (value) => {
    this.setState({
      value: value,
    });
  };

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
            Movies {this.state.value}
          </Text>
        </View>
        <View style={{marginLeft: 12, marginRight: 12, marginBottom: 10}}>
          <SegmentedControlIOS
            tintColor="lightgrey"
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={this._onChange}
            onValueChange={this._onValueChange}
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
              filteredMovies.map((movie) =>
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
