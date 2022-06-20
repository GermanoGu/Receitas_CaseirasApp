import * as React from 'react';
import { Button, Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Sobre from './src/Screens/Sobre';
import Refeicao from './src/Screens/Refeicao';
import Sobremesas from './src/Screens/Sobremesas';
import Bebidas from './src/Screens/Bebidas';
import Bolos from './src/Screens/Bolos';
import { create } from 'react-test-renderer';
import { color } from 'react-native-reanimated';

const MyTheme = {
  dark: false,
  colors: {
    background: '#fff8e7',
    card: '#ffe5c3',
    text: '#442C2E',
  },
};

function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Categorias</Text>
        <View><Text style={styles.subtitle}><Icon2 name={'cake'} color={'#6B0052'} size={15}></Icon2> Bolos</Text></View>
        <View>
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Bolos')}
        >
          <Text style={styles.textStyle}>Ver receitas</Text>
        </Pressable>
        <View><Text style={styles.subtitle}><Icon name={'beer'} color={'brown'} size={16}></Icon> Bebidas</Text></View>
        <View>
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Bebidas')}
        >
          <Text style={styles.textStyle}>Ver receitas</Text>
        </Pressable>
        <View><Text style={styles.subtitle}><Icon name={'fast-food'} color={'red'} size={16}></Icon> Refeições</Text></View>
        <View>
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Ref')}
        >
          <Text style={styles.textStyle}>Ver receitas</Text>
        </Pressable>
        <View><Text style={styles.subtitle}><Icon name={'ice-cream'} color={'#ED30CF'} size={16}></Icon> Sobremesas</Text></View>
        <View>
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Sobremesas')}
          style={styles.button}
        >
          <Text style={styles.textStyle}>Ver receitas</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Bolos" component={Bolos} />
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="Ref" component={Refeicao} options={{ title: "Refeições" }} />
      <Stack.Screen name="Sobremesas" component={Sobremesas} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused
                ? 'md-business'
                : 'md-business-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })} tabBarOptions={{
          activeTintColor: '#442C2E',
          inactiveTintColor: '#442C2E'
        }}>
        <Tab.Screen name="Home" component={HomeStack} options={{ title: 'D. Anilda Receitas Caseiras' }} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: "#442C2E",
    fontWeight: "bold",
    textAlign: "center"
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#442C2E',
    textAlign: 'center',
    margin:10
  },
  subtitle: {
    color: "#442C2E",
    fontSize: 16,
    textAlign: 'center',
    borderBottomColor: '#442C2E',
    borderTopColor: '#442C2E',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: '#ffe5c3'
  },
  descricao: {
    color: "#442C2E",
    textAlign: "center",
    margin:8
  },
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    alignSelf: 'center',
    backgroundColor: '#ffcc2b',
    marginBottom: 8
  },
})

