import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { 
    View, 
    ScrollView, 
    Button,
    Image, } from "react-native";

import styler from "./styler";
import { stylerColorsMain } from "../../Utils/routes";
import { assets } from "../../Utils/routes";

import {MainValues} from '../../components/mainValues'
import {MyModal} from '../../components/modal'
import {ExtractHomePage} from '../../components/extractHomePage'
import { AvatarComponent } from "../../components/avatarComponent";

import { extractPageInterface } from '../../Utils/interfaces'
import { Utils } from "../../Tools/Utils";


let extract: extractPageInterface[] = []
let extractHomePage: any[][] = extract.map(e=>[e.dateOfThisExtract.toString(), e.value])

export function Home({navigation}: any){
    const [valuesMain, setValuesMain] = useState([0,0])
    const [openedModal, setOpenedModal] = useState(false)
    const [extractValues, setExtractValues]: any[] = useState(extractHomePage)
    
    //Só para testes==========
    // for (let index = 0; index < 1; index++) {
    // }
    //========================

    
    function setValuesNewTransaction(value: number, description: string, date: string){
        let extractBase: extractPageInterface = {
            id: extract.length+1,
            value: value,
            beautifullValue: value,
            description: description,
            dateOfThisExtract: date,
        }
        if(Utils.confirmValues(extractBase)){
            
            //Set valores
            const [plus, minus] = Utils.getTotaly([...extract, extractBase])
            setValuesMain([plus, minus])
            
            //Configurar valores
            extractBase = Utils.configValues(extractBase)
            extract.push(extractBase)
            
            //Set extrato
            extractHomePage = extract.map(e=>[e.dateOfThisExtract.toString(), `R$${e.beautifullValue}`, "remove"])
            setExtractValues(extractHomePage)
            
        }
        
    }

    function removeValuesNewTransaction(id: number){

        extract.splice(id, 1)
    
        //Set valores
        const [plus, minus] = Utils.getTotaly(extract)
        setValuesMain([plus, minus])
        
        //Set extrato
        extractHomePage = extract.map(e=>[e.dateOfThisExtract.toString(), `R$${e.beautifullValue}`, "remove"])
        setExtractValues(extractHomePage)
        
    }
    
    return(
        <ScrollView style={styler.container}>
            
            <View style={styler.header}>

                <assets.Logo 
                    style={styler.logo}
                    height={40}
                    width={300}/>

                <AvatarComponent 
                    onPress={()=>navigation.navigate('ProfilePage')} 
                    navigation={navigation}/>

            </View>

            <View style={styler.main}>               

                <MainValues 
                    valuesMainTag={valuesMain}/>
                
                <Button
                    onPress={()=>{
                        // for (let index = 0; index < 10; index++) {
                        //     setValuesNewTransaction(50, "Tem nada não", String(new Date))
                        // }
                        setOpenedModal(!openedModal)
                    }}
                    title="Efetuar Nova Anotação"
                    color={stylerColorsMain.buttonColor}
                    accessibilityLabel="Efetuar nova anotação"
                    />
                
                <ExtractHomePage 
                    removeFunction={removeValuesNewTransaction}
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