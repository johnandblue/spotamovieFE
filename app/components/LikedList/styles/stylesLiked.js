import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23222E',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerLoader: {
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
  }
});

export const buttonStyle = StyleSheet.create({
  start:{
    padding: 5,
    marginTop: 40,
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
})
