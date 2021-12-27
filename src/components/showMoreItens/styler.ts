import { Inter_100Thin, Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { 
    stylerColorsMain as mr,
    stylerMainFonts as font,
 } from "../../Utils/routes";


const styler = StyleSheet.create({
    button: {
        backgroundColor: mr.buttonColor,
        padding: 2,
        borderRadius: 5,
        margin: 20,
        marginBottom: 50,
    },
    text: {
        fontSize: 14,
        fontFamily: font.mediumInter,
        color: 'white',
        textAlign: 'center'
    }
})

export default styler