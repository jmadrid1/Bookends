import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    genre: string,
}

/**
 * @param {{ 
 * genre: string
 * }} props 
 * @returns
 */

/**
 * GenreBubble is a component that is shaped like a rounded bubble that holds a label.
 * This component receives a genre as string prop for populating the text in the bubble.
 */
const GenreBubble = (props: IProps) => {
    const { genre } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{genre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        minHeight: 35,
        maxHeight: 35,
        maxWidth: 100,
        borderRadius: 20,
        borderColor: '#f5c518',
        borderWidth: 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'white',
    },

});

export default GenreBubble;