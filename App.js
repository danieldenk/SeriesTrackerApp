import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from './components/Home/Home'
import AboutScreen from './components/About/About'
import DetailsScreen from './components/Details/Details'

const Stack = createStackNavigator();
/*
  Main App consisting of three screens
    1. Home: Displays all of the series one is watching
    2. Details: Gives more information about a series
    3. About: Directs to my Github page
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
