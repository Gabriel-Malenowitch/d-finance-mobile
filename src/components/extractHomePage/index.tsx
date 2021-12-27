import { View, Text, TouchableOpacity } from "react-native";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component'

import { assets } from "../../Utils/routes";

import styler from './styler'

type Props = {
    data: string[][],
    removeFunction: Function,
}

const headerRow: string[] = ["Data da transferência", "Valor\ntransferido", "Apagar"]

export function ExtractHomePage({data, removeFunction}: Props){
    //<Rows data={data} textStyle={styler.tableTextStyle}/>

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


                {
                    data.map((e, id)=>{
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
                    })
                }

            </Table>

        </View>
    )
}


