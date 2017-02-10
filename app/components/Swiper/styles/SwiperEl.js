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
  },
  posterView: {
    flex: 0.6,
    // backgroundColor:'cyan',
    paddingRight: 60,
    paddingLeft: 60,
    alignItems: 'center'
  },
  buttonRow1: {
    marginTop: 20,
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
    marginBottom: 10,
    width: 200
  },
  btnStyle: {
    // flex: 1,
    margin: 5
  },
  btnHighLightHeart:{
    height: 70,
    width: 70,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'#94de45',
    borderRadius:35,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0)'
  },
  btnHighLightClose:{
    height: 70,
    width: 70,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'#ED462C',
    borderRadius:35,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0)'
  },
  txtHighLight:{
    marginTop:5,
    justifyContent: 'center',
    color:'#94de45',
    textAlign:'center',
  }
});
