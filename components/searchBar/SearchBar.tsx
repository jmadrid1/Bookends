import React, { Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, TextInput, Dimensions } from 'react-native';
import magnifyingGlass from '../../assets/search.png';

const { width } = Dimensions.get('screen')

type IProps = {
    isEditable: boolean;
    setQuery: Dispatch<SetStateAction<string>>;
    searchFromQuery: (query: string) => Promise<void>;
}

/**
 * @param {{ 
 * isEditable: boolean,
 * setQuery: Dispatch<SetStateAction<string>>,
 * searchFromQuery: (query: string) => Promise<void>,
 * onPress: () => void
 * }} props 
 * @returns
 */

/**
 * SearchBar is a custom TextInput component for entering search queries.
 * This component receives isEditable as a boolean to disable text input. 
 * Additionally, receives setQuery() & searchFromQuery() as a prop.
 */
const SearchBar = (props: IProps) => {
    const { isEditable, setQuery, searchFromQuery } = props;

    return (
        <View style={styles.container} >
            <TextInput style={styles.textInput} editable={isEditable} selectTextOnFocus={isEditable} placeholder='Search' onChangeText={(text) => setQuery(text)} />
            <TouchableOpacity style={styles.searchButton} onPress={() => searchFromQuery}>
                <Image style={styles.searchIcon} source={magnifyingGlass}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: 50,
        width: width - 110,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center'
    },

    searchIcon: {
        flexGrow: 1,
        height: 30,
        width: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2
    },

    searchButton: {
        flexDirection: 'row',
        height: 50,
        width: 50,
        backgroundColor: '#f5c518',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

    textInput: {
        color: '#414141',
        fontWeight: 'bold', 
        flex: 1,
        fontSize: 14,
        borderRadius: 25,
        paddingLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default SearchBar;