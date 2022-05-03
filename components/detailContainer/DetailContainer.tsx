import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

type IProps = {
    detailTitle: string;
    detail: string;
}

/**
 * @param {{ 
 * detailTitle: string,
 * detail: string
 * }} props 
 * @returns
 */

/**
 * DetailContainer is the wrapper for containing title details views in TitlesDetailsScreen.
 * This component receives detailTitle for specifying the header for the container & detail
 * for adding the text associated to the header.
 */
const DetailContainer = (props: IProps) => {
    const { detailTitle, detail } = props;

    return (
        <View style={styles.detailContainer}>
            <Text style={{ marginLeft: 10 }}>
                <Text style={styles.detailTitleText}> {detailTitle}: </Text>
                <Text style={styles.detailSubtext}> {detail} </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    detailContainer: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 45,
        maxHeight: 90,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
        borderBottomColor: '#f5c518',
        borderTopColor: '#f5c518',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
    },

    detailTitleText: {
        fontSize: 16,
        flex: 1,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    detailSubtext: {
        flex: 1,
        fontSize: 16,
        marginLeft: 22,
        color: '#f5c518',
        justifyContent: 'center',
    },

});

export default DetailContainer;