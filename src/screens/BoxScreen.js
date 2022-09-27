import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle:{
        width:50,
        height:50,
        backgroundColor: 'blue',
        alignSelf: 'flex-start'
    },
    textTwoStyle:{
        width:50,
        height:50,
        backgroundColor: 'green',
        alignSelf: 'center',

    },
    textThreeStyle:{
        width:50,
        height:50,
        backgroundColor: 'pink',
        alignSelf: 'flex-start',
    },

});

export default BoxScreen;
