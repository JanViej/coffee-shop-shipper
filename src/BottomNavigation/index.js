import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Menu from '../Menu';
import Details from '../ItemDetails';
import Cart from '../Cart';
import Account from '../Account';
import History from '../History';
import Splash from '../Splash';
import Login from '../Login';
import Signup from '../Signup';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Menu"
      activeColor="#64A1BD"
      inactiveColor="#DDECF1"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MenuStack = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator headerMode={false}>
    <MenuStack.Screen name="Splash" component={Splash} />
    <MenuStack.Screen name="Menu" component={BottomNavigation} />
    <MenuStack.Screen name="Details" component={Details} />
    <MenuStack.Screen name="Cart" component={Cart} />
    <MenuStack.Screen name="Login" component={Login} />
    <MenuStack.Screen name="Signup" component={Signup} />
  </MenuStack.Navigator>
);

export default MenuStackScreen;
