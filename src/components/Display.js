import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Display(props) {

   return (
       <View style={[styles.display]}>
           <Text style={[styles.displayValues]}>{props.value}</Text>
       </View>
   )
}

const styles = StyleSheet.create({
   display: {
    //    backgroundColor: '#ccc',
       backgroundColor: '#333',
       height: 132,
       display: 'flex',   
   },
   displayValues: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'right',
        
   },
});

export default Display;