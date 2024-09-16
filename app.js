
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();e

    
    const username = document.getElementById('usurio').value;
    const password = document.getElementById('contraseña').value;

    if (username === "usuario" && password === "contraseña") {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Inicio de sesión exitoso';
        
    } else {
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
    }
});
