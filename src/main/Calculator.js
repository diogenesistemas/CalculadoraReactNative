import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import 
    { 
        Button, 
        Display, 
    } from '../components';

function Calculator(props) {

    const [display, setDisplay] = useState(0)

    const addDigit = (digit) => {
        let number = display + digit;
        setDisplay(parseInt(number));
    }

    const reset = () => {
        setDisplay(0);
    }


   return (
       <View style={[styles.container]}>
            <Display value={display}/>
            <View style={[styles.buttons]}>
                <Button lable="C" function={reset}/>
                <Button lable="1" function={addDigit}/>
                <Button lable="2" function={addDigit}/>
                <Button lable="3" function={addDigit}/>
                <Button lable="4" function={addDigit}/>
                <Button lable="5" function={addDigit}/>
                <Button lable="6" function={addDigit}/>
                <Button lable="7" function={addDigit}/>
                <Button lable="8" function={addDigit}/>
                <Button lable="9" function={addDigit}/>
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