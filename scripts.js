// Dados do admin
const ADMIN_CREDENTIALS = {
    user: "8080",
    password: "wghmn9933"
};

// Mostra modal de login
function showLogin() {
    document.getElementById('login-modal').style.display = 'block';
}

// Fecha modal
window.onclick = function(event) {
    if (event.target == document.getElementById('login-modal')) {
        document.getElementById('login-modal').style.display = 'none';
    }
}

// Login do admin
function login() {
    const user = document.getElementById('admin-user').value;
    const password = document.getElementById('admin-password').value;
    
    if (user === ADMIN_CREDENTIALS.user && password === ADMIN_CREDENTIALS.password) {
        window.location.href = 'admin.html';
    } else {
        alert('Credenciais incorretas!');
    }
}

// Carrega textos na página principal
function loadTexts() {
    const container = document.getElementById('text-container');
    const savedTexts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    
    container.innerHTML = savedTexts.map(text => `
        <div class="text-item">
            <p>${text}</p>
            <button onclick="copyToClipboard('${text.replace(/'/g, "\\'")}')">Copiar</button>
        </div>
    `).join('');
}

// Copia texto
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('Texto copiado!');
}

// Carrega textos quando a página abre
window.onload = loadTexts;