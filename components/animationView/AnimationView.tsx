import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';

const results = require('../animations/no_results.json');
const search = require('../animations/search.json');
const loading = require('../animations/loading.json');

type IProps = {
    option: number;
}

/**
 * @param {{ 
 * option: number,
 * }} props 
 * @returns
 */

/**
 * AnimationView creates a canvas for swapping animations.
 * This component receives an option prop as a number for selecting animations.
 */
const AnimationView = (props: IProps) => {
    const {option} = props;
    return (
        <ScrollView style={styles.container} enabled={false}>
            {option === 1 && <LottieView autoPlay loop style={styles.lottie} source={search} />}
            {option === 1 && <Text style={styles.text}>Start exploring the database!</Text>}

            {option === 2 && <LottieView autoPlay loop style={styles.lottie} source={results} />}
            {option === 2 && <Text style={styles.text}>No results found for search. Please try again or check internet connectivity.</Text>}

            {option === 3 && <LottieView autoPlay loop style={{...styles.lottie, width: '100%', padding: 90, marginTop: 90}} source={loading} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
    },

    lottie: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 60
    },

    text: {
        fontSize: 18,
        width: '100%',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 55,
        marginBottom: 110
    },

});

export default AnimationView;