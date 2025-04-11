# Lan House JS

Este é um projeto simples de cálculo de valor a ser pago em uma lan house, baseado no tempo de uso do cliente. O cálculo é feito em blocos de 15 minutos.

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

- **index.html**: Contém a estrutura HTML da página.
- **script.js**: Contém o código JavaScript responsável pelo cálculo do valor a ser pago.

## Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Insira o valor cobrado por 15 minutos no campo "Valor por 15 minutos".
3. Insira o tempo de uso do cliente no campo "Tempo de uso do cliente".
4. Clique no botão "Calcular valor pago".
5. O valor total a ser pago será exibido abaixo do formulário.

## Lógica de Cálculo

- O tempo de uso é dividido em blocos de 15 minutos.
- O número de blocos é arredondado para cima.
- O valor total é calculado multiplicando o valor por 15 minutos pelo número de blocos.

## Exemplo

Se o valor por 15 minutos for **R$ 2,50** e o tempo de uso for **40 minutos**, o cálculo será:

- Número de blocos: `ceil(40 / 15) = 3`
- Valor total: `3 * 2,50 = R$ 7,50`

O resultado exibido será:
