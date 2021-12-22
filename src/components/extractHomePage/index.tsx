import { View, Text } from "react-native";
import {Table, Row, Rows} from 'react-native-table-component'

import styler from './styler'

type Props = {
    data: any[],
}

const headerRow: string[] = ["Data da transação", "Valor transacionado"]

export function ExtractHomePage({data}: Props){
    return(
        <View style={styler.container}>
            <Table>
                <Row data={headerRow} style={styler.tableHeaderStyle} textStyle={styler.tableTextStyle}/>
                <Rows data={data} textStyle={styler.tableTextStyle}/>
            </Table>
        </View>
    )
}
