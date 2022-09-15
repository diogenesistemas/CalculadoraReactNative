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
    const [operation, setOperation] = useState("")
    const [result, setResult] = useState(0)

    const addDigit = (digit) => {
        let n = number + digit;
        // setExpression(newExpression)
        // console.log(newExpression)
        setNumber(n);
        let newExpression = expression + n

        // let newExpression = expression + operation
        setExpression(newExpression)
        // console.log(n)
        // console.warn(newExpression)
        setDisplay(newExpression);

        // let newExpression = expression
        // let newExpression = executeOperation(...expression) + n
        // let newExpression = expression + n

       
        // setExpression(expression)
        
        calcOperation(newExpression)

       
        // console.warn(newExpression)


        // console.warn(eval(resultado))
    }

    const calcOperation = (e) =>{
        let calc = expression != "" ? eval(e) : "";
        setResult(calc)
    }

    const addOperation = (operation) => {
        let newOperation = ""
       

        let newExpression = expression
        // let ns = palavra.replace(0, palavra.length-1,"")
        // console.log(ns)

        if (lastDigitIsNotANumber(newExpression)){
            newOperation = operation
        }

        setOperation(newOperation)
        // let newExpression = expression + operation
        newExpression = lastDigitIsNotANumber(newExpression) ? newExpression.substr(0, newExpression.length-1) + operation : expression + operation
        setExpression(newExpression)
        setDisplay(newExpression)
        // let newDisplay = display + operation
        // setDisplay(newDisplay)
        // setOperation(operation);
        // let newExpression = expression  + number
        // console.log(newExpression)
        // setExpression(newExpression)
        // setDisplay(newExpression)
        // console.log(operation)
        // newExpression.push(number)
        // newExpression.push(operation)

        // let newDisplay = display+operation
        // console.warn(newDisplay)
     


        
        // if (lastDigitIsNotANumber(executeOperation(...newExpression))){
            
        // }


        // console.warn(executeOperation(...newExpression))


        // setExpression(newExpression)
        setNumber("")


    }

    function executeOperation ()  {

        // for (let index = 0; index < expression.length; index++) {
        //     const element = array[index];
        //     console.warn(element)

        // }

        return [...arguments].reduce((sum, nr) => sum + nr, "");
    }



    // if (lastDigitIsNumber(expression)){
    //     console.warn(expression);
    //     // calcResult(expression);
    //     // console.warn("Não é")
    // }

    const reset = () => {
        setNumber("")
        setExpression("")
        setOperation("")
        setDisplay("");
        setResult("");
    }

    const calcResult = ()=>{
        reset()
        setExpression(result)
        setDisplay(result)  
    }

    function lastDigitIsNotANumber(value){
       return isNaN(value.substr(value.length-1));
    }


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