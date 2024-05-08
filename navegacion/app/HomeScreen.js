import { Text, SafeAreaView, StyleSheet,View,Button } from 'react-native';

export const Home=({navigation})=> {
  return (
    <View style={styles.container}>
     <View style={styles.botones}>
      <Text>Home Screen</Text>
        </View>
      <View style={styles.botones}>
      <Button
      style={styles.botonDerecha}
        title="Contacto"
        onPress={() => navigation.navigate('Contact')}
      />
      <Button
        title="Priducto"
        onPress={() => navigation.navigate('Product')}
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  botones:{
    flexDirection:"row",
     justifyContent: "space-around"
  },
  botonDerecha:{
   marginHorizontal:20
  }
});