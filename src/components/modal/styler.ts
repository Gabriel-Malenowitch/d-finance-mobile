import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { stylerColorsMain, stylerMainFonts } from "../../Utils/routes";

const styler = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: stylerColorsMain.backgroundGreenHomePage,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontFamily: stylerMainFonts.boldInter,
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        backgroundColor: stylerColorsMain.bgColorHomePage,
        color: 'black',
        borderRadius: 5,

        width: '80%',
        height: 40,
        margin: 14,
        padding: 10,

    },
    inputContainer: {
        alignItems: "center",
        width: '80%',
        margin: 14,
    },
    calendarText:{
        color: 'white',
        fontFamily: stylerMainFonts.boldInter,
    },
})

export default styler 