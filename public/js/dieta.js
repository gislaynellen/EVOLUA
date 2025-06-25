document.addEventListener('DOMContentLoaded', function() {
    const dicas = [
        {
            titulo: "Proteínas Magras",
            descricao: "Inclua fontes de proteína magra em todas as refeições para manter a saciedade e promover a recuperação muscular. Frango, peixes, ovos e leguminosas são excelentes opções.",
            icone: "fas fa-apple-alt",
            imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            titulo: "Hidratação",
            descricao: "Beba pelo menos 2 litros de água por dia. A hidratação adequada melhora o metabolismo, a disposição e a recuperação pós-treino. Leve sempre uma garrafa com você.",
            icone: "fas fa-water",
            imagem: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            titulo: "Frequência Alimentar",
            descricao: "Faça de 5 a 6 refeições menores ao longo do dia em vez de 3 grandes refeições. Isso mantém seu metabolismo ativo e evita picos de fome.",
            icone: "fas fa-clock",
            imagem: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        }
    ];

    const frases = [
        "Assim como a natureza evolui em ciclos, seu corpo evolui com os nutrientes certos. Alimente sua jornada, nutra sua evolução.",
    ];

    const container = document.getElementById('dicas-container');
    
    dicas.forEach(dica => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body text-center p-4">
                    <div class="icon-container">
                        <i class="${dica.icone}"></i>
                    </div>
                    <h3 class="card-title">${dica.titulo}</h3>
                    <p class="card-text">${dica.descricao}</p>
                    <img src="${dica.imagem}" class="card-img-top mt-3" alt="${dica.titulo}">
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    const fraseElement = document.getElementById('frase-motivacional');
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    fraseElement.textContent = randomFrase;

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(117, 18, 126, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});