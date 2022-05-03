import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchQueryResult } from '../../types/SearchQueryResult';

interface IProps {
    title: SearchQueryResult;
    navigation: any;
}

/**
 * @param {{ 
 * title: SearchQueryResult,
 * navigation: any
 * }} props 
 * @returns
 */

/**
 * SearchResult is a row component for display search results in a list.
 * This component receives title as a SearchQueryResult object to populate the data of a search result.
 * Additionally, receives navigation for navigating to the TitleDetailsScreen.
 */
const SearchResult = (props: IProps) => {
    const { title } = props;
    const { navigation } = props;

    let name: string = title.title
    let imgUrl: string = title.image
    let description = title.description

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('TitleDetails', { selectedTitle: title }); }}>
            <Image style={styles.thumbnail} source={{ uri: imgUrl }} />

            <View style={styles.innerContainer} >
                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitles}> {description}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: 130,
        width: '100%',
        alignItems: 'center',
        marginBottom: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#f5c518',
        borderTopWidth: 0.5,
        borderTopColor: '#f5c518',
        borderBottomWidth: 0.5,
        borderBottomColor: '#f5c518',
    },

    innerContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },

    ratingsContainer: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    rating: {
        fontSize: 13,
        height: 23,
        width: '100%',
        marginBottom: 4,
        marginLeft: 10,
        color: 'black',
        textAlign: 'center',
        justifyContent: 'flex-start',
    },

    subtitles: {
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 3,
        color: '#999999',
        justifyContent: 'center',
    },

    star: {
        height: 12,
        width: 12,
        marginTop: 4
    },

    thumbnail: {
        height: 115,
        width: 125,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        resizeMode: 'contain',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 25,
        justifyContent: 'flex-start',
    },

});

export default SearchResult;