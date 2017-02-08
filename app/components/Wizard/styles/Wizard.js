import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  headingContainer: {
    backgroundColor: 'red'
  },
  heading: {
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  subheadingContainer: {
    paddingTop: 30,
    paddingRight: 70,
    paddingLeft: 70,
  },
  subheading: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
    textAlign: 'center'
  },
  skipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    color: 'grey',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
    textAlign: 'center'
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'#62C654',
    borderRadius:30,
    borderWidth: 1,
  },
  startText: {
    color:'white',
    textAlign:'center',
    fontSize: 16
  }
});
