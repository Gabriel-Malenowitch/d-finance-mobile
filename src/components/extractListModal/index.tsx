import { useState } from "react";
import { 
    View, Text, Modal,
    TouchableOpacity, 
    ScrollView, 
 } from "react-native";

import {
    Table, Row, 
    TableWrapper, Cell
} from 'react-native-table-component'

import { CloseHeader } from "../closeHeader";

import { Utils } from "../../Tools/Utils";

import { assets } from "../../Utils/routes";

import styler from './styler'

type Props = {
    data: string[][],
    removeFunction: Function,
    setVisible: Function,
    visible: boolean,
}

const headerRow: string[] = ["Data da transferência", "Valor\ntransferido", "Apagar"]

export function ExtractListModal({data, removeFunction, visible, setVisible}: Props){

    const [pageKey, setPageKey] = useState(0)

    function DeleteOption(id: number){   
        return(
            <TouchableOpacity onPress={()=>{
                removeFunction(id)
                console.log(id)
                console.log(data.length)
            }}>
                <assets.Remove height={30} width={30}/>
            </TouchableOpacity>
        )
    
    }

    return(
        <Modal 
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={()=>setVisible(false)}>         

            <ScrollView style={styler.scrollView}>
                <CloseHeader setClose={setVisible}/>
                
                <View style={styler.container}>
                    <Table>

                        <Row 
                            data={headerRow} 
                            style={styler.tableHeaderStyle} 
                            textStyle={styler.tableTextStyle}/>


                        <View style={styler.reverseFlex}>
                            {Utils.createList(data.length-pageKey>15 ? 15 : data.length-pageKey).map((dataFromMap, reverseId)=>{
                                const id = data.length-reverseId-1

                                //console.log("==============")
                                //console.log("size:   ", data.length)
                                //console.log("pageKey:", pageKey)
                                //console.log("id:     ", id)
                                //console.log("data:   ", data.toString())
                                //console.log("==============")
                                
                                const e = data[reverseId+pageKey]
                                return(
                                    <TableWrapper key={id} style={styler.wrapper}>
                                        {
                                            e.map((ee: string, key: number)=>{
                                                return(
                                                    <Cell 
                                                        style={styler.cell}
                                                        key={key}
                                                        data={
                                                            key === e.length-1?
                                                            DeleteOption(id):
                                                            ee
                                                        }    
                                                    />
                                                )
                                            })
                                        }
                                    </TableWrapper>
                            )})}
                        </View>
                    </Table>             
                </View>

                <View style={styler.footer}>
                    <TouchableOpacity onPress={()=>pageKey !== 0 && setPageKey(pageKey-15)}>
                        <Text style={styler.footerButton}>
                            Anterior
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setPageKey(pageKey+15)}>
                        <Text style={styler.footerButton}>
                            Próximo
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </Modal>
    )
}


