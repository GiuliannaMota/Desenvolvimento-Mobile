# Documentação de Projeto: Calculadora Mobile 

**Aluna:** Giulianna Emilia Silva da Mota

## 1. Introdução
Este projeto consiste no desenvolvimento de uma calculadora aritmética funcional para dispositivos Android, utilizando o framework React Native.

## 2. Motivo do Tema
A escolha deste tema é baseado na minha experiência pessoal, a calculadora aritmética foi o primeiro software de lógica funcional que desenvolvi no início dos meus estudos em Algoritmos/Programação.

## 3. Interface e Design 
A interface foi inspirada na One UI 6.1 (Samsung), focando em uma estética minimalista e moderna.

## 4. Arquitetura do Projeto
O código fpo organizado em módulos para facilitar manutenção e compreensão.
- App.js: Arquivo principal contendo a lógica de negócio e o estado da aplicação.
- /src/components/Botao.js: Componente reutilizável, centralizando a lógica de estilização de todos os botões.
- /src/styles/theme.js: Centralização da paleta de cores.

## 5. Lógica de Funcionamento
A calculadora opera como uma máquina de estados basead em string.
1. **Entrada de Dados:** Cada caractere pressionado é concatenado em uma string de expressão
2. **Tratamento de Strings:** Antes do processamento, os símbolos visuais são substituídos via Regex por operadores aritméticos computacionais.
3. **Processamento:** Utilização da função eval() para interpretar a string de caracteres como uma expressão matemática real e retornar o resultado.
4. **Formatação:** O sistema realiza a conversão automática entre pontos decimais (padrão computacional) e vírgulas (padrão brasileiro/Samsung) para o usuário final.
