import { useState } from "react";
import { View, ScrollView, Button } from "react-native";


import styler from "./styler";
import { stylerColorsMain } from "../../Utils/routes";
import { assets } from "../../Utils/routes";

import {MainValues} from '../../components/mainValues'
import {MyModal} from '../../components/modal'
import {ExtractHomePage} from '../../components/extractHomePage'

import { extractPageInterface } from '../../Utils/interfaces'
import { Utils } from "../../Tools/Utils";



let extract: extractPageInterface[] = []
let extractHomePage: any[][] = extract.map(e=>[e.dateOfThisExtract.toString(), e.value])

export function Home(){
    const [valuesMain, setValuesMain] = useState([0,0])
    const [openedModal, setOpenedModal] = useState(false)
    const [extractValues, setExtractValues]: any[] = useState(extractHomePage)
    



    function setValuesNewTransaction(value: number, description: string, date: string){
        let extractBase: extractPageInterface = {
            id: extract.length+1,
            value: value,
            description: description,
            dateOfThisExtract: date,
        }
        if(Utils.confirmValues(extractBase)){
            extractBase = Utils.configValues(extractBase)

            extract.push(extractBase)

            extractHomePage = extract.map(e=>[e.dateOfThisExtract.toString(), e.value])

            setExtractValues(extractHomePage)

            const [plus, minus] = Utils.getTotaly(extract)
            
            setValuesMain([plus, minus])
        }
        
    }

    

    return(
        <ScrollView style={styler.container}>
            
            <View style={styler.header}>

                <assets.Logo 
                    style={styler.logo}
                    height={40}
                    width={300}/>

            </View>

            <View style={styler.main}>               

                <MainValues 
                    valuesMainTag={valuesMain}/>
                
                <Button
                    onPress={()=>setOpenedModal(!openedModal)}
                    title="Efetuar Nova Anotação"
                    color={stylerColorsMain.buttonColor}
                    accessibilityLabel="Efetuar nova anotação"
                    />
                
                <ExtractHomePage 
                    data={extractValues}/>

            </View>

            <MyModal 
                isVisible={openedModal} 
                defIsVisible={setOpenedModal}
                setValues={setValuesNewTransaction}
            />
            
        </ScrollView>
    )
}