import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Button(props) {

   return (
       <TouchableOpacity style={[styles.button]}>
           <Text style={[styles.lableButton]}>{props.lable}</Text>
       </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
    //    backgroundColor: '#fff'
   },
   button:{
        width: 70,
        height: 70,
        backgroundColor: '#333',
        color: '#fff',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
   
   },
   lableButton:{
        color: '#fff',
   },

});

export default Button;