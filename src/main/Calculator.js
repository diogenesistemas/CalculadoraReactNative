import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import 
    { 
        Button, 
    } from '../components';

function Calculator(props) {

   return (
       <View style={[styles.container]}>
            <View style={[styles.buttons]}>
                <Button lable="1"/>
                <Button lable="2"/>
                <Button lable="3"/>
                <Button lable="4"/>
                <Button lable="5"/>
                <Button lable="6"/>
                <Button lable="7"/>
                <Button lable="8"/>
                <Button lable="9"/>
            </View>
       </View>
   )
}

const styles = StyleSheet.create({
   container: {
    //    backgroundColor: '#fff',
       display: 'flex',
    //    alignItems: 'center',
    //    justifyContent: 'center',
   },
   buttons:{
        
        // justifyContent: 'center',
   }
});

export default Calculator;