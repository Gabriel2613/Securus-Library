import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Sobre from './components/Sobre';
import Acervo from './components/Acervo';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Estilos from './styles/Estilos';
import { drawerStyles } from './styles/Estilos';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0b1f3a" />
      <SafeAreaView style={Estilos.safeAreaViewContainer}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Sobre"
            screenOptions={drawerStyles}
          >
            <Drawer.Screen
              name="Sobre"
              component={Sobre}
              options={{
                title: 'Sobre a Securus Library',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="information-circle-outline" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Acervo"
              component={Acervo}
              options={{
                title: 'Acervo de Livros',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="library-outline" size={size} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
