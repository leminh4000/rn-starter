import React, {useReducer, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + action.payload;
        default :
            return state;
    }

}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type:'INC',payload:1});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type:'INC',payload:-1});
            }}/>
            <Text>Current Count: {state}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
