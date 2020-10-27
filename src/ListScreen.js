import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = ({ searchTerm, searchResult }) => {
    return (
        <View>
            <FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item }) => {
            return (
            <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
            </Text>
            );
        }}
        />
        </View>
    ) 
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 20
    }
});

export default ListScreen;