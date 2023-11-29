import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function ViewData({ navigation, route }) {

  const { myName } = route.params;
  const { mySobrenome } = route.params;
  const { myRg } = route.params;
  const { myCpf } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.nomeCompleto}>Olá, {myName + mySobrenome}</Text>
      <Text style={styles.nomeCompleto}>Portador do documento</Text>
      <Text style={styles.textRg}>RG</Text>
      <Text style={styles.textdds}>{myRg}</Text>
      <Text style={styles.textCpf}>CPF</Text>
      <Text style={styles.textdds}>{myCpf}</Text>
      <View style={styles.viewRow}>
        <View style={styles.buttonVoltar}>
          <Button color={'#fff'} title='  Voltar  ' onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonProximo}>
          <Button color={'#fff'} title='Finalizar' onPress={() => navigation.navigate('Finalizar')} />
        </View>
      </View>
    </View>
  );
  
}