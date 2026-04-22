import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles, theme } from '../styles/styles';

export const ResultCard = ({ content, loading }) => {
  return (
    <View style={globalStyles.cardTraducao}>
      {loading ? (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      ) : (
        <Text style={globalStyles.resultado}>
          {content || "O resultado aparecerá aqui..."}
        </Text>
      )}
    </View>
  );
};