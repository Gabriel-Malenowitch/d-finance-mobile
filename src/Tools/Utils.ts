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
    
    configValues: ({id, value, beautifullValue, description, dateOfThisExtract}: extractPageInterface)=>{

        let date = new Date(String(dateOfThisExtract))
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        dateOfThisExtract = `${day}/${month}/${year}`
        beautifullValue = Utils.setPoints(value)
        
        return {id, value, beautifullValue, description, dateOfThisExtract}
    },

    getTotaly: (extract: extractPageInterface[]): number[]=>{
        let minus = 0
        let plus = 0
        extract.forEach(e=>{
            let value = Number(e.value)
            if(value >=0){
                plus += value
            }else{
                minus -= value
            }
        })
        return [plus, minus]
    },

    formateNumbers: (numbers: number[])=>{

        let inputValues = numbers[0]
        let outputValues = numbers[1]
        let finalValues = Number(numbers[0]-numbers[1])

        let newInputValues = Utils.setPoints(inputValues)
        let newOutputValues = Utils.setPoints(outputValues)
        let newFinalValues = Utils.setPoints(finalValues)

        return [newInputValues, newOutputValues, newFinalValues]
    },

    setPoints: (nIten: number|string)=>{
        //Transformar em um número e negativo em um positivo para a formatação
        let iten = Number(nIten)
        let lessThanZero = iten < 0
        lessThanZero && (iten = iten * -1)

        //Retirar os centavos para não formatar errado
        let newStringIten = iten.toFixed(2).replace('.',',')
        let supportListStringIten = newStringIten.split("")
        let centsNewIten: string[] = [] 
        let centsIten = ''
        supportListStringIten.forEach((value, i)=>{
            if(i>supportListStringIten.length-4){
                centsNewIten.push(value)
            }
        })
        centsNewIten.forEach(e=>{centsIten = `${centsIten}${e}`})
        let newIten: string[] = []
        supportListStringIten.forEach((value, i)=>{
            if(i<supportListStringIten.length-3){
                newIten.push(value)
            }
        })

        let count = newIten.length-1; let k = 0
        let newString: string[] = []

        //Adicionar os pontos
        newIten.forEach((iten, i)=>{
            
            newString.push(newIten[i])
            
            if(count%3===0 && count !== 0){
                newString.push(".")
            }
            count--
        })

        ///Lista para string
        let finalString = ''
        newString.forEach(e=>{
            finalString = `${finalString}${e}`
        })

        //Recolocar o sinal de negativo, caso o número seja negativo
        lessThanZero && (finalString = `-${finalString}`)
        
        return `${finalString}${centsIten}`
    },
    
    getSizeList(data: string[][]): number[]{
        function createList(n: number){
            const list: number[] = []
            for(let i = 0; i<n; i++){
                list.push(i)
            }
            return list
        }
        return data.length <= 5 ? createList(data.length) : createList(5)
    }


}
