import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { SAMSUNG_THEME } from '../styles/theme';

// Calcula o tamanho do botão com base na largura da tela
const { width } = Dimensions.get('window');
const buttonSize = width * 0.22; 

export default function Botao({ label, onPress, double, type }) {
  const containerStyles = [styles.button];
  const textStyles = [styles.buttonText];

  // Lógica de cores 
  if (type === 'number') {
    containerStyles.push({ backgroundColor: SAMSUNG_THEME.btnNumber });
    textStyles.push({ color: SAMSUNG_THEME.textPrimary });
  } else if (type === 'function') {
    containerStyles.push({ backgroundColor: SAMSUNG_THEME.btnFunction });
    textStyles.push({ color: SAMSUNG_THEME.textFunction });
  } else if (type === 'operation') {
    containerStyles.push({ backgroundColor: SAMSUNG_THEME.btnOperation });
    textStyles.push({ color: SAMSUNG_THEME.textOperation, fontSize: 32 }); 
  } else if (type === 'equals') {
    containerStyles.push({ backgroundColor: SAMSUNG_THEME.btnEquals });
    textStyles.push({ color: SAMSUNG_THEME.textEquals });
  }

  if (double) {
    containerStyles.push(styles.buttonDouble);
    if (label !== '0') {
        containerStyles.push({ alignItems: 'center' });
    }
  }

  return (
    <TouchableOpacity 
      onPress={() => onPress(label)} 
      style={containerStyles}
      activeOpacity={0.6} 
    >
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.015, 
  },
  buttonDouble: {
    width: (buttonSize * 2) + (width * 0.03), 
    borderRadius: buttonSize / 2, 
    paddingHorizontal: 0, 
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '400',
  },
});