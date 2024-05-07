import { Text, SafeAreaView, StyleSheet,Button,Alert,View,TextInput,FlatList,ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import {useState,useRef} from 'react';
let productos = [
    {
        nombre: "Doritos",
        categoria: "Snacks",
        precioCompra: 1.50,
        precioVenta: 2.50,
        id: 100
    },
    {
        nombre: "Coca Cola",
        categoria: "Bebidas",
        precioCompra: 0.80,
        precioVenta: 1.50,
        id: 101
    },
    {
        nombre: "Papas Fritas",
        categoria: "Snacks",
        precioCompra: 1.20,
        precioVenta: 2.00,
        id: 102
    },
    {
        nombre: "Chocolate",
        categoria: "Snacks",
        precioCompra: 0.90,
        precioVenta: 1.80,
        id: 103
    },
    {
        nombre: "Agua Mineral",
        categoria: "Bebidas",
        precioCompra: 0.60,
        precioVenta: 1.20,
        id: 104
    },
    {
        nombre: "Galletas",
        categoria: "Snacks",
        precioCompra: 1.00,
        precioVenta: 1.70,
        id: 105
    },
    {
        nombre: "Café",
        categoria: "Bebidas",
        precioCompra: 2.00,
        precioVenta: 3.50,
        id: 106
    },
    {
        nombre: "Helado",
        categoria: "Postres",
        precioCompra: 1.80,
        precioVenta: 3.00,
        id: 107
    }
];


let calcularPrecioVenta=(text)=>{
  setTxtPrecioCompra(text)
  let precio=(parseFloat(text)*1.20).toFixed(2)
  setTxtPrecioVenta(precio)
}

let calcularPrecio=()=>{
 
  let precio=(parseFloat(precioCompra)*1.20).toFixed(2)
  return precio
}

export default function App() {
    let [txtId,setTxtId]=useState()
    let [txtNombre,setTxtNombre]=useState("")
    let [txtCategoria,setTxtCategoria]=useState()
    let [txtPrecioCompra,setTxtPrecioCompra]=useState()
    let [txtPrecioVenta,setTxtPrecioVenta]=useState()
    let [esNuevo,setEsNuevo]=useState(false)
    let [indiceSeleccionado,setIndiceSeleccionado]=useState(-1)
    let [numeroElemmeto,setNumeroElemmeto]=useState(productos.length)
     let [esEditable,setEsEditable]=useState(false)

     const refTxtId = useRef(null);
  const refTxtNombre = useRef(null);
  const refTxtCategoria = useRef(null);
  const refTxtPrecioCompra = useRef(null);
  const refTxtPrecioVenta = useRef(null);

   const focusNextInput = (ref) => {
    ref.current.focus();
  };
let FormProducto=()=>{
  return( 
    
      <ScrollView >
        <TextInput style={styles.cajaTexto} placeholder="codigo" value={txtId} keyboardType="numeric" onChangeText={setTxtId} editable={!esNuevo} ref={refTxtId}  onSubmitEditing={() => focusNextInput(refTxtNombre)} /> 
        <TextInput style={styles.cajaTexto}  placeholder="nombre" value={txtNombre} onChangeText={setTxtNombre} ref={refTxtNombre}   onSubmitEditing={() => focusNextInput(refTxtCategoria)}/>
        <TextInput style={styles.cajaTexto} placeholder="categoria" value={txtCategoria} onChangeText={setTxtCategoria} ref={refTxtCategoria}  onSubmitEditing={() => focusNextInput(refTxtPrecioCompra)} />
        <TextInput style={styles.cajaTexto} placeholder="valor compra" value={txtPrecioCompra} onChangeText={handleInputChange } keyboardType="numeric"   ref={refTxtPrecioCompra}  onSubmitEditing={() => focusNextInput(refTxtPrecioVenta)}/>
        <TextInput style={styles.cajaTexto} placeholder="valor venta" value={txtPrecioVenta} onChangeText={setTxtPrecioVenta} editable={esEditable} ref={refTxtPrecioVenta} />
        <View  style={styles.formFooter}>
           <Button  title="Guardar" onPress={guardar} />
            <Button title="Nuevo" onPress={limpiar} />
        </View>
      </ScrollView >
      
  );
}

let hayCamposVacios=()=>{
   if (!txtId || !txtNombre || !txtCategoria || !txtPrecioCompra || !txtPrecioVenta) {
      Alert.alert('Error', 'Todos los campos son requeridos');
      return false;
    }
    return true;
}
 const handleInputChange = (text) => {
    
    const numero = parseFloat(text);
    if (!isNaN(numero)) {
      
      setTxtPrecioCompra(text);
      setTxtPrecioVenta((numero * 1.20).toFixed(2));
    } 
  };

let ItemProducto=(props)=>{
let {producto,indice}=props;
  return (
<View style={styles.card}>
             <View style={styles.cardHead}>
          <Text style={styles.textoBody}>{producto.id} </Text>
            </View> 
            <View style={styles.cardBody}>
            <View>
          <Text style={styles.textoBody}>{producto.nombre} </Text>
          <Text style={styles.textoBody}> {producto.categoria} </Text>
          </View>
          <View style={styles.cardBodyPrecio}>
          <Text style={styles.textoBodyPrecio} >{producto.precioVenta} </Text>
          </View>
            </View>
            <View style={styles.cardFooter}>
            <Button style={styles.botonEliminar} color="red" title="X" onPress={()=>{
              setIndiceSeleccionado(indice)
              productos.splice(indice,1)
              setNumeroElemmeto(productos.length)
            }} />
            <Button title="A" color="green" onPress={()=>{
              setEsNuevo(false)
              setEsEditable(true)
              setTxtId(producto.id+"")
              setTxtNombre(producto.nombre)
              setTxtCategoria(producto.categoria)
              setTxtPrecioCompra(producto.precioCompra+"")
             setTxtPrecioVenta(producto.precioVenta+"")
              setIndiceSeleccionado(indice)
               setEsEditable(false)
              setEsNuevo(true)
            }} />
            </View>
        </View>
  );
}

const limpiar=()=>{
  setTxtId(null)
  setTxtNombre(null)
  setTxtCategoria(null)
  setTxtPrecioCompra(null)
  setTxtPrecioVenta(null)
   setEsNuevo(false)
   setIndiceSeleccionado(-1)
   setNumeroElemmeto(productos.length)
}

const guardar=()=>{
  
  if(!esNuevo && hayCamposVacios()){
    let producto={nombre: txtNombre,categoria: txtCategoria, precioCompra: txtPrecioCompra ,precioVenta: txtPrecioVenta, id: txtId}
     productos.push(producto);
  }else if(esNuevo && hayCamposVacios()){
    productos[indiceSeleccionado].nombre=txtNombre
    productos[indiceSeleccionado].categoria=txtCategoria
    productos[indiceSeleccionado].precioVenta=txtPrecioVenta
     productos[indiceSeleccionado].precioCompra=txtPrecioCompra
  }
 limpiar()
}
  return (
    <View style={styles.container}>
   <View style={styles.titulo}>
      <Text style={styles.tituloPrincipal}>Productos </Text>
   </View>
   <FormProducto />
   <View style={styles.contador}>
    <Text >Productos: {numeroElemmeto} </Text>
    </View>
    <FlatList data={productos}  
    renderItem={(elemento)=>{
      return <ItemProducto indice={elemento.index} producto={elemento.item} />
    }}
    keyExtractor={(producto)=>{
      return producto.id;
    }}
    />
    
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"flex-start",
    padding: 8
  },
 titulo:{
   flexDirection: "row",
   justifyContent:"center"
  },
   card:{
   flexDirection: "row",
   justifyContent:"space-between",
   alignItems:"stretch",
   borderWidth:1,
   marginTop: 15,
   borderRadius: 4,
   marginHorizontal: 10,
   backgroundColor:"#e7f6ff",
   borderColor:"#4fd7f5"
  },
   cardHead:{
     flex:1,
   flexDirection: "column",
   justifyContent:"center",
   paddingLeft:5,
    color: 'white'
  },
  cardBody:{
     flex:5,
    flexDirection:"row",
   justifyContent:"space-between"
  },
  cardFooter:{
     flex:2,
    flexDirection:"row",
   justifyContent:"space-around",
    alignItems:"center"
  },
  botonEliminar:{
    backgroundColor:"red",
    borderRadius:4
  },
  textoBody:{
    padding: 5,
    color: 'black',
    fontFamily: "monospace"

  },
  textoBodyPrecio:{
    padding: 5,
    color: 'black',
     fontSize: 17, 
     fontFamily: "monospace"

  },
  cardBodyPrecio:{
    flexDirection:"column",
    justifyContent:"center"
   

  },
   tituloPrincipal:{
    color: 'black',
    fontFamily: "sans-serif",
     fontSize: 20
  },
  cajaTexto:{
    borderColor:"#3981a2",
    borderWidth:1,
    borderRadius:5,
    backgroundColor:"white",
     height:30,
     marginBottom: 5
  },
  formFooter:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  contador:{
    flexDirection:"row",
    justifyContent:"flex-end"
  }

});
