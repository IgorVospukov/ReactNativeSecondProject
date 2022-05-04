import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

const Stack = createNativeStackNavigator();

const Other = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        getComponent={() => require('./ProfileScreen').default}
      />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  

  );
}
const styles = StyleSheet.create({
  forChoosetheScreen: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
export default Other;