import React from 'react';
import { View, StyleSheet} from 'react-native';
import GenreBubble from '../genreBubble/GenreBubble';

type IProps = {
    genres: string
}

const GenreContainer = (props: IProps) => {
    const { genres } = props;
    const genresArr = genres.split(", ")

    return (
        <View style={styles.detailContainer}>
            {genresArr.map(genre => (
                <GenreBubble genre={genre} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({

    detailContainer: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 45,
        maxHeight: 90,
        justifyContent: 'center',
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

export default GenreContainer;