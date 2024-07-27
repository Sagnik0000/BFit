import { StyleSheet, Text, View , Image} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import index from "./src/index";
import HomeScreen from "./src/HomeScreen";
import WorkoutScreen from "./src/WorkoutScreen";
import Fitscreen from "./src/Fitscreen";
import RestScreen from "./src/RestScreen";
import welcome from "./src/welcome";
import IMAGES from "./assets/stackNavigator";
import SCREENS from "./src/StackNavigator";
import intro from "./intro";
import bmr from "./src/bmr";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="intro" component={intro} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="index" component={index} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Fit" component={Fitscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return <Tab.Navigator>
    <Tab.Screen name={SCREENS.welcome} component={welcome}
    options={{title: 'welcome',tabBarIcon:({focused})=>(<Image source={IMAGES.home} style={{height:30, width:30}}/>),}}/>
      <Tab.Screen name={SCREENS.index} component={index}
    options={{title: 'index',tabBarIcon:({focused})=>(<Image source={IMAGES.bmi} style={{height:30, width:30}}/>),}}/>
      <Tab.Screen name={SCREENS.Home} component={HomeScreen}
    options={{title: 'Home',tabBarIcon:({focused})=>(<Image source={IMAGES.gym} style={{height:30, width:30}}/>),}}/>
      <Tab.Screen name={SCREENS.bmr} component={bmr}
    options={{title: 'bmr',tabBarIcon:({focused})=>(<Image source={IMAGES.calorie} style={{height:30, width:30}}/>),}}/>
  </Tab.Navigator>
}

export default StackNavigator;

const styles = StyleSheet.create({});