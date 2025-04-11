// Seleciona o botão com o ID 'btn' do HTML
const btn = document.getElementById('btn');

// Adiciona um evento de clique ao botão
btn.addEventListener('click', (e) => {
    // Obtém o valor numérico do campo de entrada com o ID 'valor'
    const valor = parseInt(document.getElementById('valor').value);
    
    // Obtém o valor numérico do campo de entrada com o ID 'tempo'
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    // Seleciona o elemento onde o valor será exibido, com o ID 'mostraValor'
    const mostraValor = document.getElementById('mostraValor');

    // Calcula o número de blocos de 15 minutos necessários, arredondando para cima com a função Math.ceil();
    const blocos = Math.ceil(tempo / 15);

    // Calcula o valor total a pagar multiplicando o valor pelo número de blocos
    const valorAPagar = valor * blocos;

    // Exibe o valor calculado no elemento 'mostraValor', formatado com 2 casas decimais
    mostraValor.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)} `;
    
    // Previne o comportamento padrão do evento (como recarregar a página em um formulário)
    e.preventDefault();
});