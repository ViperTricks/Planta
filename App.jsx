import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store, persistor} from './src/rtk/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

// import Login from './src/components/user/Login';
// import Register from './src/components/user/Register';
// import HomeScreen from './src/components/product/HomeScreen';
// import PlantListScreen from './src/components/product/PlantListScreen';
// import PlanterListScreen from './src/components/product/PlanterListScreen';
// import ToolListScreen from './src/components/product/ToolListScreen';
// import DetailPlantScreen from './src/components/product/DetailPlantScreen';
// import BottomTabNavigation from './src/components/BottomTabNavigation';

  // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Register"
    //       component={Register}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="BottomTabNavigation"
    //       component={BottomTabNavigation}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="HomeScreen"
    //       component={HomeScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="PlantListScreen"
    //       component={PlantListScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="PlanterListScreen"
    //       component={PlanterListScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="ToolListScreen"
    //       component={ToolListScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="DetailPlantScreen"
    //       component={DetailPlantScreen}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
