import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function TelaFinal({ navigation }) {
  return (

    <View style={styles.container}>
      <Text style={styles.textFinal}>Finalizado</Text>
      <View style={styles.buttonVoltar}>
        <Button color={'#fff'} title='Voltar p/ tela inicial' onPress={() => navigation.navigate('Unipar')} />
      </View>
    </View>
  );
  
}