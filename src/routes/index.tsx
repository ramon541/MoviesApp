import { NavigationContainer, TabRouter } from "@react-navigation/native";
import TabRoutes from "./tab.routes";

const Routes = () => {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
}

export default Routes;