import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Moeda from './Componentes/moeda';
import APIMoedas from './Componentes/api';

export default function App() {

    const [moeda, setMoeda] = useState("");

    async function precoDolar(){
      const resposta = await APIMoedas.get('json/last/USD-BRL');
      setMoeda(resposta.data.USDBRL);
    }

    async function precoLibra(){
      const resposta = await APIMoedas.get('json/last/BRL-GBP');
      setMoeda(resposta.data.BRLGBP);
    }

    function limpar(){
      setMoeda("");
    }


  return (
    <View style={styles.container}>
           
      <Text style={styles.texto}>Conversor de moeda</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>sua cotação:</Text>

          <TouchableOpacity
          style={styles.bloco}
          onPress={precoDolar}>
              <Text style={styles.txtBloco}>Dólar americano para  Real brasileiro</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={precoLibra}>
              <Text style={styles.txtBloco}>Real brasileiro para Libra esterlina</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={limpar}>
              <Text style={styles.txtBloco}>Limpar</Text>
          </TouchableOpacity>
          <Moeda data={moeda}/>
  

    

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#566573',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
      fontSize: 30,
  },

txtBloco: {
    marginTop: 10,
      backgroundColor: '#1C2833',
      borderWidth: 2,
      borderColor: '#979A9A',
      borderRadius: 10,
      width: 200,
      textAlign: 'center',
      height: 40, 
      fontSize: 20,
    },

  input: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    marginTop: '5%',
    textAlign: 'center',
    backgroundColor: '#D5D8DC'
  },

  
 
});
