import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import LoginPage from './components/LoginPage/index';
import AddWallet from './components/AddWallet';
import CreateWallet from './components/CreateWallet'
import Accuracy from './components/Accuracy'
import ReAccuracy from './components/ReAccuracy';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name='login' component={LoginPage} />
          <Stack.Screen name='add-wallet' component={AddWallet} />
          <Stack.Screen name='create-wallet' component={CreateWallet} />
          <Stack.Screen name='accuracy' component={Accuracy} />
          <Stack.Screen name='re-accuracy' component={ReAccuracy} />
          
        </Stack.Navigator>
      </NavigationContainer>


    
  );
}


