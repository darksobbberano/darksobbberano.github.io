// Dados simulados (em um sistema real, isso viria de um banco de dados)
let texts = [];
const ADMIN_PASSWORD = "8080"; // Senha do administrador

// Carrega textos quando a página principal é aberta
if (document.getElementById('text-container')) {
    loadTexts();
}

// Função para carregar textos na página principal
function loadTexts() {
    const container = document.getElementById('text-container');
    const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    
    savedTexts.forEach((text, index) => {
        const textElement = document.createElement('div');
        textElement.className = 'text-item';
        textElement.innerHTML = `
            <p>${text}</p>
            <button onclick="copyText(${index})">Copiar</button>
        `;
        container.appendChild(textElement);
    });
}

// Função para login do administrador
function login() {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('admin-section').style.display = 'block';
        loadAdminTexts();
    } else {
        alert('Senha incorreta!');
    }
}

// Carrega textos no painel admin
function loadAdminTexts() {
    const container = document.getElementById('admin-texts');
    container.innerHTML = '';
    const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    
    savedTexts.forEach((text, index) => {
        const textElement = document.createElement('div');
        textElement.className = 'admin-text-item';
        textElement.innerHTML = `
            <p>${text}</p>
            <button onclick="copyText(${index})">Copiar</button>
            <button onclick="removeText(${index})">Remover</button>
        `;
        container.appendChild(textElement);
    });
}

// Adiciona novo texto
function addText() {
    const newText = document.getElementById('new-text').value.trim();
    if (newText) {
        const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
        savedTexts.push(newText);
        localStorage.setItem('giftup-texts', JSON.stringify(savedTexts));
        document.getElementById('new-text').value = '';
        loadAdminTexts();
        alert('Texto adicionado com sucesso!');
    }
}

// Remove texto
function removeText(index) {
    const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    savedTexts.splice(index, 1);
    localStorage.setItem('giftup-texts', JSON.stringify(savedTexts));
    loadAdminTexts();
}

// Copia texto
function copyText(index) {
    const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    navigator.clipboard.writeText(savedTexts[index]);
    alert('Texto copiado!');
}