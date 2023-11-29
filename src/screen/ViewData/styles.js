import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100',
    height: '100',
    marginTop: 50,
    alignItems: 'center',
  },
  nomeCompleto: {
    fontSize: 25,
    marginBottom: 30,
  },
  textRg: {
    fontSize: 30,
    marginTop: 100,
  },
  textCpf: {
    fontSize: 30,
    marginTop: 100,
  },

  viewRow: {
    marginTop: '35%',
    width: '50%',
    marginLeft: '10%',
    gap: 10,
    flexDirection: 'row',
  },
  viewButton3: {
    marginLeft: 10,
  },
  viewButton4: {
    marginLeft: 20,
  },
  textdds: {
    fontSize: 30,
  },
  buttonProximo: {
    height: 35,
    backgroundColor: '#01633D',
  },
  buttonVoltar: {
    height: 35,
    backgroundColor: 'red',
  },
});

export default styles;