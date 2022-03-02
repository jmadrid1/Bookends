import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type IProps = {
    title: string;
}

const Header = (props: IProps) => {
    const { title } = props;

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        minHeight: 50,
        maxHeight: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderLeftWidth: 5,
        borderLeftColor: '#f5c518',
        borderTopWidth: 1,
        borderTopColor: '#f5c518',
        borderBottomWidth: 1,
        borderBottomColor: '#f5c518',
        alignItems: 'center',
        marginBottom: 10,
    },

    header: {
        fontSize: 18,
        width: '100%',
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        marginLeft: 10
    },

});

export default Header;