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

    function DeleteOption(id: number){   
        return(
            <TouchableOpacity onPress={()=>removeFunction(id)}>
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
                            {data.map((e, id)=>{
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
            </ScrollView>
        </Modal>
    )
}


