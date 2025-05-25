const loginForm = document.getElementById('login-form');
const textPanel = document.getElementById('text-panel');
const status = document.getElementById('status');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '8080' && password === 'WGHM9933') {
    loginForm.classList.add('hidden');
    textPanel.classList.remove('hidden');
  } else {
    status.textContent = 'Usuário ou senha incorretos';
  }
});

document.getElementById('send-btn').addEventListener('click', () => {
  const text = document.getElementById('new-text').value.trim();
  if (!text) return;

  fetch('/api/add-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: '8080', password: 'WGHM9933', text })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        status.textContent = 'Texto adicionado!';
        document.getElementById('new-text').value = '';
      } else {
        status.textContent = 'Erro ao adicionar texto';
      }
    });
});