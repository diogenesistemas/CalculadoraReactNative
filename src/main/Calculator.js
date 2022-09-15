import React, { useState } from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

import {
Button,
Display,
} from '../components';

function Calculator(props) {

    const [number, setNumber] = useState("")
    const [expression, setExpression] = useState()
    const [display, setDisplay] = useState("")
    const [result, setResult] = useState(0)

    const addDigit = (digit) => {
        // let n = number + digit;
        // setNumber(n);
        // console.warn(n)
        let newExpression = expression + digit
        setExpression(newExpression)
        setDisplay(newExpression);        
        calcOperation(newExpression)
    }

    const addOperation = (operation) => {

        let newExpression = expression
        // let ns = palavra.replace(0, palavra.length-1,"")
        console.warn(newExpression)

        if (lastDigitIsNotANumber(newExpression)){
            newExpression = newExpression.substr(0, newExpression.length-1)
        }
        newExpression += operation
        setExpression(newExpression)
        // setNumber("")
        setDisplay(newExpression)


    }
    
    const calcOperation = (e) =>{
        let calc = expression != "" ? eval(e) : 0;
        setResult(calc)
    }


    const reset = () => {
        // setNumber("")
        setExpression("")
        // setOperation("")
        setDisplay("");
        setResult(0);
    }

    const calcResult = (props)=>{
        reset()
        setExpression(result)
        setDisplay(result)  
    }

    const lastDigitIsNotANumber = (value) => {
       return isNaN(value.substr(value.length-1));
    }

    // const backSpace = () =>{
    //     let newExpression = expression
    //     newExpression = newExpression.substr(0, newExpression.length-1)
    //     setExpression(newExpression)
    //     setDisplay(newExpression)

    // }

    return (
        <View style={[styles.container]}>
            <Display value={display} />
            <Display value={result} />
            <View style={[styles.buttons]}>
                <Button lable="=" four function={calcResult}/>
                <Button lable="0" function={addDigit} />
                <Button lable="<=" function={addDigit} />
                <Button lable="AC" function={reset} />
                <Button lable="+" operation function={addOperation} />
                <Button lable="1" function={addDigit} />
                <Button lable="2" function={addDigit} />
                <Button lable="3" function={addDigit} />

                <Button lable="-" operation function={addOperation} />

                <Button lable="4" function={addDigit} />
                <Button lable="5" function={addDigit} />
                <Button lable="6" function={addDigit} />

                <Button lable="*" operation function={addOperation} />

                <Button lable="7" function={addDigit} />
                <Button lable="8" function={addDigit} />
                <Button lable="9" function={addDigit} />

                <Button lable="/" operation function={addOperation} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        //    display: 'flex',
        //    alignItems: 'center',
        //    justifyContent: 'center',
    },
    buttons: {

        // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
    },

});

export default Calculator;