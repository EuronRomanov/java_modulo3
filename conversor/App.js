import { Text, SafeAreaView, StyleSheet,Button,Alert,View,TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import {useState} from 'react';

export default function App() {
    
      const [dolares,setDolares]=useState("")
      
       const [resultado,setResultado]=useState(0)

     const covertirPesoMexicano=()=>{
       let valorCaja1=parseFloat(dolares);
      
       setResultado(valorCaja1*16.97);
     }  
     const converitPesoColombino=()=>{
       let valorCaja1=parseFloat(dolares);
     
       setResultado(valorCaja1*3884.07);
     } 
     const convertirEuro=()=>{
       let valorCaja1=parseFloat(dolares);
     
       setResultado(valorCaja1*0.93);
     } 
  


  return (
    <View style={styles.container}>
     <StatusBar style="auto"/>
<Text>Resultado: {resultado} </Text>
<View style={{ marginTop: 20 }} />
     <TextInput value={dolares}  style={styles.cajaTexto}  onChangeText={(text)=>{setDolares(text);}}/>
     <View style={{ marginTop: 10 }} />
    
      
     <View style={{ marginTop: 15 }} />
     <Button title="PESOS MEXICANOS" 
    onPress={covertirPesoMexicano}
    />
     <View style={{ marginTop: 15 }} />
    <Button title="PESOS COLOMBIANOS"
    onPress={converitPesoColombino }
    />
     <View style={{ marginTop: 15 }} />
    <Button title="EUROS"
    onPress={convertirEuro}
    />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  cajaTexto:{
    borderColor:"black",
    borderWidth: 1
  }
});
