import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
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
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#23222E',
    marginBottom: 5,
  },
  start:{
    padding: 10,
    margin: 10,
    backgroundColor:'#62C654',
    borderRadius:30,
    borderWidth: 1,
    // borderColor: '#fff'
  },
  startText:{
      color:'white',
      textAlign:'center',
      fontSize: 16
  }
});
