import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import axios from 'axios';

export default function App() {
  const [textoOriginal, setTextoOriginal] = useState('');
  const [textoTraduzido, setTextoTraduzido] = useState('');
  const [carregando, setCarregando] = useState(false);

  const traduzir = async () => {
    if (!textoOriginal) return;
    
    setCarregando(true);
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoOriginal)}&langpair=pt-br|en-gb`;
      const res = await axios.get(url);
      setTextoTraduzido(res.data.responseData.translatedText);
    } catch (err) {
      alert("Erro ao conectar com a API de tradução.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Text style={styles.titulo}>Fynx <Text style={styles.detalheTitulo}>Tradutor</Text></Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o texto em Português..."
        placeholderTextColor="#888" // Cor do placeholder
        onChangeText={setTextoOriginal}
        multiline
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.botao} onPress={traduzir}>
        <Text style={styles.textoBotao}>Traduzir para Inglês</Text>
      </TouchableOpacity>

      <View style={styles.cardTraducao}>
        <Text style={styles.labelTraducao}>Tradução:</Text>
        {carregando ? (
          <ActivityIndicator color="#9D4EDD" size="large" />
        ) : (
          <Text style={styles.resultado}>
            {textoTraduzido || "O resultado aparecerá aqui..."}
          </Text>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212',
    padding: 20, 
    paddingTop: 60 
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center', 
    color: '#FFFFFF'
  },
  detalheTitulo: {
    color: '#9D4EDD', 
  },
  input: { 
    backgroundColor: '#1E1E1E',
    padding: 20, 
    borderRadius: 12, 
    fontSize: 16, 
    color: '#FFFFFF', 
    height: 150, 
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
    elevation: 4,
  },
  botao: { 
    backgroundColor: '#9D4EDD', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 25,
    elevation: 5,
  },
  textoBotao: { 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 18,
    textTransform: 'uppercase',
  },
  cardTraducao: { 
    backgroundColor: '#1E1E1E',
    padding: 20, 
    borderRadius: 12, 
    minHeight: 120, 
    borderWidth: 1,
    borderColor: '#9D4EDD',
    elevation: 3,
  },
  labelTraducao: {
    color: '#888',
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  resultado: { 
    fontSize: 20, 
    color: '#BB86FC',
    lineHeight: 26,
  },
});