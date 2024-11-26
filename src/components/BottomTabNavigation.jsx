import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from './product/HomeScreen';
import SearchScreen from './product/SearchScreen';
import NotiScreen from './product/Notification';
import Profile from './user/Profile';
import Notification from './product/Notification';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 60,
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../components/assets/images/home_icon_a.png')
                  : require('../components/assets/images/home_icon.png')
              }
              style={{width: 24, height: focused ? 32 : 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../components/assets/images/search_icon_a.png')
                  : require('../components/assets/images/search_icon.png')
              }
              style={{width: 24, height: focused ? 32 : 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../components/assets/images/noti_icon_a.png')
                  : require('../components/assets/images/noti_icon.png')
              }
              style={{width: 24, height: focused ? 32 : 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../components/assets/images/user_icon_a.png')
                  : require('../components/assets/images/user_icon.png')
              }
              style={{width: 24, height: focused ? 32 : 24}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
