import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    FlatList,
    Image,
} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={()=>onIncrease()} title={`Increase  ${color}`}/>
            <Button onPress={()=>onDecrease()} title={`Decrease  ${color}`}/>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ColorCounter;