import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName]=useState('')
    return <View>
        <Text>Enter password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value)=>{
                setName(value.length >=5 ? "OK": "Password must be at least 5 characters");
            }}
        />
        <Text>{name}</Text>
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor:'pink',
        borderWidth: 1,
    }
});

export default TextScreen;
