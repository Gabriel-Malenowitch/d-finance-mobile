import { StyleSheet } from "react-native";

const styler = StyleSheet.create({
    containerMain: {
        minHeight: '100%',
    },
    container: {
        width: 300,
        height: 'auto',
        margin: 'auto',

        flex: 1,

        borderColor: 'black',
        
    },
    tableHeaderStyle: {
        height: 40,
    },
    tableTextStyle:{
        margin: 6,
        textAlign: "center"
    }
})

export default styler