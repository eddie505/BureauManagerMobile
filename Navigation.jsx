import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Screens
import HomeScreen from "./screens/HomeScreen";
import PaymentScreen from "./screens/PaymentScreen";
import LoginScreen from "./screens/LoginScreen";
import InfoScreen from "./screens/InfoScreen";
import SupportScreen from "./screens/SupportScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  const [fontsLoaded] = useFonts({
    FredokaRegular: require("./assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("./assets/fonts/Fredoka-Bold.ttf"),
    FredokaMedium: require("./assets/fonts/Fredoka-Medium.ttf"),
    FredokaLight: require("./assets/fonts/Fredoka-Light.ttf"),
    FredokaSemiBold: require("./assets/fonts/Fredoka-SemiBold.ttf"),
  });

  async function logout({ navigation }) {
    await AsyncStorage.removeItem("@inquilino");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  if (!fontsLoaded) return null;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#1B6953",
        tabBarStyle: { backgroundColor: "#e9edc9" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontFamily: "FredokaBold" }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pagos"
        component={PaymentScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontFamily: "FredokaBold" }}>Pagos</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontFamily: "FredokaBold" }}>Perfil</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-question"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Help"
        component={SupportScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontFamily: "FredokaBold" }}>Ayuda</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Salir"
        component={SupportScreen} // Puedes cambiar esto a cualquier componente que quieras, no se renderizará
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault(); // Esto previene que la navegación se realice
            logout({ navigation });
          },
        })}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontFamily: "FredokaBold" }}>Salir</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
