import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { StarRating } from 'react-native-star-rating';

class MovieRating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
      />
    );
  }
}

export default connect()(MovieRating);
