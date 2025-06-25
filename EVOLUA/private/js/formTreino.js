document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('treino-form');
    const cancelBtn = document.getElementById('cancelar-treino');
    const deleteBtn = document.getElementById('excluir-treino');
    const urlParams = new URLSearchParams(window.location.search);
    const isEditMode = urlParams.get('edit') === 'true';

    function loadTreinoData() {
        const userData = getUserData();
        if (userData && userData.treino) {
            const treinoData = userData.treino;
            Object.keys(treinoData).forEach(key => {
                const elements = form.elements[key];
                if (elements) {
                    if (elements.type === 'checkbox' || elements.type === 'radio') {
                         if (Array.isArray(treinoData[key])) {
                            const values = treinoData[key];
                             // NodeList de radios precisa ser convertido pra array
                            Array.from(elements).forEach(el => {
                                if (values.includes(el.value)) {
                                    el.checked = true;
                                }
                            });
                        } else { // Rádios únicos
                             Array.from(elements).find(el => el.value === treinoData[key]).checked = true;
                        }
                    } else {
                        elements.value = treinoData[key];
                    }
                }
            });
            deleteBtn.style.display = 'inline-block';
        }
    }

    if (isEditMode) {
        loadTreinoData();
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const treinoData = {};
        formData.forEach((value, key) => {
            if (form.elements[key].type === 'checkbox') {
                if (!treinoData[key]) {
                    treinoData[key] = [];
                }
                treinoData[key].push(value);
            } else {
                treinoData[key] = value;
            }
        });

        const userData = getUserData();
        userData.treino = treinoData;
        saveUserData(userData);
        
        alert(isEditMode ? 'Dados do treino atualizados com sucesso!' : 'Formulário de treino salvo com sucesso!');
        window.location.href = 'perfil.html';
    });

    cancelBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja cancelar? Todas as alterações não salvas serão perdidas.')) {
            window.location.href = 'perfil.html';
        }
    });

    deleteBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir os dados deste treino? Esta ação não pode ser desfeita.')) {
            const userData = getUserData();
            userData.treino = null;
            saveUserData(userData);
            alert('Dados do treino excluídos com sucesso!');
            window.location.href = 'perfil.html';
        }
    });
});