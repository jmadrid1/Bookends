import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TitleDetailsScreen from './screens/TitleDetailsScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

function Home({ navigation, route }) {
  return (
    <HomeScreen navigation={navigation} route={route} />
  );
}

function TitleDetails({ navigation, route }) {
  return (
    <TitleDetailsScreen navigation={navigation} route={route} />
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
        <Stack.Screen name="TitleDetails" component={TitleDetails} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
