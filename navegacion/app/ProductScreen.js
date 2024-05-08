import { Text, SafeAreaView, StyleSheet,View,Button } from 'react-native';

export const Product=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Productos Screen</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
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
  }
});