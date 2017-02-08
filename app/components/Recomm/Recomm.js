import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, TouchableHighlight, Modal } from 'react-native';
import { connect } from 'react-redux';
import ActionCreators from '../../actions';
import { Spinner } from 'nachos-ui';
import { styles, buttonStyle } from './styles/Recomm';
import { Actions } from 'react-native-router-flux';
import RecLoader from '../RecLoader/RecLoader';
import MovieCard from '../MovieCard/MovieCard';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
const POSTER = 'https://image.tmdb.org/t/p/w500';

class Recomm extends Component {

  constructor() {
      super();
      this.state = {modalVisible: false};
    }

  openModal = () => {
    this.setState({modalVisible: true});
  }

  closeModal = () => {
    this.setState({modalVisible: false});
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.movieRecomm !== nextProps.movieRecomm) {
      this.props.getMovieFromId(nextProps.movieRecomm);
    }
  }

  componentDidMount() {
    this.props.getMovieRecommendation()
  }

  newRecomm = movie => {
    this.props.getMovieRecommendation()
  }
  handleLogout() {
    console.log('logoutting');
    this.props.logout()
    this.setState({userLogged: false})
    Actions.Login()
  }

  render() {
    const movie = this.props.movie;

    if (!movie) {
      return (
        <RecLoader/>
      )
    }

    return (
      <View style={{ backgroundColor: '#23222E', flexDirection: 'column', flex: 1,  alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
          <Text style={{ margin: 20, fontSize: 20, color: 'white' }}>
            Recommendations
          </Text>

          <TouchableHighlight
            onPress = {this.openModal}>
            <View style={styles.poster}>
              <Image
                style={styles.posterCard}
                source={{uri: `${POSTER}/${movie.poster_path}`}}
              />
            </View>
          </TouchableHighlight>

        </View>

        <Modal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          >
          <TouchableHighlight
            onPress={this.closeModal}
            style={styles.modal1}>
            <View style = {styles.modal}>
              <MovieCard/>
            </View>
          </TouchableHighlight>
        </Modal>

        <ActionButton  buttonColor="#94de45">

          <ActionButton.Item buttonColor='#94de45' title="Survey"
            onPress={() => {Actions.SwiperEL()}}>
            <Icon name="md-heart" size={20} color="white" />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#94de45'
            title="Notifications" onPress={() => {this.newRecomm()}}>
            <Icon name="md-repeat"color="white" size={20}  style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#94de45' title="LikedList"
            onPress={() => {Actions.LikedList()}}>
            <Icon name="md-aperture"color="white" size={20}  style={styles.actionButtonIcon} />
          </ActionButton.Item>


           <ActionButton.Item
             buttonColor='#94de45'
             title="New Task"
             onPress={() => {this.handleLogout()}}>
             <Icon name="md-log-out" size={20} color="white" />
           </ActionButton.Item>

        </ActionButton>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.find(movie => movie.id === parseInt(state.movieRecomm.movieId, 10)),
    movieRecomm: state.movieRecomm.movieId,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(ActionCreators.logout()),
  getMovieFromId: (movieId) => dispatch(ActionCreators.getMovieFromId(movieId)),
  getMovieRecommendation: () => dispatch(ActionCreators.getMovieRecommendation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Recomm);
