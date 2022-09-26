import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    FlatList,
    Image,
} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image score - {props.imageScore}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ImageDetail;
