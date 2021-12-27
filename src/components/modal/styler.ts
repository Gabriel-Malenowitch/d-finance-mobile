import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { stylerColorsMain, stylerMainFonts } from "../../Utils/routes";

const styler = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: stylerColorsMain.bgColorHomePage,

        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        
        justifyContent: 'center',
        alignItems: 'center',

        paddingBottom: 30,
        paddingTop: 10,
    },
    text: {
        color: stylerColorsMain.fontColor,
        fontFamily: stylerMainFonts.boldInter,
        fontSize: 14,
        textAlign: 'center',
    },
    input: {
        backgroundColor: stylerColorsMain.bgColorHomePage,
        color: stylerColorsMain.fontColor,
        borderRadius: 5,
        borderColor: stylerColorsMain.fontColor, 
        borderWidth: 1,
        //borderWidth: StyleSheet.hairlineWidth,

        width: '80%',
        height: 40,
        margin: 14,
        padding: 10,

    },
    inputContainer: {
        alignItems: "center",
        width: '80%',
        margin: 8,
    },
    calendarText:{
        color: stylerColorsMain.fontColor,
        fontFamily: stylerMainFonts.boldInter,
    },
})

export default styler 