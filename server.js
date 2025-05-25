const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/admin', express.static('admin'));
app.use(express.json());

const TEXTS_FILE = path.join(__dirname, 'data', 'texts.json');

// Rota pública para pegar os textos
app.get('/api/texts', (req, res) => {
  fs.readFile(TEXTS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao ler os textos' });
    res.json(JSON.parse(data));
  });
});

// Rota protegida para adicionar texto
app.post('/api/add-text', (req, res) => {
  const { username, password, text } = req.body;
  if (username !== '8080' || password !== 'WGHM9933') {
    return res.status(403).json({ error: 'Credenciais inválidas' });
  }

  fs.readFile(TEXTS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao ler os textos' });
    const texts = JSON.parse(data);
    texts.push(text);
    fs.writeFile(TEXTS_FILE, JSON.stringify(texts, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Erro ao salvar o texto' });
      res.json({ success: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});