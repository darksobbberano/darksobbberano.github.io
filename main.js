// Carrega textos salvos
function loadTexts() {
    const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    const container = document.getElementById('text-container');
    
    container.innerHTML = texts.map(text => `
        <div class="text-card">
            <p>${text}</p>
            <button onclick="copyText('${text}')">📋 Copiar</button>
        </div>
    `).join('');
}

// Função para copiar texto
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert('Texto copiado!');
}

// Inicialização
document.getElementById('admin-btn').addEventListener('click', () => {
    window.location.href = "../admin/admin.html";
});

window.onload = loadTexts;