import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Foto from './Foto';
import Home from './Home';
import Other from './Other';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
             screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return (
                    <Ionicons name="home" size={size} color={focused? color :"grey"} />
                  );
                } else if (route.name === 'Foto') {
                  return (
                    <Ionicons
                      name="camera"
                      size={size}
                      color={focused? color :"grey"}
                    />
                  );
                } else if (route.name === 'Other') {
                  return (
                    <Ionicons
                    name="md-checkmark-circle"
                    size={size}
                    color={focused? color :"grey"}
                  />
                  )
                }
              },
              tabBarInactiveTintColor: 'grey',
              tabBarActiveTintColor: 'tomato',
              headerShown:false,
            })}
      >
        <Tab.Screen name="Foto" component={Foto} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;