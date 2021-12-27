import { StyleSheet } from "react-native";

import { stylerColorsMain as mr } from "../../Utils/routes";

const styler = StyleSheet.create({
    containerMain: {
        minHeight: '100%',
        
    },
    container: {
        width: "100%",
        height: 'auto',
        margin: 'auto',

        flex: 1,
        borderColor: mr.fontColor,

        alignItems: "center",
        justifyContent: "center",
        
    },
    scrollView:{
        backgroundColor: mr.bgColorHomePage,
        borderColor: mr.divisorLineColor,
        borderWidth: 1,
        borderRadius: 20,
    },
    tableHeaderStyle: {
        height: 80,
    },
    tableTextStyle:{
        margin: 6,
        textAlign: "center"
    },
    wrapper:{
        justifyContent: "center",
        flexDirection: "row",
    },
    cell: {
        alignItems: 'center',
        width: 100,
    },
    reverseFlex:{
        flexDirection: 'column-reverse'
    }
})

export default styler