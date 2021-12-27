import { View, TouchableOpacity, Text } from "react-native";
import styler from './styler'

type Props = {
    setIsVisible: Function,
}

export function ShowMoreItens({setIsVisible}: Props){
    return(
        <TouchableOpacity 
            style={styler.button}
            onPress={()=>setIsVisible(true)}>
            <Text style={styler.text}>
                Visualizar todo o histórico
            </Text>
        </TouchableOpacity>
    )
}