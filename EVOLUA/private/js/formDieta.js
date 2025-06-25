document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dieta-form');
    const cancelBtn = document.getElementById('cancelar-dieta');
    const deleteBtn = document.getElementById('excluir-dieta');
    const urlParams = new URLSearchParams(window.location.search);
    const isEditMode = urlParams.get('edit') === 'true';

    function loadDietaData() {
        const userData = getUserData();
        if (userData && userData.dieta) {
            const dietaData = userData.dieta;
            // Preenche todos os campos do formulário com os dados salvos
            Object.keys(dietaData).forEach(key => {
                const elements = form.elements[key];
                if (elements) {
                    if (elements.type === 'checkbox' || elements.type === 'radio') {
                         // Para grupos de checkbox/radio
                        if (Array.isArray(dietaData[key])) {
                            const values = dietaData[key];
                            elements.forEach(el => {
                                if (values.includes(el.value)) {
                                    el.checked = true;
                                }
                            });
                        }
                    } else {
                        elements.value = dietaData[key];
                    }
                }
            });
            deleteBtn.style.display = 'inline-block';
        }
    }
    
    if (isEditMode) {
        loadDietaData();
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const dietaData = {};
        formData.forEach((value, key) => {
            // Agrupa valores de checkboxes
            if (form.elements[key].type === 'checkbox') {
                if (!dietaData[key]) {
                    dietaData[key] = [];
                }
                dietaData[key].push(value);
            } else {
                dietaData[key] = value;
            }
        });

        const userData = getUserData();
        userData.dieta = dietaData;
        saveUserData(userData);
        
        alert(isEditMode ? 'Dados da dieta atualizados com sucesso!' : 'Formulário de dieta salvo com sucesso!');
        window.location.href = 'perfil.html';
    });

    cancelBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja cancelar? Todas as alterações não salvas serão perdidas.')) {
            window.location.href = 'perfil.html';
        }
    });

    deleteBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir os dados desta dieta? Esta ação não pode ser desfeita.')) {
            const userData = getUserData();
            userData.dieta = null;
            saveUserData(userData);
            alert('Dados da dieta excluídos com sucesso!');
            window.location.href = 'perfil.html';
        }
    });
});