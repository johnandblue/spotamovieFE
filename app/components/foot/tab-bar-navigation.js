/**
 * Created by ggoma on 12/23/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import D from './dimensions';
// import {Ionicons} from '@exponent/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class TabBarNavigation extends Component {
    state = {
        selected: 0,
        translateY: new Animated.Value(0)
    };

    handlePress = (e) => {
      this.setState({selected: i})
      console.log(tstate, 'state');
      console.log('event: ', e);
    }

    details = ['Survey', 'Recommendations', 'Lists', 'Logout'];
    icons = ['ios-happy', 'ios-film', 'ios-albums', 'ios-exit'];
    options = [
      () => Actions.SwiperEL(),
      // () => this.newRecomm(),
      () => Actions.LikedList(),
      // () => this.handleLogout()

    ]
    renderIcons() {
        return this.details.map((item, i) => {
            const color = this.state.selected == i ? '#41b177' : '#bdbec2';
            return (
                <TouchableWithoutFeedback
                  onPress={this.options[i]}
                  key={i}>
                    <View style={styles.tab_item} >
                        <Ionicons name={this.icons[i]} color={color} size={24}/>
                        <Text style={[styles.text, {color}]}>{item}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    setHeight(h) {
        // console.log('setting height:', h);
        this.state.translateY.setValue(Math.abs((h/10) - 56));

    }

    hide() {
        Animated.timing(
            this.state.translateY,
            {toValue: 56}
        ).start();

    }

    show() {
        Animated.timing(
            this.state.translateY,
            {toValue: 0}
        ).start();

    }


    render() {
        const {translateY} = this.state;
        return (
            <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
                {this.renderIcons()}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        borderTopColor: '#211f20',
        borderTopWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: D.width,
        bottom: 0,
        height: 56,
        backgroundColor: '#23222F'
    },

    tab_item: {
        alignItems: 'center',
    },

    text: {
        fontSize: 10,
    }
})
