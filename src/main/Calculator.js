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
                <Button lable="=" function={addDigit}/>
                <Button lable="0" function={addDigit}/>
                <Button lable="<=" function={addDigit}/>
                <Button lable="AC" function={addDigit}/>
                <Button lable="+" function={addDigit}/>
                <Button lable="1" function={addDigit}/>
                <Button lable="2" function={addDigit}/>
                <Button lable="3" function={addDigit}/>

                <Button lable="-" function={addDigit}/>

                <Button lable="4" function={addDigit}/>
                <Button lable="5" function={addDigit}/>
                <Button lable="6" function={addDigit}/>

                <Button lable="X" function={addDigit}/>

                <Button lable="7" function={addDigit}/>
                <Button lable="8" function={addDigit}/>
                <Button lable="9" function={addDigit}/>

                <Button lable="/" function={reset}/>

            </View>
       </View>
   )
}

const styles = StyleSheet.create({
   container: {
    //    backgroundColor: '#fff',
    //    display: 'flex',
    //    alignItems: 'center',
    //    justifyContent: 'center',
   },
   buttons:{
        
        // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse'
   },
 
});

export default Calculator;