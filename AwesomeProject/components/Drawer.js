import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Home">
      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Contact" component={Contact} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
