function addText() {
    const text = document.getElementById('new-text').value.trim();
    if (text) {
        // Pega textos existentes ou cria array vazio
        const texts = JSON.parse(localStorage.getItem('giftup-texts')) || [];
        
        // Adiciona novo texto
        texts.push(text);
        
        // Salva no localStorage
        localStorage.setItem('giftup-texts', JSON.stringify(texts));
        
        // Atualiza a lista
        loadTexts();
        
        // Limpa o textarea
        document.getElementById('new-text').value = '';
        
        // Confirmação visual
        alert('✅ Texto salvo! Aparecerá no site público.');
    }
}