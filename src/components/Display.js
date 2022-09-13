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
       backgroundColor: '#ccc',
       height: 100,
       display: 'flex',
      
     
   },
   displayValues: {
        color: '#000',
        fontSize: 50,
        
   },
});

export default Display;