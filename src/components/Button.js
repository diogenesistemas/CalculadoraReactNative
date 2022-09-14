import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Button(props) {

    const isNumber = (lable) =>{
         return !isNaN(lable);
    }



   return (
       <TouchableOpacity 
       style={[styles.button, isNumber(props.lable) ? styles.buttonsNumber : styles.buttonsOperation, ]} onPress={() => props.function(props.lable)}>
           <Text style={[styles.lableButton]}>{props.lable}</Text>
       </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
    //    backgroundColor: '#fff'
   },
   button:{
        width: 98,
        height: 98,
        color: '#fff',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        borderWidth: 1,
        borderColor: "#fff",
        // borderRadius: 50,
   
   },
    buttonsNumber:{
        backgroundColor: '#333',
   },
     buttonsOperation:{
        backgroundColor: '#FF7F00',
   },
   lableButton:{
        color: '#fff',
   },

});

export default Button;