import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import yelp from './api/yelp';
import ListScreen from './ListScreen';

const GetList = () => {
    const searchTerm = 'food';
    const [results, setResults] = useState([]);
    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
            limit: 50,
            term: searchTerm,
            location: 'amsterdam'
            }
        });
    setResults(response.data.businesses);
    };

    return (
        <View>
            <Text>{searchTerm}</Text>
           <Text>We have found {results.length} results</Text> 
        </View>
    );
};

const styles = StyleSheet.create({});

export default GetList;
