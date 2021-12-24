import { View, Text } from "react-native";

import styler from './styler'
import {assets, stylerColorsMain} from '../../Utils/routes'

import {Utils} from '../../Tools/Utils'

type Props = {
    valuesMainTag: number[]
}

export function MainValues({valuesMainTag}: Props){

    //valuesMainTag = Utils.formateNumbers(valuesMainTag)
    const newValuesMainTag = Utils.formateNumbers(valuesMainTag)

    function totalColor(valuesMain: number[]): string{
        return valuesMain[0]-valuesMain[1] >= 0 ? stylerColorsMain.greenMoney : stylerColorsMain.redMoney
    }


    return(
        <View style={styler.outputContainer}>

                    <View style={styler.outputContainer1}>
                        <View style={styler.outputContainer2}>
                            <Text style={styler.outputContainerTitle}>Entradas:</Text>
                            <Text style={styler.outputContainerMoney}>+ R$ {newValuesMainTag[0]}</Text>
                        </View>

                        <assets.Plus style={styler.outputContainerLogo} height={40} width={40}/>
                    </View>
                    <View style={styler.outputContainer1}>
                        <View style={styler.outputContainer2}>
                            <Text style={styler.outputContainerTitle}>Saídas:</Text>
                            <Text style={styler.outputContainerMoney}>- R$ {newValuesMainTag[1]}</Text>
                        </View>

                        <assets.Minus style={styler.outputContainerLogo} height={40} width={40}/>
                    </View>
                    <View style={{...styler.outputContainer1, backgroundColor: totalColor(valuesMainTag)}}>
                        <View style={styler.outputContainer2}>
                            <Text style={{...styler.outputContainerTitle, color: 'white'}}>Total:</Text>
                            <Text style={{...styler.outputContainerMoney, color: 'white'}}>
                                {(valuesMainTag[0]-valuesMainTag[1]) >= 0 ? '+ ' : '- '}
                                R$ {newValuesMainTag[2]}
                            </Text>
                        </View>

                        <assets.Total style={styler.outputContainerLogo} height={40} width={40}/>
                    </View>

                </View>
    )
}