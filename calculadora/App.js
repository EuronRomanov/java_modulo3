import { Text, SafeAreaView, StyleSheet,Button,Alert,View,TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import {useState} from 'react';

export default function App() {
    
      const [valor1,setValor1]=useState("")
       const [valor2,setValor2]=useState("")
       const [resultado,setResultado]=useState(0)

     const sumar=()=>{
       let valorCaja1=parseInt(valor1);
      let valorCaja2=parseInt(valor2);
       setResultado(valorCaja1+valorCaja2);
     }  
     const restar=()=>{
       let valorCaja1=parseInt(valor1);
      let valorCaja2=parseInt(valor2);
       setResultado(valorCaja1-valorCaja2);
     } 
     const multiplicar=()=>{
       let valorCaja1=parseInt(valor1);
      let valorCaja2=parseInt(valor2);
       setResultado(valorCaja1*valorCaja2);
     } 
  const dividir=()=>{
       let valorCaja1=parseInt(valor1);
      let valorCaja2=parseInt(valor2);
       setResultado(valorCaja1/valorCaja2);
     }


  return (
    <View style={styles.container}>
     <StatusBar style="auto"/>
<Text>Resultado: {resultado} </Text>
<View style={{ marginTop: 20 }} />
     <TextInput value={valor1}  style={styles.cajaTexto}  onChangeText={(text)=>{setValor1(text);}}/>
     <View style={{ marginTop: 10 }} />
     <TextInput value={valor2}  style={styles.cajaTexto}  onChangeText={(text)=>{setValor2(text);}}/>
      
     <View style={{ marginTop: 15 }} />
     <Button title="SUMAR" 
    onPress={sumar}
    />
     <View style={{ marginTop: 15 }} />
    <Button title="RESTAR"
    onPress={restar }
    />
     <View style={{ marginTop: 15 }} />
    <Button title="MULTIPLICAR"
    onPress={multiplicar}
    />
    <View style={{ marginTop: 15 }} />
    <Button title="DIVIDIR"
    onPress={dividir }
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
