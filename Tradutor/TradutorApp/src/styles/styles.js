import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#9D4EDD',
    secondary: '#BB86FC',
    text: '#FFFFFF',
    textSecondary: '#888',
  }
};

export const globalStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.background, 
    padding: 20, 
    paddingTop: 60 
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center', 
    color: theme.colors.text 
  },
  detalheTitulo: { color: theme.colors.primary },
  input: { 
    backgroundColor: theme.colors.surface, 
    padding: 20, 
    borderRadius: 12, 
    fontSize: 16, 
    color: theme.colors.text, 
    height: 150, 
    borderWidth: 1, 
    borderColor: '#333', 
    marginBottom: 20 
  },
  botao: { 
    backgroundColor: theme.colors.primary, 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 25 
  },
  textoBotao: { color: theme.colors.text, fontWeight: 'bold', fontSize: 18 },
  cardTraducao: { 
    backgroundColor: theme.colors.surface, 
    padding: 20, 
    borderRadius: 12, 
    minHeight: 120, 
    borderWidth: 1, 
    borderColor: theme.colors.primary 
  },
  resultado: { fontSize: 20, color: theme.colors.secondary, lineHeight: 26 },
});