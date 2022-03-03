import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, FlatList, ImageBackground, Dimensions } from 'react-native';
import { Title } from '../types/Title';
import TitleRow from '../components/titleRow/TitleRow';
import DetailContainer from '../components/detailContainer/DetailContainer';
import Header from '../components/header/Header';
import { Endpoints } from "../util/Constants";
import axios from "axios";
import AnimationView from '../components/animationView/AnimationView';

const { width } = Dimensions.get('screen')

type IProps = {
    navigation: any;
    route: any;
    selectedTitle?: Title;
}

export const TitleDetailsScreen = (props: IProps) => {
    const { navigation } = props;
    const { selectedTitle } = props.route.params

    const [isLoading, setLoading] = useState(true)
    const [title, setTitle] = useState<Title>()

    useEffect(() => {
        getTitleInfo(selectedTitle.id);
    }, [])

    let id: string = selectedTitle.id
    const getTitleInfo = async (id: string) => {
        const url = Endpoints.searchTitleEndpoint + id

        const title: Title = await axios.get(url).then(res => {
            const title: Title = res.data
            return title
        })

        setTitle(title)
        setLoading(false)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container} key={item.id}>
                <TitleRow title={item} navigation={navigation} />
            </View>
        );
    };

    if (!isLoading){
        return (
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.banner}>
                    <ImageBackground style={styles.thumbnailBackground} source={{ uri: title.image }} blurRadius={5}>
                        <View style={styles.thumbnailContainer}>
                            <Image style={styles.thumbnail} source={{ uri: title.image }} />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{title.title}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <DetailContainer detailTitle={'Genre'} detail={title.genres} />
                <DetailContainer detailTitle={'Director'} detail={title.directors} />
                <DetailContainer detailTitle={'Writer'} detail={title.writers} />
                <DetailContainer detailTitle={'Stars'} detail={title.stars} />

                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>{title.plot}</Text>
                </View>

                <Header title={'More like this'} />
                <View style={styles.moreScrollViewContainer} >
                    <FlatList
                        horizontal={true}
                        data={title.similars}
                        renderItem={renderItem}
                    />
                </View>

            </ScrollView>
        )
    } else {
        return (
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.innerContainer}>
                    <AnimationView option={3}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        flex: 1,
        maxHeight: 350,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },

    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        justifyContent: 'center',
    },

    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },

    innerContainer: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },

    moreScrollViewContainer: {
        height: 320,
    },

    scrollViewContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },

    summaryContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },

    summaryText: {
        fontSize: 15,
        color: 'black',
        width: width - 20,
        lineHeight: 27,
        padding: 15,
        marginLeft: 12
    },

    title: {
        fontSize: 18,
        width: '100%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 0.7,
        paddingHorizontal: 10
    },

    titleContainer: {
        flex: 1,
        minHeight: 40,
        maxHeight: 40,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#f5c518',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'flex-start'
    },

    thumbnailBackground: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    thumbnail: {
        height: 190,
        width: 140,
    },

    thumbnailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },

})

export default TitleDetailsScreen;