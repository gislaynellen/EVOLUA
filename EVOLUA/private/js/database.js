/**
 * Pega todos os dados do nosso "banco de dados" (localStorage).
 * Se não existir, cria uma estrutura inicial.
 * @returns {object} O banco de dados completo.
 */
function getDatabase() {
    const db = localStorage.getItem('evoluaDB');
    if (!db) {
        // Agora o banco de dados começa vazio, sem usuários pré-cadastrados.
        const initialDB = {
            usuarios: {} // Objeto para guardar múltiplos usuários por ID.
        };
        localStorage.setItem('evoluaDB', JSON.stringify(initialDB));
        return initialDB;
    }
    return JSON.parse(db);
}

/**
 * Salva o objeto completo do banco de dados no localStorage.
 * @param {object} db - O objeto do banco de dados a ser salvo.
 */
function saveDatabase(db) {
    localStorage.setItem('evoluaDB', JSON.stringify(db));
}

// --- NOVAS FUNÇÕES DE SESSÃO E USUÁRIO ---

/**
 * Salva o ID do usuário que acabou de logar na sessão do navegador.
 * @param {number} userId - O ID do usuário logado.
 */
function setCurrentUserId(userId) {
    sessionStorage.setItem('currentUserId', userId);
}

/**
 * Pega o ID do usuário que está atualmente logado.
 * @returns {number | null} O ID do usuário ou null se ninguém estiver logado.
 */
function getCurrentUserId() {
    const userId = sessionStorage.getItem('currentUserId');
    return userId ? Number(userId) : null;
}

/**
 * Limpa a sessão do usuário (faz o logout).
 */
function logoutUser() {
    sessionStorage.removeItem('currentUserId');
}

/**
 * Pega os dados de um usuário específico pelo ID.
 * @param {number} userId - O ID do usuário.
 * @returns {object | null} Os dados do usuário ou null se não for encontrado.
 */
function getUserDataById(userId) {
    const db = getDatabase();
    return db.usuarios[userId] || null;
}

/**
 * Salva os dados atualizados de um usuário específico.
 * @param {number} userId - O ID do usuário.
 * @param {object} userData - Os dados atualizados do usuário.
 */
function saveUserData(userId, userData) {
    const db = getDatabase();
    db.usuarios[userId] = userData;
    saveDatabase(db);
}