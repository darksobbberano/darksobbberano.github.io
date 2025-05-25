function loadTexts() {
    const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
    const container = document.getElementById('text-container');
    
    container.innerHTML = texts.map(text => `
        <div class="text-item" style="border-left: 3px solid var(--roxo-escuro);">
            <p>${text}</p>
            <button onclick="copyText('${text.replace(/'/g, "\\'")}')">
                📋 Copiar
            </button>
        </div>
    `).join('');
}