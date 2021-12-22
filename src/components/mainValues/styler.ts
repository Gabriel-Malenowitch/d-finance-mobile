import { StyleSheet } from "react-native";
import { stylerMainFonts } from "../../Utils/routes";

const styler = StyleSheet.create({
    outputContainer:{
        alignItems: "center",
        padding: 10,
        marginTop: -120,
    },
    outputContainer1:{
        width: 320,
        height: 170,
        padding: 20,
        margin: 1,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    outputContainer2: {
        height: '100%',
        justifyContent: "space-between"
    },
    outputContainerTitle: {
        margin: 10,
        fontSize: 18
        
    },
    outputContainerMoney: {
      margin: 20,
      fontSize: 30,
      fontFamily: stylerMainFonts.mediumInter,
    },
    outputContainerLogo: {
        height: '100%',
        width: '100%',
        right: 0,
    },
})

export default styler