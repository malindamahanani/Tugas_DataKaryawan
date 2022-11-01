/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './navigasi/Home';
import Detail from './navigasi/Detail';

const stack = createNativeStackNavigator();


 function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home}
        options={{
          title: 'Data Karyawan',
          headerStyle: { backgroundColor: '#006aff'},
          headerTintColor: '#fff'
        }} />
        <stack.Screen name='Detail' component={Detail}
        options={{
          title: 'Detail Karyawan',
          headerStyle: { backgroundColor: '#006aff' },
          headerTintColor: '#fff'
        }}/>
      </stack.Navigator>
    </NavigationContainer>
  )
  
 }

export default App;
