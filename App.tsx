import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import AppLoading from 'expo-app-loading';

import {Home} from './src/Pages/home'

import { stylerColorsMain as mr } from './src/Utils/routes';

import {
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_700Bold, 
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter'

export default function App() {

  const [ fontLoaded ] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_700Bold, 
    Inter_900Black,
  })

  if(!fontLoaded){
    return <AppLoading/>
  }

  //<Text style={{fontFamily: 'Inter_900Black'}}>Hello, world!</Text>
  return (
    <View style={{backgroundColor: mr.bgColorHomePage}}>
      <Home/>
      <StatusBar style='light' />
    </View>
  );
}

