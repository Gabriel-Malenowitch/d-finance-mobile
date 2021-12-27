import { StyleSheet } from "react-native";

import { stylerColorsMain as mr } from "../../Utils/routes";

const styler = StyleSheet.create({
    containerMain: {
        minHeight: '100%',
    },
    container: {
        width: 300,
        height: 'auto',
        margin: 'auto',

        flex: 1,

        borderColor: mr.fontColor,
        
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
    }
})

export default styler