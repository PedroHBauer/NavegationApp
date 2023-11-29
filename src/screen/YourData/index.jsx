import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function YourData({ navigation, route }) {

  const { myName } = route.params;
  const { mySobrenome } = route.params;
  const [myRg, setMyRg] = useState(null);
  const [myCpf, setMyCpf] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.texRg}>Informe seu RG</Text>
      <TextInput style={styles.imputDados} onChangeText={setMyRg} value={myRg} />
      <Text style={styles.textCpf}>Informe ser CPF</Text>
      <TextInput style={styles.imputDados} onChangeText={setMyCpf} value={myCpf} />
      <View style={styles.viewButton}>
        <View style={styles.buttonVoltar}>
          <Button color={'#fff'} title=' Voltar  ' onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonProximo}>
          <Button color={'#fff'} title='Proxima' onPress={() => navigation.navigate('ViewData', { myName, mySobrenome, myRg, myCpf })} />
        </View>
      </View>
    </View>
  );
  
}