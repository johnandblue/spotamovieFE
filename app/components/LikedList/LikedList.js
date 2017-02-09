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
import { Spinner } from 'nachos-ui';
import { styles, buttonStyle } from './styles/stylesLiked';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';






class LikedList extends Component {
  constructor (props){
    super(props)
    this.filteredMovies=[];
  }
  state = {
    cardIndex: 0,
    value: 'Liked',
    values: ['Liked', 'Disliked'],
    selectedIndex: 0
  }
  componentDidMount() {
    this.props.getMoviesLiked()
    this.props.getMoviesDisliked()

  }
  componentWillUpdate() {
    // this.props.getMoviesLiked()
    // this.props.getMoviesDisliked()
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
    if(this.props.movies !== nextProps.movies) {
      this.filteredMovies = this.props.movies.filter((val) => {
        if (this.state.value === 'Liked')
          return this.props.moviesLiked.includes(val.id.toString())
        else {
          return this.props.moviesDisliked.includes(val.id.toString())
        }
      })
    }
  }

  handleRemove = (movieId) => {
    if (this.state.value === 'Liked') {
      this.props.unLikeMovie(movieId)
    }
    else if (this.state.value === 'Disliked') {
      this.props.unDislikeMovie(movieId)
    }
  }

  mapFilteredMovies = () => {
    this.filteredMovies.map((movie) =>
      <MovieItem
        key={movie.id}
        title={movie.title}
        image={movie.poster_path}
      />
    )
  }

  _onChange = (event) => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
    if (this.state.value === 'Liked') {
      this.filteredMovies = this.props.movies.filter((val) => this.props.moviesDisliked.includes(val.id.toString()))
    }
    if (this.state.value === 'Disliked') {
      this.filteredMovies = this.props.movies.filter((val) => this.props.moviesLiked.includes(val.id.toString()))

    }
  };

  handleLogout() {
    console.log('logoutting');
    this.props.logout()
    this.setState({userLogged: false})
    Actions.Login()
  }

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
        <View style={styles.containerLoader}>
          <View style={styles.textView}>
            <Text style={styles.title}>
              LOADING YOUR MOVIES...
            </Text>
            <Spinner />
          </View>
        </View>

      );
    }

    return (
      <View
        style={{
          backgroundColor:'#23222E',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch'
        }}>
        <View style={{
          flex: 0.1,
          // backgroundColor: 'pink',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
          <Text style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 30,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // backgroundColor: 'purple',
            color: 'white',
            marginBottom:0
          }}>
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
              this.filteredMovies.map((movie) =>
                <MovieItem
                  key={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                  onRemove={() => this.handleRemove(movie.id)}
                />
              )
            }
          </View>
        </ScrollView>
        <View
          style={{
            bottom: 60
          }}>
          <ActionButton
            buttonColor="#94de45">
            <ActionButton.Item
              buttonColor='#94de45'
              title="Survey"
              onPress={() => Actions.SwiperEL()}>
              <Icon name="md-heart" size={20} color="white" />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#94de45'
              title="Recomm"
              onPress={() => {Actions.Recomm()}}>
              <Icon name="md-aperture"color="white" size={20}  style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#94de45'
              title="Logout"
              onPress={() => {this.handleLogout()}}>
              <Icon name="md-log-out" size={20} color="white" />
            </ActionButton.Item>
          </ActionButton>
        </View>

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
  logout: () => dispatch(ActionCreators.logout()),
  getMoviesDisliked: () => dispatch(ActionCreators.getMoviesDisliked()),
  getMoviesLiked: () => dispatch(ActionCreators.getMoviesLiked()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  unLikeMovie: (movieId) => dispatch(ActionCreators.unLikeMovie(movieId)),
  unDislikeMovie: (movieId) => dispatch(ActionCreators.unDislikeMovie(movieId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(LikedList);
