import { StyleSheet } from "react-native";
import { stylerColorsMain as mr } from "../../Utils/routes";

const styler = StyleSheet.create({
    container:{
        minHeight: '100%',
        backgroundColor: mr.bgColorHomePage,
    },
    main:{
        backgroundColor: mr.bgColorHomePage,
        alignItems: "center",

        height: '100%',
    },
    header:{
        backgroundColor: mr.backgroundGreenHomePage,
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