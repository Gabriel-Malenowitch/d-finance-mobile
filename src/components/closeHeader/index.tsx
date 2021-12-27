import { View, TouchableOpacity, Text } from "react-native";
import styler from './styler'

type Props = {
    setClose: Function,
}

export function CloseHeader({setClose}: Props){
    return(
        <View style={styler.container}>
            <TouchableOpacity
                onPress={()=>setClose(false)}>
                <Text style={styler.text}>X</Text>
            </TouchableOpacity>
        </View>
    )
}