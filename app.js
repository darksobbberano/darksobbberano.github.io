document.addEventListener('DOMContentLoaded', () => {
    // Carrega prontos salvos
    loadProntos();
    
    // Configura botões
    document.getElementById('toggle-login').addEventListener('click', toggleLoginForm);
    document.querySelector('#login-form button').addEventListener('click', login);
    document.querySelector('#admin-form button').addEventListener('click', addPronto);
});

function loadProntos() {
    const savedProntos = JSON.parse(localStorage.getItem('prontos')) || [
        "Pronto 1: Lorem ipsum dolor sit amet",
        "Pronto 2: Sed do eiusmod tempor incididunt",
        "Pronto 3: Quis nostrud exercitation ullamco"
    ];
    
    const container = document.getElementById('prontos-container');
    container.innerHTML = '';
    
    savedProntos.forEach((text, index) => {
        container.appendChild(createProntoElement(text, index));
    });
}

function createProntoElement(text, id) {
    const div = document.createElement('div');
    div.className = 'pronto';
    div.dataset.id = id;
    
    div.innerHTML = `
        <button class="copy-btn">Copiar</button>
        ${isLoggedIn ? `
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">🗑️</button>
        ` : ''}
        <p class="pronto-text">${text}</p>
    `;
    
    return div;
}

// ... (outras funções atualizadas)