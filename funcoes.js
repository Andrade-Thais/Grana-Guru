/*modal saiba mais*/
// Seleciona todos os links "Saiba Mais"
const saibaMaisLinks = document.querySelectorAll('.btn-saiba-mais');

// Adiciona um evento de clique a cada link "Saiba Mais"
saibaMaisLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Exibe o modal correspondente ao clicar no link
        document.getElementById(`modal${index}`).style.display = 'block';
    });
});

// Função para fechar o modal
function fecharModal() {
    // Seleciona todos os modais e os oculta
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Função para calcular e exibir os valores correspondentes aos percentuais
function calcular() {
    // Obter o valor da renda mensal digitada pelo usuário
    const rendaMensal = parseFloat(document.getElementById('renda').value);

    // Calcular os valores correspondentes aos percentuais
    const gastosEssenciais = rendaMensal * 0.5; // 50%
    const gastosPessoais = rendaMensal * 0.3; // 30%
    const pouparInvestir = rendaMensal * 0.2; // 20%

    // Exibir os resultados nos elementos correspondentes
    document.getElementById('gastosEssenciais').innerText = gastosEssenciais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('gastosPessoais').innerText = gastosPessoais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('pouparInvestir').innerText = pouparInvestir.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Adicionar evento de clique ao botão "Calcular"
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio do formulário
    calcular(); // Chamar a função de cálculo
});