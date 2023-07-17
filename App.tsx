import { NavigationContainer } from '@react-navigation/native';
import React,{ createRef } from 'react';
import MyStackNavigator from './src/navigator/stack-navigator';

const App=()=>{
  const navigationRef = createRef();
  return(
    <NavigationContainer ref={navigationRef}>
      <MyStackNavigator  />
    </NavigationContainer>
  )
}

export default App