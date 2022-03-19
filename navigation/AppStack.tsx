import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TitleDetailsScreen from '../screens/TitleDetailsScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TitleDetails" component={TitleDetailsScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

export default AppStack