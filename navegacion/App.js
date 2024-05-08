import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import {Home} from './app/HomeScreen';
import {Contacts} from './app/ContactsScreen';
import {Product} from './app/ProductScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contacts} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

