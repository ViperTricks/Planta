import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserNavigation from './UserNavigation';
import ProductNavigation from './ProductNavigation';

import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const user = useSelector(state => state.app.user);
  console.log(user);
  return (
    <NavigationContainer>
      {user ? <ProductNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
