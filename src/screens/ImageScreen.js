import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    FlatList
} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore="9"></ImageDetail>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore="7"></ImageDetail>
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore="4"></ImageDetail>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ImageScreen;
