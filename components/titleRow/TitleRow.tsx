import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Title } from '../../types/Title';
import star from '../../assets/star.png';

interface IProps {
    title: Title;
    navigation: any;
}

const TitleRow = (props: IProps) => {
    const { title } = props;
    const { navigation } = props;

    let rating = title.imDbRating

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TitleDetails', { selectedTitle: title })}>

            <Image style={styles.thumbnail} source={{ uri: title.image }} />

            <Text numberOfLines={1} style={styles.title}>{title.title}</Text>

            <View style={styles.ratingsContainer}>
                <Image style={styles.star} source={star} />
                <Text numberOfLines={1} style={styles.rating}>Rating: {rating}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        height: 310,
        width: 180,
        elevation: 6,
        marginLeft: 5,
        marginBottom: 17,
        borderRadius: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    rating: {
        fontSize: 13,
        flex: 1,
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        marginBottom: 4,
        marginLeft: 4
    },

    ratingsContainer: {
        flexDirection: 'row',
        height: 30,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
    },

    star: {
        height: 12,
        width: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    thumbnail: {
        flexGrow: 1,
        minWidth: '100%',
        maxWidth: '100%',
        borderRadius: 2,
        resizeMode: 'contain'
    },

    title: {
        fontSize: 14,
        width: '100%',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
    },

});

export default TitleRow;