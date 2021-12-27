import { View, Image, TouchableOpacity } from "react-native";

//import { Profile } from "../../Pages/profile";

import {UserData} from '../../Utils/routes'

import { stylerGlobal } from "../../global/stylerGlobal";
import styler from './styler'

export function AvatarComponent({navigation, onPress}: any){
    return(
        <TouchableOpacity onPress={onPress}>
            <Image style={stylerGlobal.avatarUser} source={{uri: UserData.avatar}}></Image>
        </TouchableOpacity>
    )
}

