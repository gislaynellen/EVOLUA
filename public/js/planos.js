document.addEventListener('DOMContentLoaded', function() {
    const planoStartPublico = document.getElementById('plano-start-publico');
    const planoProPublico = document.getElementById('plano-pro-publico');

    if (planoStartPublico) {
        planoStartPublico.innerHTML = `
            <p class="plano-valor">R$ 39<small>,90</small></p>
            <p class="mb-0 text-white-50">/mês</p>
        `;
    }

    if (planoProPublico) {
        planoProPublico.innerHTML = `
            <p class="plano-valor">R$ 99<small>,90</small></p>
            <p class="mb-0 text-white-50">/mês</p>
        `;
    }
});