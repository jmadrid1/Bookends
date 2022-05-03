import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/searchBar/SearchBar';
import Header from '../components/header/Header';
import TitleRow from '../components/titleRow/TitleRow';
import { Title } from '../types/Title'
import AnimationView from '../components/animationView/AnimationView';
import { Endpoints } from "../util/Constants";
import axios from "axios";

interface IProps {
    navigation: any;
    route: any;
}

/**
 * @param {{ 
 * navigation: any,
 * route: any,
 * }} props 
 * @returns
 */

/**
 * HomeScreen displays a list of popular & acclaimed titles. This screen is passed React's
 *  navigation & route as props for navigating between screens and passing data.
 */
export const HomeScreen = (props: IProps) => {
    const { navigation } = props;
    const [popularTitles, setPopularTitles] = useState<Title[]>([]);
    const [acclaimedTitles, setAcclaimedTitles] = useState<Title[]>([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPopularTitles();
        getAcclaimedTitles();
    }, [])

    //Fetches popular titles from API
    const getPopularTitles = async () => {
        const url = Endpoints.popularMoviesEndpoint
        const titles = await axios.get(url).then(res => {
            const titles = res.data.items;
            return titles
        })
        setPopularTitles(titles)
    }

    //Fetches acclaimed titles from API
    const getAcclaimedTitles = async () => {
        const url = Endpoints.topMoviesEndpoint
        const titles = await axios.get(url).then(res => {
            const titles = res.data.items;
            return titles
        })
        setAcclaimedTitles(titles)
        setLoading(false)
    }

    const renderItem = ({ item }) => {
        return (
            <TitleRow key={item.id} title={item} navigation={navigation} />
        );
    };

    return (
        <ScrollView style={styles.scrollViewContainer}>
            {!isLoading ? (
                <>
                    <View style={styles.searchBarContainer}  >
                        <TouchableOpacity style={styles.searchBarOverlay} onPress={() => navigation.navigate('Search')}>
                            <SearchBar isEditable={false} setQuery={null} searchFromQuery={null} />
                        </TouchableOpacity>
                    </View>

                    <Header title={'Trending'} />
                    <View style={styles.titlesScrollViewContainer} >
                        {popularTitles.length > 0 &&
                            <FlatList
                                horizontal={true}
                                data={popularTitles}
                                renderItem={renderItem}
                            />
                        }
                    </View>

                    <Header title={'Critically Acclaimed'} />
                    <View style={{ ...styles.titlesScrollViewContainer, height: 350 }} >
                        {acclaimedTitles.length > 0 &&
                            <FlatList
                                horizontal={true}
                                data={acclaimedTitles}
                                renderItem={renderItem}
                            />
                        }
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.searchBarContainer}  >
                        <TouchableOpacity style={styles.searchBarOverlay} onPress={() => navigation.navigate('Search')}>
                            <SearchBar isEditable={false} query={null} setQuery={null} searchFromQuery={null} onPress={() => navigation.navigate('Search')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.innerContainer}>
                        <AnimationView option={3} />
                    </View>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    innerContainer: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },

    scrollViewContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
    },

    titlesScrollViewContainer: {
        height: 320,
    },

    searchBarContainer: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 70,
        maxHeight: 70,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchBarOverlay: {
        flex: 1,
        minHeight: 90,
        maxHeight: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        width: 190,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingTop: 3
    },

})

export default HomeScreen;