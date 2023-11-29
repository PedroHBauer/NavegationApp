import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function Unipar({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.textUnipar}>UNIPAR</Text>
      <View style={styles.buttonProximo}>
        <Button title='INICIAR' color={'#fff'} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
  
}