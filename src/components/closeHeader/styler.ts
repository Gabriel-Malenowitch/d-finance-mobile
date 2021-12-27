import { StyleSheet } from "react-native";
import { 
    stylerMainFonts as fonts,
    stylerColorsMain as mr
} from "../../Utils/routes";

const styler = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-end',
    },
    text: {
        margin: 20,
        marginBottom: 10,
        fontFamily: fonts.boldInter,
        fontSize: 20,
        color: mr.fontColor,
    }
})

export default styler