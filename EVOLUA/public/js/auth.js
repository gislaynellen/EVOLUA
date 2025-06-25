document.addEventListener('DOMContentLoaded', function() {
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap JS não foi carregado.');
        return;
    }

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authMessage = document.getElementById('auth-message');
    const registerPassword = document.getElementById('registerPassword');
    const registerConfirmPassword = document.getElementById('registerConfirmPassword');

    function showMessage(type, text) {
        authMessage.className = `alert alert-${type} mt-3`;
        authMessage.textContent = text;
        authMessage.classList.remove('d-none');
        setTimeout(() => authMessage.classList.add('d-none'), 5000);
    }

    function validatePasswordMatch() {
        if (registerPassword.value !== registerConfirmPassword.value) {
            registerConfirmPassword.setCustomValidity('As senhas não coincidem');
            return false;
        } else {
            registerConfirmPassword.setCustomValidity('');
            return true;
        }
    }

    registerConfirmPassword.addEventListener('input', validatePasswordMatch);

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        registerForm.classList.add('was-validated');
        if (!registerForm.checkValidity() || !validatePasswordMatch()) {
            e.stopPropagation();
            return;
        }
        const db = getDatabase();
        const email = document.getElementById('registerEmail').value;
        const userExists = Object.values(db.usuarios).find(user => user.email === email);
        if (userExists) {
            showMessage('danger', 'Este e-mail já está cadastrado. Tente fazer o login.');
            return;
        }
        const newUserId = Date.now();
        const nome = document.getElementById('registerName').value;
        const sobrenome = document.getElementById('registerLastName').value;
        const newUser = {
            id: newUserId,
            nome: nome,
            sobrenome: sobrenome,
            nome_completo: `${nome} ${sobrenome}`,
            email: email,
            senha: registerPassword.value,
            foto: "https://i.pravatar.cc/150?u=" + newUserId,
            plano: null, dieta: null, treino: null, feedback: null
        };
        db.usuarios[newUserId] = newUser;
        saveDatabase(db);
        showMessage('success', 'Cadastro realizado com sucesso! Faça login para continuar.');
        registerForm.reset();
        registerForm.classList.remove('was-validated');
        const loginTab = document.querySelector('#login-tab');
        if (loginTab) {
            bootstrap.Tab.getOrCreateInstance(loginTab).show();
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loginForm.classList.add('was-validated');
        if (!loginForm.checkValidity()) {
            e.stopPropagation();
            return;
        }
        const db = getDatabase();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const user = Object.values(db.usuarios).find(u => u.email === email);
        if (!user) {
            showMessage('danger', 'Usuário não encontrado. Verifique o e-mail ou cadastre-se.');
            return;
        }
        if (user.senha !== password) {
            showMessage('danger', 'Senha incorreta.');
            return;
        }
        setCurrentUserId(user.id);
        showMessage('success', 'Login realizado com sucesso! Redirecionando...');
        setTimeout(() => {
           
            window.location.href = '/private/perfil.html';
        }, 1500);
    });
});