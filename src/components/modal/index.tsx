import { 
    View, 
    Text, 
    Modal, 
    Button,
    TextInput
} from "react-native";

import CalendarPicker from 'react-native-calendar-picker'

import styler from './styler'






type Props = {
    isVisible: boolean,
    defIsVisible: Function
    setValues: Function
}
export function MyModal({isVisible, defIsVisible, setValues}: Props){

    let moneyValue = ''
    let textValue = ''
    let date = new Date

    function concluded() {
        setValues(
            moneyValue,
            textValue,
            date
            )
        defIsVisible(false)
    }

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
                    <TextInput onChangeText={e=>moneyValue = e} keyboardType="numeric" placeholder="Valor" style={styler.input}/>
                </View>

                <View style={styler.inputContainer}>
                    <Text style={styler.text}>Faça aqui sua descrição</Text>
                    <TextInput onChangeText={e=>textValue = e} placeholder="Descrição" style={styler.input}/>
                </View>

                <View style={styler.inputContainer}>
                    <Text style={{...styler.text, marginBottom: 20}}>Data da sua transação</Text>
                    <CalendarPicker 
                        onDateChange={(e: Date)=>date = e}
                        textStyle={styler.calendarText}
                        previousTitle="<"
                        nextTitle=">"
                        startFromMonday={false}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
                    />
                </View>                

                <Button
                    onPress={concluded}
                    title="Concluido"
                    color="#37b148"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>


        </Modal>
    )
}

