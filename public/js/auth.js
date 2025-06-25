document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const forgotPasswordLink = document.getElementById('forgotPassword');
  const forgotPasswordModal = new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
  const sendRecoveryBtn = document.getElementById('sendRecovery');
  const authMessage = document.getElementById('auth-message');
  const registerPassword = document.getElementById('registerPassword');
  const registerConfirmPassword = document.getElementById('registerConfirmPassword');

  function showMessage(type, text) {
    authMessage.className = `alert alert-${type}`;
    authMessage.textContent = text;
    authMessage.classList.remove('d-none');
    
    setTimeout(() => {
      authMessage.classList.add('d-none');
    }, 5000);
  }

  function validatePassword() {
    if (registerPassword.value !== registerConfirmPassword.value) {
      registerConfirmPassword.setCustomValidity('As senhas não coincidem');
      registerConfirmPassword.classList.add('is-invalid');
      return false;
    } else {
      registerConfirmPassword.setCustomValidity('');
      registerConfirmPassword.classList.remove('is-invalid');
      return true;
    }
  }

  registerConfirmPassword.addEventListener('input', validatePassword);

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!loginForm.checkValidity()) {
      e.stopPropagation();
      loginForm.classList.add('was-validated');
      return;
    }
    
    showMessage('success', 'Login realizado com sucesso! Redirecionando...');
    
    setTimeout(() => {
      window.location.href = 'perfil.html';
    }, 2000);
  });

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!registerForm.checkValidity() || !validatePassword()) {
      e.stopPropagation();
      registerForm.classList.add('was-validated');
      return;
    }
    
    showMessage('success', 'Cadastro realizado com sucesso! Faça login para continuar.');
    registerForm.reset();
    registerForm.classList.remove('was-validated');
    
    bootstrap.Tab.getInstance(document.querySelector('#login-tab')).show();
  });

  forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    forgotPasswordModal.show();
  });

  sendRecoveryBtn.addEventListener('click', function() {
    const recoveryEmail = document.getElementById('recoveryEmail');
    
    if (!recoveryEmail.value) {
      recoveryEmail.classList.add('is-invalid');
      return;
    }
    
    showMessage('success', 'Um link de recuperação foi enviado para seu e-mail!');
    forgotPasswordModal.hide();
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('is-invalid');
      }
    });
  });
});