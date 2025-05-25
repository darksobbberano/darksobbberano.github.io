// Credenciais
const ADMIN = {
    user: "8080",
    pass: "wghmn9933"
};

// Login
function login() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    if(user === ADMIN.user && pass === ADMIN.pass) {
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.text-manager').style.display = 'block';
        loadAdminPanel();
    } else {
        alert('Credenciais inválidas!');
    }
}

// Restante do código admin...