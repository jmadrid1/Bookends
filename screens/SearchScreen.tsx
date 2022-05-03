import React, { useState, useEffect } from 'react'
import { StatusBar, View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/searchBar/SearchBar';
import { Title } from '../types/Title'
import SearchResult from '../components/searchResult/SearchResult';
import AnimationView from '../components/animationView/AnimationView';
import { Endpoints } from "../util/Constants";
import axios from "axios";

type IProps = {
    navigation: any;
}

/**
 * @param {{ 
 * navigation: any,
 * }} props 
 * @returns
 */

/**
 * SearchScreen displays the results from a search query.
 * This screen is passed React's navigation for navigating between screens and passing data.
 */
export const SearchScreen = (props: IProps) => {
    const { navigation } = props;
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState<Title[]>([]);
    const [animationOption, setAnimationOption] = useState(1);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setAnimationOption(1)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            searchFromQuery(query);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    //Fetches search results from API based off of query parameter
    const searchFromQuery = async (query: string) => {
        if (query !== "") {
            const url = Endpoints.searchEndpoint + query
            const res = await axios.get(url);

            if (res.status === 200) {
                const results = res.data.results;
                setSearchResults(results)
            } else {
                setAnimationOption(2)
                setSearchResults([])
                setLoading(false)
            }
        } else {
            setSearchResults([])
            setLoading(false)
        }
    }

    const renderItem = ({ item }) => {
        return (
            <SearchResult key={item.id} title={item} navigation={navigation} />
        );
    };

    return (
        <View style={styles.container}>
            {!isLoading ? (
                <>
                    <View style={styles.searchBarContainer}>
                        <SearchBar
                            isEditable={true}
                            setQuery={setQuery}
                            searchFromQuery={searchFromQuery}
                        />
                    </View>

                    <View style={styles.innerContainer}>
                        {searchResults.length > 0 &&
                            <FlatList
                                data={searchResults}
                                renderItem={renderItem}
                            />
                        }
                        {
                            searchResults.length === 0 && (<AnimationView option={animationOption} />)
                        }
                    </View>
                </>
            ) : (
                <>
                        <View style={styles.searchBarContainer}>
                            <SearchBar
                                isEditable={true}
                                setQuery={setQuery}
                                searchFromQuery={searchFromQuery}
                            />
                        </View>

                    <View style={styles.innerContainer}>
                        <AnimationView option={3} />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        paddingTop: StatusBar.currentHeight
    },

    innerContainer: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },

    searchBarContainer: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 70,
        maxHeight: 70,
        width: '100%',
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default SearchScreen;