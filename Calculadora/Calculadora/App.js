import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import Botao from './src/components/Botao';
import { SAMSUNG_THEME } from './src/styles/theme';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [isFinished, setIsFinished] = useState(false);

  const handlePress = (label) => {
    // 1. Limpar Tudo
    if (label === 'C') {
      setDisplay('0');
      setIsFinished(false);
      return;
    }

    // 2. Calcular Resultado
    if (label === '=') {
      try {
        // Substitui os símbolos visuais por operadores que o JavaScript entende
        // x -> * |  ÷ -> /  |  , -> .
        const logicExpression = display
          .replace(/x/g, '*')
          .replace(/÷/g, '/')
          .replace(/,/g, '.');
        
        const result = eval(logicExpression);
        
        // Formata o resultado de volta para o padrão visual
        setDisplay(String(result).replace('.', ','));
        setIsFinished(true); 
      } catch (e) {
        setDisplay('Erro');
        setIsFinished(true);
      }
      return;
    }

    // 3. Evitar múltiplos pontos no mesmo número
    if (label === ',') {
        const lastChar = display.slice(-1);
        // Se o visor estiver vazio ou o último caractere for um operador, adiciona '0,'
        if (display === '0' || ['+', '-', 'x', '÷'].includes(lastChar)) {
            setDisplay(display + '0,');
            return;
        }
        // Se já tiver uma vírgula no número atual, ignora
        if (lastChar === ',') return; 
    }

    // 4. Lógica de Digitação
    if (display === '0' && !['+', '-', 'x', '÷', ','].includes(label)) {
      // Se estiver zero e digitar número, substitui o zero
      setDisplay(label);
      setIsFinished(false);
    } else if (isFinished && !['+', '-', 'x', '÷'].includes(label)) {
      // Se a conta acabou e digitar um novo número, começa do zero
      setDisplay(label);
      setIsFinished(false);
    } else {
      // Caso contrário, vai concatenando os caracteres
      setDisplay(display + label);
      setIsFinished(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={2} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.row}>
          <Botao label="C" type="function" onPress={handlePress} />
          <Botao label="()" type="function" onPress={handlePress} />
          <Botao label="%" type="function" onPress={handlePress} />
          <Botao label="÷" type="operation" onPress={handlePress} />
        </View>

        <View style={styles.row}>
          <Botao label="7" type="number" onPress={handlePress} />
          <Botao label="8" type="number" onPress={handlePress} />
          <Botao label="9" type="number" onPress={handlePress} />
          <Botao label="x" type="operation" onPress={handlePress} />
        </View>

        <View style={styles.row}>
          <Botao label="4" type="number" onPress={handlePress} />
          <Botao label="5" type="number" onPress={handlePress} />
          <Botao label="6" type="number" onPress={handlePress} />
          <Botao label="-" type="operation" onPress={handlePress} />
        </View>

        <View style={styles.row}>
          <Botao label="1" type="number" onPress={handlePress} />
          <Botao label="2" type="number" onPress={handlePress} />
          <Botao label="3" type="number" onPress={handlePress} />
          <Botao label="+" type="operation" onPress={handlePress} />
        </View>

        <View style={styles.row}>
          <Botao label="," type="number" onPress={handlePress} />
          <Botao label="0" type="number" onPress={handlePress} />
          <Botao label="=" type="equals" onPress={handlePress} double />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  displayText: {
    fontSize: 70,
    color: '#FFF',
    fontWeight: '300',
    textAlign: 'right',
  },
  grid: {
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
});