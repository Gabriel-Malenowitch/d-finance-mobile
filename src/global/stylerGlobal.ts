import { StyleSheet } from "react-native";
import { stylerColorsMain } from "../Utils/routes";

export const stylerGlobal = StyleSheet.create({
    avatarUser: {
        width: 60,
        height: 60,
        borderRadius: 200,
        borderColor: stylerColorsMain.buttonColor,
        borderWidth: 5,
        margin: 10,
    }
})