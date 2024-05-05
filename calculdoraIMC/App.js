import { Text, SafeAreaView, StyleSheet,Button,Alert,View,TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import {useState} from 'react';

export default function App() {
    
      const [altura,setAltura]=useState("")
      const [peso,setPeso]=useState("")
      const [resultado,setResultado]=useState(0)
      const [mensaje,setMensaje]=useState("")

     const calcular=()=>{
       let estaturaMetros=parseFloat(altura)/100;
       let pessoFloat=parseFloat(peso);
      let imc=pessoFloat/(estaturaMetros*estaturaMetros)
       setResultado(imc)

       if(imc<18.5){
         setMensaje("Peso inferior de lo normal")
       }else if(imc>=18.5 &&imc<25 ){
          setMensaje("Normal")
       }else if(imc>=25.0 &&imc<30 ){
          setMensaje("Normal")
       }else if(imc>30.0  ){
          setMensaje("Obesidad")
       }
     }  
     
  


  return (
    <View style={styles.container}>
  
  <Text>Estatura (en centimetros)</Text>
   <TextInput style={styles.caja} onChangeText={setAltura}/>

   <Text>Peso (en kilogramos)</Text>
   <TextInput style={styles.caja} onChangeText={setPeso}/>

     <Button title="CALCULAR" onPress={calcular}/>
    <Text style={styles.resultado}> Su IMC es {resultado}</Text>
    <Text style={styles.resultado}>  {mensaje}</Text>
    
    
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 caja:{
    borderColor: "black",
    borderWidth:1,
    marginBottom: 10,
    height:30,
    backgroundColor:"white"
  },
  resultado:{
    marginTop:10
  }

});
