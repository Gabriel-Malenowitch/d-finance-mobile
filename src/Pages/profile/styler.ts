import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { 
    stylerColorsMain as mr,
    stylerMainFonts as fonts
} from "../../Utils/routes";

const styler = StyleSheet.create({
    container: {
        backgroundColor: mr.bgColorHomePage,
        height: '100%'
    },
    main: {
        margin: 20,
        display: "flex",
        height: '100%',
    },
    headerInsideMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontFamily: fonts.mediumInter,
        fontSize: 16,
    },
    line: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        borderColor: mr.divisorLineColor,
        margin: 10,
    },
    description:{
        margin: 20,
        fontFamily: fonts.mediumInter
    }
})

export default styler
