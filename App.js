
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreen from './Screens/BookTransactionScreen'
import SearchScreen from './Screens/SearchScreen'
import {createAppContainer} from 'react-navigation' 
import {creatBottomTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
    );
  }
}

const tabNavigator=createBottomTabNavigator({
  transation:{Screen:BookTransactionScreen},
  Search:{Screen:SearchScreen}

})
const AppContainer=createAppContainer(tabNavigator)