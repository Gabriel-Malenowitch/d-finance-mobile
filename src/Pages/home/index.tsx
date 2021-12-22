import { useState } from "react";
import { View, ScrollView, Button } from "react-native";


import styler from "./styler";
import { stylerColorsMain } from "../../Utils/routes";
import { assets } from "../../Utils/routes";

import {MainValues} from '../../components/mainValues'
import {MyModal} from '../../components/modal'
import {ExtractHomePage} from '../../components/extractHomePage'


export function Home(){
    const [valuesMain, setValuesMain] = useState([9,5])
    const [openedModal, setOpenedModal] = useState(false)
    const [extractHomePage, setExtractHomePage] = useState([["AAA", "45.34"]])
    
    extractHomePage.push(["AAA", "45.34"])
    extractHomePage.push(["AAA", "45.34"])
    extractHomePage.push(["AAA", "45.34"])
    extractHomePage.push(["AAA", "45.34"])

    return(
        <ScrollView style={styler.container}>
            
            <View style={styler.header}>
                <assets.Logo style={styler.logo} height={40} width={300}/>
            </View>

            <View style={styler.main}>               

                <MainValues valuesMainTag={valuesMain}/>
                
                <Button
                    onPress={()=>setOpenedModal(!openedModal)}
                    title="Efetuar Nova Anotação"
                    color={stylerColorsMain.buttonColor}
                    accessibilityLabel="Efetuar nova anotação"
                    />
                
                <ExtractHomePage data={extractHomePage}/>

            </View>

            <MyModal isVisible={openedModal} defIsVisible={setOpenedModal}/>
            
        </ScrollView>
    )
}