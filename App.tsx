import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Horoscope from './screens/Horoscope';
import Result from './screens/Result';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Horoscope">
        <Stack.Screen
          name="Horoscope"
          component={Horoscope}
          options={{title: 'Enter Your Birth Date'}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{title: 'Your Horoscope Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
