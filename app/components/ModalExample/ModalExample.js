import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet
} from 'react-native';

export default ModalExample = (props) => {
   return (
      <View style = {styles.container}>

        <Modal
         animationType = {"fade"}
         transparent = {true}
         visible = {props.modalVisible}
         >
           <View style = {styles.modal1}>
             <View style = {styles.modal}>
               <TouchableHighlight onPress = {props.closeModal}>
                 <Text>Hide Modal</Text>
               </TouchableHighlight>
             </View>
           </View>
        </Modal>

      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },

   modal1: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

   modal: {
      backgroundColor: 'silver',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 500,
   }
});
