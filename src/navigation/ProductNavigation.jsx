import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../components/user/Profile';
import QandA from '../components/product/QandA';
import HomeScreen from '../components/product/HomeScreen';
import SearchScreen from '../components/product/SearchScreen';
import Notification from '../components/product/Notification';
import Cart from '../components/product/Cart';
import EditProfile from '../components/product/EditProfile';
import DetailPlantScreen from '../components/product/DetailPlantScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faSearch,
  faBell,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';

// Profile Stack Navigator
const StackProfile = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <StackProfile.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <StackProfile.Screen
        name="QandA"
        component={QandA}
        options={{headerShown: false}}
      />
    </StackProfile.Navigator>
  );
};

// Home Tab Navigator
const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

// Main Product Stack Navigator
const StackHome = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <StackHome.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabHome">
      <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Detail" component={DetailPlantScreen} />
      <StackHome.Screen name="Cart" component={Cart} />
      <StackHome.Screen name="EditProfile" component={EditProfile} />
    </StackHome.Navigator>
  );
};

export default ProductNavigation;
