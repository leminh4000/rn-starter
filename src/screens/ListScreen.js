import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [{name: 'Friend #1', key: "1", age: 20},
        {
            name: 'Friend #2', key: "2", age: 22
        },
        {name: 'Friend #3', key: "3", age: 100},
        {
            name: 'Friend #4', key: "4", age: 120
        },]
    return (<FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
            console.log(item.age);
            return (<Text style={styles.textStyle}>{item.name} -
                Age {item.age}</Text>)
        }}
    />);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreen;
