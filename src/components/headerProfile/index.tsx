import { 
    View, 
    Text, 
    TouchableOpacity,
    EventEmitter
 } from "react-native";

import { RoutesPage } from "../../Pages/routesPage";

import styler from './styler'

import { 
    someInformations as infos
 } from "../../Utils/routes";

export function HeaderProfile({navigation}: any){
    return(
        <View style={styler.header}>
            <TouchableOpacity onPress={()=>navigation.navigate("HomePage")}>
                <Text style={styler.backArrowHeader}>
                    {infos.backPageText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
