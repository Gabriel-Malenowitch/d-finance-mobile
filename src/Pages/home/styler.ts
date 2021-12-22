import { StyleSheet } from "react-native";
import { stylerColorsMain } from "../../Utils/routes";

const styler = StyleSheet.create({
    container:{
        minHeight: '100%'
    },
    main:{
        backgroundColor: stylerColorsMain.bgColorHomePage,
        alignItems: "center",

        height: '100%',
    },
    header:{
        backgroundColor: stylerColorsMain.backgroundGreenHomePage,
        height: 250,

        alignItems: "center",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15
    },
    logo: {
        marginTop: 65,
    },

})

export default styler