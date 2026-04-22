import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

export const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.botao} onPress={onPress}>
      <Text style={globalStyles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
};