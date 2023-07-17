import { createStackNavigator } from '@react-navigation/stack'
import Onboard from '../../screens/onboard'
import Login from '../../screens/login';
import Signup from '../../screens/signup';

const Stack = createStackNavigator();

const MyStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Onboard'
          screenOptions={{
            headerShown:false
          }}
        >
            <Stack.Screen name="Onboard" component={Onboard} />
            <Stack.Screen  name='Login'  component={Login}/>
            <Stack.Screen name="Signup" component={Signup} />
            
        </Stack.Navigator>
    );
}


export default MyStackNavigator