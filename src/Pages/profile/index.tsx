import { View, Text } from "react-native";

import { HeaderProfile } from "../../components/headerProfile";
import { AvatarComponent } from "../../components/avatarComponent";

import { UserData } from "../../Utils/routes";

import styler from './styler'

export function Profile({navigation}: any){
    return(
        <View style={styler.container}>

            <HeaderProfile navigation={navigation}/>

            <View style={styler.main}>
                
                <View style={styler.headerInsideMain}>
                    <AvatarComponent/>
                    <Text style={styler.userName}>
                        {UserData.name}
                    </Text>
                </View>

                <View style={styler.line}></View>

                <Text style={styler.description}>
                    {UserData.description}
                </Text>

            </View>

        </View>
    )
}

