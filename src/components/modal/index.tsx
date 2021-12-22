import { 
    View, 
    Text, 
    Modal, 
    Button,
    TextInput
} from "react-native";

import styler from './styler'

type Props = {
    isVisible: boolean,
    defIsVisible: Function
}
export function MyModal({isVisible, defIsVisible}: Props){
    return(
        <Modal
            transparent={true}
            animationType="slide"
            visible={isVisible}
            onRequestClose={()=>defIsVisible(false)}   
        >

            <View style={styler.container}>

                <View style={styler.inputContainer}>
                    <Text style={styler.text}>Para valores negativos utilize "-" antes do valor.</Text> 
                    <TextInput keyboardType="numeric" placeholder="Valor" style={styler.input}/>
                </View>

                <View style={styler.inputContainer}>
                    <Text style={styler.text}>Faça aqui sua descrição para um melhor controle de seu dinheiro ^^</Text>
                    <TextInput placeholder="Descrição" style={styler.input}/>
                </View>

                <View style={styler.inputContainer}>
                    <Text style={styler.text}>Data da transação</Text>
                    <TextInput keyboardType="numeric" placeholder="Data da transação" style={styler.input}/>
                </View>

                <Button
                    onPress={()=>defIsVisible(false)}
                    title="Concluido"
                    color="#37b148"
                    accessibilityLabel="Learn more about this purple button"/>
            </View>


        </Modal>
    )
}

