import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Careers from "./views/Careers.js";
import Contact from "./views/Contact.js";
import Trail from "./views/Trail.js";
import TrailDetail from "./views/TrailDetail.js";
import Store from "./views/Store.js";
import BootShop from "./views/BootShop.js";
import Boot from "./views/Boot.js";

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
        <Stack.Screen
          name="Store"
          component={gestureHandlerRootHOC(Store)}
        ></Stack.Screen>
        <Stack.Screen
          name="BootShop"
          component={gestureHandlerRootHOC(BootShop)}
        ></Stack.Screen>
        <Stack.Screen
          name="Boot"
          component={gestureHandlerRootHOC(Boot)}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
