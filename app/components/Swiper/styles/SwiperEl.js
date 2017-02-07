import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#494953',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleView: {
    flex: 0.1,
    backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems:'center',
    marginTop: 40
  },
  title: {
    backgroundColor: 'purple',
    fontSize: 20,
    color: 'white'
  },
  posterView: {
    flex: 0.6,
    backgroundColor:'cyan',
    paddingRight: 60,
    paddingLeft: 60,
    alignItems: 'center'
  },
  buttonView: {
    marginTop: 10,
    flex: 0.15,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    margin: 5
  },
  buttonView2: {
    flex: 0.15,
    backgroundColor:'chartreuse',
    flexDirection: 'row',
  },
  btnStyle: {
    width: 20,
    marginLeft: 20
  }
});
