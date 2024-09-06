import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Careers from "./views/Careers.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Careers" component={Careers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
