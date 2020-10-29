import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import yelp from './api/yelp';
import ListScreen from './ListScreen';

export type Item = {
    id: string;
    name: string;
}

type Kech = {
    businesses: Item[]
}

const GetList = () => {
    const searchTerm = 'food';
    const [results, setResults] = useState<Item[]>([]);

    useEffect(() => {
        const searchApi = async () => {
            try {
                const response = await yelp.get<Kech>('/search', {
                    params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'amsterdam'
                    }
                });

                setResults(response.data.businesses);

            } catch(error) {
                console.log(error)
            } 
        };
        searchApi()
    }, [searchTerm])
    
    return (
        <View>
            <ListScreen
                searchResults={results}
            />
            <Text>{searchTerm}</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    );
};


const styles = StyleSheet.create({});

export default GetList;
