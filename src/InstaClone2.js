import React, {Component} from "react";
import {View, StyleSheet, CameraRoll} from "react-native";
import {MainFeed, Login, Camera, Profile } from "./components/screens";
import Register from "./components/screens/Register"
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const Tabs = createBottomTabNavigator({
feed: MainFeed,
camera: Camera,
profile: Profile
});

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
  
  });

const MainStack = createSwitchNavigator({
  intro:{screen:IntroStack},
  main: {screen: Tabs}
});

const AppContainer =createAppContainer(MainStack);


class InstaClone2 extends React.Component {
  render() {
    return  <AppContainer/>;
    
  }
}

export default InstaClone2;

