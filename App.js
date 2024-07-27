import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import index from "./src/index";
import StackNavigator from "./StackNavigator";
import { useEffect, useState } from "react";
import { FitnessContext } from "./Context";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
