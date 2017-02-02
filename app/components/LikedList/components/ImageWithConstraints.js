import React, { Component } from 'react';

var ImageWithConstraints = React.createClass({
  getInitialState: function () {
    return {
      style: {}
    };
  },

  propTypes: {
    originalWidth: React.PropTypes.number.isRequired,
    originalHeight: React.PropTypes.number.isRequired,
  },

  onImageLayout: function (e) {
    var layout = e.nativeEvent.layout;
    var aspectRatio = this.props.originalWidth / this.props.originalHeight;
    var measuredHeight = layout.width / aspectRatio;
    var currentHeight = layout.height;

    if (measuredHeight != currentHeight) {
      this.setState({
        style: {
          height: measuredHeight
        }
      });
    }
  },

  render: function () {
    return (
      <Image
        {...this.props}
        style={[this.props.style, this.state.style]}
        onLayout={this.onImageLayout}
      />
    );
  }
});
