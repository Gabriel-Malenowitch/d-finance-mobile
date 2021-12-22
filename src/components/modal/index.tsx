import { 
    View, 
    Text, 
    Modal, 
    Button,
    TextInput
} from "react-native";

import CalendarPicker from 'react-native-calendar-picker'

import styler from './styler'

function setDate(n: Object) {
    console.log(n)
}

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
                    <Text style={styler.text}>Faça aqui sua descrição</Text>
                    <TextInput placeholder="Descrição" style={styler.input}/>
                </View>

                <View style={styler.inputContainer}>
                    <Text style={{...styler.text, marginBottom: 20}}>Data da sua transação</Text>
                    <CalendarPicker 
                        onDateChange={setDate}
                        textStyle={styler.calendarText}
                        previousTitle="<"
                        nextTitle=">"
                        startFromMonday={false}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                    />
                </View>                

                <Button
                    onPress={()=>defIsVisible(false)}
                    title="Concluido"
                    color="#37b148"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>


        </Modal>
    )
}

