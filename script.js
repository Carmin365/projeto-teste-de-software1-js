const testCases = [
    { name: "Login com Credenciais Válidas", status: "PENDING" },
    { name: "Criação de Novo Usuário", status: "PENDING" },
    { name: "Navegação na Página Principal", status: "PENDING" },
    { name: "Validação de Formulário de Pagamento", status: "PENDING" },
    { name: "Envio de E-mail de Confirmação", status: "PENDING" }
];

const resultsList = document.getElementById('testResults');
const runButton = document.getElementById('runTests');
const statusGeral = document.getElementById('statusGeral');

function renderTests() {
    resultsList.innerHTML = '';
    testCases.forEach(test => {
        const li = document.createElement('li');
        li.classList.add('test-item', test.status);
        li.innerHTML = `
            <span>${test.name}</span>
            <span class="test-status">${test.status}</span>
        `;
        resultsList.appendChild(li);
    });
}

function runRegresionTests() {
    runButton.disabled = true;
    statusGeral.textContent = 'Executando...';
    statusGeral.style.color = '#ffc107';

    // Simulação da execução assíncrona dos testes
    setTimeout(() => {
        // Altera o status de forma aleatória para simular sucesso/falha
        testCases.forEach(test => {
            const random = Math.random();
            if (random < 0.8) {
                test.status = "PASS"; // 80% de chance de sucesso
            } else {
                test.status = "FAIL"; // 20% de chance de falha
            }
        });

        renderTests();
        runButton.disabled = false;
        
        const failures = testCases.filter(t => t.status === "FAIL").length;
        if (failures > 0) {
            statusGeral.textContent = `Execução Finalizada! ${failures} Falha(s).`;
            statusGeral.style.color = '#dc3545';
        } else {
            statusGeral.textContent = 'Execução Finalizada! Todos os testes PASSARAM.';
            statusGeral.style.color = '#28a745';
        }
    }, 2000); // Simula 2 segundos de execução
}

runButton.addEventListener('click', runRegresionTests);
renderTests(); // Exibe o estado inicial