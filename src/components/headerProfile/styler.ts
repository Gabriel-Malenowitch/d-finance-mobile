import { StyleSheet } from "react-native";
import { 
    stylerColorsMain as mr,
    stylerMainFonts as fonts
} from "../../Utils/routes";

const styler = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'transparent',
        marginTop: 30,
        marginLeft: 20,
    },
    backArrowHeader:{
        fontSize: 40,
        fontFamily: fonts.boldInter,
        color: mr.fontColor, 
    },
})

export default styler