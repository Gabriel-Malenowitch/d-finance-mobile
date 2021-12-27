import { Profile } from "../../Pages/profile";
import { Home } from "../home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styler from './styler'

const optinos = {
    headerShown: false,
}
const Tab = createNativeStackNavigator()
export function RoutesPage(){
    return(
        <NavigationContainer>

            <Tab.Navigator>
                <Tab.Screen options={optinos} name="HomePage" component={Home} />
                <Tab.Screen options={optinos} name="ProfilePage" component={Profile} />
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}
