const texts = [
  "Exemplo de comando de IA 1",
  "Exemplo de comando de IA 2",
  "Exemplo de comando de IA 3"
];

const container = document.getElementById("texts-container");

texts.forEach(text => {
  const div = document.createElement("div");
  div.className = "text-box";
  div.innerText = text;

  const btn = document.createElement("button");
  btn.innerText = "Copiar";
  btn.className = "copy-btn";
  btn.onclick = () => {
    navigator.clipboard.writeText(text);
    btn.innerText = "Copiado!";
    setTimeout(() => btn.innerText = "Copiar", 2000);
  };

  div.appendChild(btn);
  container.appendChild(div);
});
