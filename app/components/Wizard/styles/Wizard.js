import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
    flex: 1,
    flexDirection: 'column'
  },
  containerHeading: {
    marginTop: 40,
    paddingLeft: 13
  },
  heading: {
    fontFamily: 'Raleway-Medium',
    fontSize: 38,
    color: 'white'
  },
  containerSubheading: {
    paddingTop: 20,
    paddingLeft: 13,
    paddingRight: 13
  },
  subheading: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 16
  },
  containerSkip: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    color: 'grey',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
    textAlign: 'center'
  },
  containerStart: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: '#62C654',
    alignSelf: 'stretch'
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#62C654',
    alignSelf: 'stretch',
    padding: 20
  },
  startText: {
    color:'white',
    textAlign:'center',
    fontSize: 24
  }
});
