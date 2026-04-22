import React, { useState } from 'react';
import { Text, TextInput, View, StatusBar } from 'react-native';
import { globalStyles } from './src/styles/styles';
import { fetchTranslation } from './src/services/translateService';

// Componentes
import { CustomButton } from './src/components/Button';
import { ResultCard } from './src/components/ResultCard';

export default function App() {
  const [textoOriginal, setTextoOriginal] = useState('');
  const [textoTraduzido, setTextoTraduzido] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleTranslate = async () => {
    setCarregando(true);
    try {
      const result = await fetchTranslation(textoOriginal);
      setTextoTraduzido(result);
    } catch (err) {
      alert(err.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="light-content" />
      
      <Text style={globalStyles.titulo}>Fynx <Text style={globalStyles.detalheTitulo}>Tradutor</Text></Text>
      
      <TextInput
        style={globalStyles.input}
        placeholder="Digite em Português..."
        placeholderTextColor="#888"
        onChangeText={setTextoOriginal}
        multiline
      />

      <CustomButton title="Traduzir para Inglês" onPress={handleTranslate} />

      <ResultCard content={textoTraduzido} loading={carregando} />
    </View>
  );
}