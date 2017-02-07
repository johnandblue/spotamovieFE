import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#494953',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerLoader: {
    backgroundColor: '#494953',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleView: {
    flex: 0.1,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems:'center',
    marginTop: 40,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 36,
    // backgroundColor: 'purple',
    color: 'white'
  },
  posterView: {
    flex: 0.6,
    // backgroundColor:'cyan',
    paddingRight: 60,
    paddingLeft: 60,
    alignItems: 'center'
  },
  buttonRow1: {
    marginTop: 10,
    flex: 0.1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: 230,
    justifyContent: 'space-between'
  },
  buttonView1: {
    // flex: 0.1,
    // backgroundColor:'deeppink',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonView2: {
    flex: 0.1,
    // backgroundColor:'chartreuse',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 200
  },
  btnStyle: {
    // flex: 1,
    margin: 5
  }
});
