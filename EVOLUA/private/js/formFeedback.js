document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const cancelBtn = document.getElementById('cancelar-feedback');
    const deleteBtn = document.getElementById('excluir-feedback');
    const urlParams = new URLSearchParams(window.location.search);
    const isEditMode = urlParams.get('edit') === 'true';

    function loadFeedbackData() {
        const userData = getUserData();
        if (userData && userData.feedback) {
            const feedbackData = userData.feedback;
            Object.keys(feedbackData).forEach(key => {
                const element = form.elements[key];
                if (element) {
                     if (element.type === 'radio') {
                        Array.from(form.elements[key]).find(el => el.value === feedbackData[key]).checked = true;
                    } else if (element.type === 'checkbox') {
                        element.checked = (feedbackData[key] === element.value);
                    } else {
                        element.value = feedbackData[key];
                    }
                }
            });
            deleteBtn.style.display = 'inline-block';
        }
    }

    if (isEditMode) {
        loadFeedbackData();
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const feedbackData = Object.fromEntries(formData.entries());

        if (!feedbackData.hasOwnProperty('permissao_publicacao')) {
            feedbackData.permissao_publicacao = 'nao';
        }
        
        const userData = getUserData();
        userData.feedback = feedbackData;
        saveUserData(userData);
        
        alert(isEditMode ? 'Feedback atualizado com sucesso!' : 'Feedback enviado com sucesso! Agradecemos sua opinião.');
        window.location.href = 'perfil.html';
    });

    cancelBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja cancelar?')) {
            window.location.href = 'perfil.html';
        }
    });

    deleteBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir este feedback? Esta ação não pode ser desfeita.')) {
            const userData = getUserData();
            userData.feedback = null;
            saveUserData(userData);
            alert('Feedback excluído com sucesso!');
            window.location.href = 'perfil.html';
        }
    });
});