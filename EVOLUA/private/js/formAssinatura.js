document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('assinatura-form');
    const cancelBtn = document.getElementById('cancelar-assinatura');
    const paymentRadios = document.querySelectorAll('input[name="forma_pagamento"]');
    const cartaoDiv = document.getElementById('dados-cartao');
    const pixDiv = document.getElementById('dados-pix');
    const cartaoInputs = cartaoDiv.querySelectorAll('input');
    const urlParams = new URLSearchParams(window.location.search);
    const isEditMode = urlParams.get('edit') === 'true';

    if (isEditMode) {
        const userData = getUserData();
        if (userData.plano) {
            form.plano.value = userData.plano.plano;
            form.forma_pagamento.value = userData.plano.forma_pagamento;
        }
    }
    
    function togglePaymentFields() {
        const selectedMethod = document.querySelector('input[name="forma_pagamento"]:checked').value;
        if (selectedMethod === 'cartao') {
            cartaoDiv.style.display = 'block';
            pixDiv.style.display = 'none';
            cartaoInputs.forEach(input => input.required = true);
        } else {
            cartaoDiv.style.display = 'none';
            pixDiv.style.display = 'block';
            cartaoInputs.forEach(input => input.required = false);
        }
    }

    paymentRadios.forEach(radio => radio.addEventListener('change', togglePaymentFields));

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const assinaturaData = {
            plano: formData.get('plano'),
            forma_pagamento: formData.get('forma_pagamento')
        };
        
        const userData = getUserData();
        userData.plano = assinaturaData;
        saveUserData(userData);

        alert('Pagamento aceito! Obrigada por escolher o plano ' + (assinaturaData.plano === 'start' ? 'EVOLUA Start.' : 'EVOLUA Fit.'));
        window.location.href = 'perfil.html';
    });

    cancelBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja cancelar?')) {
            window.location.href = 'perfil.html';
        }
    });

    togglePaymentFields();
});