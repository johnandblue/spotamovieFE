import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleView: {
    flex: 0.1,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: 'purple',
    color: 'white',
    marginBottom:10,
  },
  posterView: {
    flex: 0.6,
    // backgroundColor:'cyan',
    paddingRight: 60,
    paddingLeft: 60,
    alignItems: 'center'
  },
  posterCard: {
    borderRadius: 10,
    width: 250,
    height: 400,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  poster: {
    borderRadius: 10
  },
  buttonRow1: {
    marginTop: 0,
    flex: 0.2,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    width: 230,
    justifyContent: 'space-between'
  },
  containerLoader: {
    backgroundColor: '#23222E',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export const buttonStyle = StyleSheet.create({
  start:{
    padding: 10,
    marginTop: 30,
    backgroundColor:'#23222E',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  startText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 16
  }
});
