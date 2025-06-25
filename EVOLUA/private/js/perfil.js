// ==================================================================
//   CÓDIGO COMPLETO, CORRIGIDO E SEM ABREVIAÇÕES PARA O PERFIL
// ==================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. VERIFICAÇÃO DE SESSÃO ---
    const currentUserId = getCurrentUserId();
    if (!currentUserId) {
        alert('Você precisa fazer login para acessar esta página.');
        window.location.href = '../html/login.html'; // Corrigido para sua estrutura
        return;
    }

    // --- 2. SELEÇÃO DOS ELEMENTOS DO DOM ---
    const userInfoContainer = document.getElementById('user-info');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const mainContentArea = document.querySelector('.content-area');

    // Elementos para a edição de perfil
    const profileForm = document.getElementById('dados-pessoais-form');
    const profileNameInput = document.getElementById('profileName');
    const profileEmailInput = document.getElementById('profileEmail');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    const dadosPessoaisMessage = document.getElementById('dados-pessoais-message');

    // --- 3. FUNÇÕES DE RENDERIZAÇÃO (COMPLETAS) ---

    function showProfileMessage(type, text) {
        dadosPessoaisMessage.className = `alert alert-${type}`;
        dadosPessoaisMessage.textContent = text;
        dadosPessoaisMessage.classList.remove('d-none');
        setTimeout(() => dadosPessoaisMessage.classList.add('d-none'), 3000);
    }

    function renderUserInfo(userData) {
        userInfoContainer.innerHTML = `
            <div class="user-name-email">
                <h4>${userData.nome_completo}</h4>
                <p>${userData.email}</p>
            </div>
            <img src="${userData.foto}" alt="Foto do usuário">
        `;
        if (profileNameInput) profileNameInput.value = userData.nome_completo;
        if (profileEmailInput) profileEmailInput.value = userData.email;
    }

    function renderPlanoSection(userData) {
        const section = document.getElementById('section-plano');
        let content = `<h2><i class="fas fa-gem"></i> Meu Plano</h2>`;
        if (userData.plano) {
            const nomePlano = userData.plano.plano === 'start' ? 'EVOLUA Start' : 'EVOLUA Fit';
            const formaPagamento = userData.plano.forma_pagamento === 'cartao' ? 'Cartão de Crédito' : 'PIX';
            content += `
                <div class="card">
                    <h3>Plano ${nomePlano}</h3>
                    <p><strong>Status:</strong> <span style="color: #28a745;">Ativo</span></p>
                    <p><strong>Forma de Pagamento:</strong> ${formaPagamento}</p>
                    <div class="card-actions">
                        <a href="formAssinatura.html?edit=true" class="btn btn-primary">Alterar Plano ou Pagamento</a>
                        <button class="btn btn-danger" data-action="delete-plano">Cancelar Assinatura</button>
                    </div>
                </div>`;
        } else {
            content += `
                <div class="card">
                    <h3>Nossos Planos</h3>
                    <p>Você ainda não tem um plano ativo. Escolha uma das opções abaixo para desbloquear todos os recursos!</p>
                    <div class="plan-selection-group-profile">
                        <div class="plan-card-profile">
                            <h4>EVOLUA Start</h4>
                            <div class="price">R$ 39,90/mês</div>
                            <ul>
                                <li><i class="fas fa-check"></i> Planos de treino padrão</li>
                                <li><i class="fas fa-check"></i> Planos de dieta padrão</li>
                                <li><i class="fas fa-times"></i> Suporte Básico</li>
                            </ul>
                            <a href="formAssinatura.html" class="btn btn-secondary">Assinar Plano Start</a>
                        </div>
                        <div class="plan-card-profile recommended">
                            <h4>EVOLUA Fit</h4>
                            <div class="price">R$ 99,90/mês</div>
                            <ul>
                                <li><i class="fas fa-check"></i> Treinos personalizados</li>
                                <li><i class="fas fa-check"></i> Dietas personalizadas</li>
                                <li><i class="fas fa-check"></i> Suporte Prioritário</li>
                            </ul>
                            <a href="formAssinatura.html" class="btn btn-primary">Assinar Plano Fit</a>
                        </div>
                    </div>
                </div>`;
        }
        section.innerHTML = content;
    }

    function renderDietaSection(userData) {
        const section = document.getElementById('section-plano-alimentar');
        let content = `<h2><i class="fas fa-utensils"></i> Plano Alimentar</h2>`;
        if (userData.dieta) {
            content += `
                <div class="card">
                    <h3>Plano Alimentar em Processamento</h3>
                    <p>Seu plano alimentar será disponibilizado em breve.</p>
                    <div class="card-actions">
                        <a href="formDieta.html?edit=true" class="btn btn-primary">Editar Respostas</a>
                        <button class="btn btn-danger" data-action="delete-dieta">Excluir Plano</button>
                    </div>
                </div>`;
        } else {
            content += `
                <div class="empty-state">
                    <i class="fas fa-utensils"></i>
                    <p>Nenhum plano alimentar encontrado. Vamos criar um para você!</p>
                    <a href="formDieta.html" class="btn btn-primary">Criar Plano Alimentar</a>
                </div>`;
        }
        section.innerHTML = content;
    }

    function renderTreinoSection(userData) {
        const section = document.getElementById('section-plano-treino');
        let content = `<h2><i class="fas fa-dumbbell"></i> Plano de Treino</h2>`;
        if (userData.treino) {
            content += `
                <div class="card">
                    <h3>Plano de Treino em Processamento</h3>
                    <p>Seu plano de treino será disponibilizado em breve.</p>
                    <div class="card-actions">
                        <a href="formTreino.html?edit=true" class="btn btn-primary">Editar Respostas</a>
                        <button class="btn btn-danger" data-action="delete-treino">Excluir Plano</button>
                    </div>
                </div>`;
        } else {
            content += `
                <div class="empty-state">
                    <i class="fas fa-dumbbell"></i>
                    <p>Nenhum plano de treino encontrado. Vamos montar um para você!</p>
                    <a href="formTreino.html" class="btn btn-primary">Criar Plano de Treino</a>
                </div>`;
        }
        section.innerHTML = content;
    }

    function renderFeedbackSection(userData) {
        const section = document.getElementById('section-feedback');
        let content = `<h2><i class="fas fa-comment-dots"></i> Seu Feedback</h2>`;
        if (userData.feedback) {
            content += `
                <div class="card">
                    <h3>Seu depoimento está salvo!</h3>
                    <p>Obrigada por compartilhar sua opinião, é muito importante para nós.</p>
                    <blockquote style="font-style: italic; border-left: 3px solid #b565d6; padding-left: 10px; margin: 10px 0;">"${userData.feedback.mensagem}"</blockquote>
                    <div class="card-actions">
                        <a href="formFeedback.html?edit=true" class="btn btn-primary">Editar Feedback</a>
                        <button class="btn btn-danger" data-action="delete-feedback">Cancelar Envio</button>
                    </div>
                </div>`;
        } else {
            content += `
                <div class="empty-state">
                    <i class="fas fa-comment-dots"></i>
                    <p>Sua opinião é muito importante para nós. Ajude-nos a melhorar!</p>
                    <a href="formFeedback.html" class="btn btn-primary">Deixar um Feedback</a>
                </div>`;
        }
        section.innerHTML = content;
    }

    // --- 4. LÓGICA DE NAVEGAÇÃO E EVENTOS ---

    function switchSection(sectionId) {
        contentSections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        const activeSection = document.getElementById(`section-${sectionId}`);
        if (activeSection) activeSection.classList.add('active');
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.currentTarget.dataset.section;
            if (sectionId) switchSection(sectionId);
        });
    });

    mainContentArea.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        const action = target.dataset.action;
        if (!action) return;
        const userData = getUserDataById(currentUserId);
        let changed = false;
        if (action === 'delete-plano' && confirm('Tem certeza?')) { userData.plano = null; renderPlanoSection(userData); changed = true; }
        else if (action === 'delete-dieta' && confirm('Tem certeza?')) { userData.dieta = null; renderDietaSection(userData); changed = true; }
        else if (action === 'delete-treino' && confirm('Tem certeza?')) { userData.treino = null; renderTreinoSection(userData); changed = true; }
        else if (action === 'delete-feedback' && confirm('Tem certeza?')) { userData.feedback = null; renderFeedbackSection(userData); changed = true; }
        if (changed) { saveUserData(currentUserId, userData); }
    });

    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            profileNameInput.disabled = false;
            profileEmailInput.disabled = false;
            editProfileBtn.classList.add('d-none');
            saveProfileBtn.classList.remove('d-none');
            profileNameInput.focus();
        });
    }

    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userData = getUserDataById(currentUserId);
            userData.nome_completo = profileNameInput.value;
            // O ideal é ter uma validação para o email não ser alterado para um já existente
            userData.email = profileEmailInput.value;
            saveUserData(currentUserId, userData);
            profileNameInput.disabled = true;
            profileEmailInput.disabled = true;
            editProfileBtn.classList.remove('d-none');
            saveProfileBtn.classList.add('d-none');
            renderUserInfo(userData);
            showProfileMessage('success', 'Dados atualizados com sucesso!');
        });
    }

    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Deseja sair?')) {
            logoutUser();
            alert('Você saiu com sucesso.');
            window.location.href = '../html/login.html';
        }
    });

    // --- 5. INICIALIZAÇÃO ---
    function initializeProfile() {
        const userData = getUserDataById(currentUserId);
        if (!userData) {
            alert("Erro ao carregar dados do usuário. Por favor, faça login novamente.");
            logoutUser();
            window.location.href = '../html/login.html';
            return;
        }
        renderUserInfo(userData);
        renderPlanoSection(userData);
        renderDietaSection(userData);
        renderTreinoSection(userData);
        renderFeedbackSection(userData);
        switchSection('dados-pessoais');
    }

    initializeProfile();
});