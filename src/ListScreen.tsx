import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GetList from './GetList';
import {Item} from './GetList';

type props = {
    result: []
}

// interface item {
//     name: string,
//     id: string
// }

const Item = ({ result }: props) => (
    <View>
        <Text>{result}</Text>
    </View>
);

const ListScreen = ({ searchResults }: {searchResults:Item[]}) => {
    return (
        <View>
            <FlatList
                data={searchResults}
                renderItem={({item}: {item: Item}) => <Item result={item.name} />}
                keyExtractor={item => item.id}
            />
        </View>
    ) 
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        marginHorizontal: 20
    }
});

export default ListScreen;