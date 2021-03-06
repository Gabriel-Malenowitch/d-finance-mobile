import { StyleSheet } from "react-native";
import { stylerColorsMain } from "../Utils/routes";

export const stylerGlobal = StyleSheet.create({
    avatarUser: {
        width: 60,
        height: 60,
        borderRadius: 200,
        borderColor: stylerColorsMain.fontColor,
        borderWidth: 0,
        margin: 10,
    }
})