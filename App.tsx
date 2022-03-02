import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

function Home({ navigation, route }) {
  return (
    <HomeScreen navigation={navigation} route={route} />
  );
}

function MovieDetails({ navigation, route }) {
  return (
    <MovieDetailsScreen navigation={navigation} route={route} />
  );
}

function Search({ navigation }) {
  return (
    <SearchScreen navigation={navigation} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
