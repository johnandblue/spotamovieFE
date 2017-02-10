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
    flex: 0.1
  },
  heading: {
    fontFamily: 'Raleway-Medium',
    fontSize: 38,
    color: 'white'
  },
  containerSubheading: {
    paddingLeft: 13,
    paddingRight: 13,
    flex: 0.2
  },
  subheading: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 16
  },
  containerLoader: {
    alignItems: 'center',
    flex: 0.7
  },
  Loader: {
  },
  spinner: {
    // backgroundColor: 'white',
  },
  progressView: {
    marginTop: 20,
  }
});
