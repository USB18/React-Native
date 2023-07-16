import { NavigationContainer } from '@react-navigation/native';
import React,{ createRef } from 'react';
import TabNavigator from './src/navigator/bottom-navigator/tab-navigator';

const App=()=>{
  const navigationRef = createRef();
  return(
    <NavigationContainer ref={navigationRef}>
      <TabNavigator/>
    </NavigationContainer>
  )
}

export default App