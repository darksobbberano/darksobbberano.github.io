fetch('/api/texts')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('texts-container');
    data.forEach(text => {
      const div = document.createElement('div');
      div.className = 'text-box';
      div.innerHTML = `
        <pre>${text}</pre>
        <button class="copy-btn">Copiar</button>
      `;
      container.appendChild(div);
    });

    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.previousElementSibling.textContent;
        navigator.clipboard.writeText(text);
        btn.textContent = 'Copiado!';
        setTimeout(() => (btn.textContent = 'Copiar'), 2000);
      });
    });
  });