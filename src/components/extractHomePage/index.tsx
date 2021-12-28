import { useState } from "react";

import { 
    View,
    TouchableOpacity,
} from "react-native";


import {
    Table, 
    Row, 
    TableWrapper, 
    Cell,
} from 'react-native-table-component'

import { ExtractListModal } from '../../components/extractListModal';
import { ShowMoreItens } from "../showMoreItens";

import { assets } from "../../Utils/routes";

import styler from './styler'
import { Utils } from "../../Tools/Utils";

type Props = {
    data: string[][],
    removeFunction: Function,
}

const contList = [0,1,2,3,4]
const headerRow: string[] = ["Data da transferência", "Valor\ntransferido", "Apagar"]

export function ExtractHomePage({data, removeFunction}: Props){
    //<Rows data={data} textStyle={styler.tableTextStyle}/>
    const [openedExtractListModal, setOpenedExtractListModal] = useState(false)

    

    function DeleteOption(id: number){   
        return(
            <TouchableOpacity onPress={()=>removeFunction(id)}>
                <assets.Remove height={30} width={30}/>
            </TouchableOpacity>
        )
    
    }
    
    return(
        <View style={styler.container}>
            <Table>

                <Row 
                    data={headerRow} 
                    style={styler.tableHeaderStyle} 
                    textStyle={styler.tableTextStyle}/>


                <View style={styler.reverseFlex}>
                    {Utils.getSizeList(data, 5).map((contListIten, reverseId)=>{    
                        const e = data[reverseId]
                        const id = data.length-reverseId-1
                        
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
                        )
                    })}
                </View>

            </Table>

            {data.length >=5 && 
                <ShowMoreItens 
                    setIsVisible={setOpenedExtractListModal}/>
            }

            <ExtractListModal
                data={data}
                removeFunction={removeFunction}
                visible={openedExtractListModal}
                setVisible={setOpenedExtractListModal}/>

        </View>
    )
}


