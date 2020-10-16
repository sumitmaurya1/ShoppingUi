import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet,  View } from 'react-native';
import ProductComponent from './components/ProductComponent';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import Navigator from './routes/nav'

export default function App() {
  return (
    <Navigator />
    
    
  );
}

const styles = StyleSheet.create({
  
});
