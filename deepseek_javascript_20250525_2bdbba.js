// Funções do admin (adicionar ao mesmo scripts.js)
function addText() {
    const text = document.getElementById('new-text').value.trim();
    if (text) {
        const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
        texts.push(text);
        localStorage.setItem('giftup-texts', JSON.stringify(texts));
        document.getElementById('new-text').value = '';
        loadAdminTexts();
    }
}

function loadAdminTexts() {
    const container = document.getElementById('admin-texts');
    const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    
    container.innerHTML = texts.map((text, index) => `
        <div class="text-item">
            <p>${text}</p>
            <button onclick="copyToClipboard('${text.replace(/'/g, "\\'")}')">Copiar</button>
            <button onclick="removeText(${index})">Remover</button>
        </div>
    `).join('');
}

function removeText(index) {
    const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    texts.splice(index, 1);
    localStorage.setItem('giftup-texts', JSON.stringify(texts));
    loadAdminTexts();
}

// Carrega textos quando a página admin abre
if (document.getElementById('admin-texts')) {
    loadAdminTexts();
}