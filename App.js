import {Provider} from 'react-redux'
import store from './src/core/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-reanimated'
import Main from './src/components/Main/Main'
import Boarding from './src/components/Boarding/Boarding'
import Payment from './src/components/Payment/Payment'
import Landing from './src/components/Landing/Landing'
import Profile from './src/components/Profile/Profile'
import Auth from './src/components/Auth/Auth'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="auth">
          <Stack.Screen name="home" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name="boarding" component={Boarding} options={{ headerShown: false }}/>
          <Stack.Screen name="payment" component={Payment} options={{ headerShown: false }}/>
          <Stack.Screen name="landing" component={Landing} options={{ headerShown: false }}/>
          <Stack.Screen name="auth" component={Auth} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
