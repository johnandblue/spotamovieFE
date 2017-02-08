import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
    flex: 1,
    flexDirection: 'column'
  },
  containerHeading: {
    marginTop: 40,
    paddingLeft: 13,
    flex: 0.2
  },
  heading: {
    fontFamily: 'Raleway-Medium',
    fontSize: 38,
    color: 'white'
  },
  containerSubheading: {
    paddingLeft: 13,
    paddingRight: 13,
    flex: 0.6
  },
  subheading: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 16
  },
  containerSkip: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1
  },
  skip: {
    color: 'grey',
    fontFamily: 'Raleway-Medium',
    fontSize: 14,
    textAlign: 'center'
  },
  containerStart: {
    flex: 0.1,
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
