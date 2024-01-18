import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Films from "../screens/Films";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
 
const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Home}
            />
            <Tab.Screen
                name="films"
                component={Films}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

export default TabRoutes;