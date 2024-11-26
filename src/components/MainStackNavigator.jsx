import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import PlantListScreen from './product/PlantListScreen';
import PlanterListScreen from './product/PlanterListScreen';
import ToolListScreen from './product/ToolListScreen';
import DetailPlantScreen from './product/DetailPlantScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigation">
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlantListScreen"
        component={PlantListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlanterListScreen"
        component={PlanterListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToolListScreen"
        component={ToolListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPlantScreen"
        component={DetailPlantScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
