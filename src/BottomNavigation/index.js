import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Menu from '../Menu';
import Details from '../Details';
import Account from '../Account';
import History from '../History';
import Splash from '../Splash';
import Login from '../Login';
import Shipping from '../Shipping'
import { getListOrder } from '../redux/order/action'
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const dispatch=useDispatch();
  const orders = useSelector(state => state.order.listOrder);
  const param='pending';
  let count=orders?.order?.length;
  useEffect(() => {
    dispatch(getListOrder(param));
    console.log('data',orders);
  },[param,dispatch]);
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
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={26}
            />
          ),
          tabBarBadge: count,
        }}
      />
      <Tab.Screen
        name="Shipping"
        component={Shipping}
        options={{
          tabBarLabel: 'Delivery',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bike" color={color} size={26} />
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
    <MenuStack.Screen name="Shipping" component={Shipping} />
    <MenuStack.Screen name="Menu" component={BottomNavigation} />
    <MenuStack.Screen name="Details" component={Details} />
    <MenuStack.Screen name="Login" component={Login} />
  </MenuStack.Navigator>
);

export default MenuStackScreen;
