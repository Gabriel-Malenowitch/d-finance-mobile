import { Alert } from 'react-native'
import {extractPageInterface} from '../Utils/interfaces'

export const Utils = {
    confirmValues: ({id, value, description, dateOfThisExtract}: extractPageInterface)=>{
        const today = new Date().getDate() 
        const thatDay = new Date(String(dateOfThisExtract)).getDate() 
        const thisMonth = new Date().getMonth() 
        const thatMonth = new Date(String(dateOfThisExtract)).getMonth()
        if(
            !isNaN(Number(value)) &&
            String(value) !== '' &&
            today >= thatDay &&
            thisMonth >= thatMonth
        ){
            return true
        }else{
            Alert.alert("Por favor digite dados válidos")
            return false
        }
    },
    
    configValues: ({id, value, description, dateOfThisExtract}: extractPageInterface)=>{

        let date = new Date(String(dateOfThisExtract))
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        dateOfThisExtract = `${day}/${month}/${year}`
        
        return {id, value, description, dateOfThisExtract}
    },

    getTotaly: (extract: extractPageInterface[]): number[]=>{
        let minus = 0
        let plus = 0
        extract.forEach(e=>{
            if(Number(e.value) >=0){
                plus += Number(e.value)
            }else{
                minus -= Number(e.value)
            }
        })
        return [plus, minus]
    }
}
