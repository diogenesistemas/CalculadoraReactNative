import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Button(props) {

    const isNumber = (lable) => {
        return !isNaN(lable);
    }

    const stylesButton = [styles.button];
    const stylesText = [styles.text];

    stylesButton.push(styles.backgroundGrayMedium)

    if (props.operation) {
        stylesButton.push(styles.backgroundBlue)
    }

    if (props.four) {
        stylesButton.push(styles.buttonFour)
        stylesButton.push(styles.backgroundGrayDark)
    }



    // styles.button, isNumber(props.lable) ? styles.buttonsNumber : styles.buttonsOperation, ]



    return (
        <TouchableOpacity style={stylesButton} onPress={() => props.function(props.lable)}>
            <Text style={stylesText}>{props.lable}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        //    backgroundColor: '#fff'
    },
    button: {
        width: 98,
        height: 98,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#b5b5b5",
        // borderRadius: 50,

    },
    buttonFour: {
        width: 392,
    },
    backgroundGrayDark: {
        backgroundColor: '#454546',
    },
    backgroundGrayMedium: {
        backgroundColor: '#666666',
    },
    backgroundGrayLight: {
        backgroundColor: '#dcdcdc',
    },
    backgroundBlue: {
        backgroundColor: '#2196f3',
    },
    backgroundBlueLight: {
        backgroundColor: '#6bbef9',
    },
    backgroundOrange: {
        backgroundColor: '#FF7F00'
    },

    text: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },

});

export default Button;