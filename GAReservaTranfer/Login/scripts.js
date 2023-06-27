// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    
  
    // Manejar el evento de envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Obtener el nombre de usuario ingresado
      const username = document.getElementById('username').value;
      // Almacenar el nombre de usuario en el almacenamiento local
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', username);
      // Redirigir al usuario al home
      location.href = 'home.html';
    });
  });