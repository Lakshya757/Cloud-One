import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import db from './db';
import Data from './components/data';

import Login from './screens/login'


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
