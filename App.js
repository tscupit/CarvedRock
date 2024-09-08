import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Careers from "./views/Careers.js";
import Contact from "./views/Contact.js";
import Trail from "./views/Trail.js";
import TrailDetail from "./views/TrailDetail.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={gestureHandlerRootHOC(Home)} />
        <Stack.Screen name="About" component={gestureHandlerRootHOC(About)} />
        <Stack.Screen
          name="Careers"
          component={gestureHandlerRootHOC(Careers)}
        />
        <Stack.Screen
          name="Contact"
          component={gestureHandlerRootHOC(Contact)}
        />
        <Stack.Screen name="Trail" component={gestureHandlerRootHOC(Trail)} />
        <Stack.Screen
          name="TrailDetail"
          component={gestureHandlerRootHOC(TrailDetail)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
