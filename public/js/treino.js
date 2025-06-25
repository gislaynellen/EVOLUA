document.addEventListener('DOMContentLoaded', function() {
    const niveis = [
        {
            titulo: "Básico",
            descricao: "Ideal para iniciantes. Foco em aprender os movimentos corretos e desenvolver consciência corporal.",
            icone: "fas fa-seedling",
            nivel: 1,
            barras: [33, 0, 0] 
        },
        {
            titulo: "Intermediário",
            descricao: "Para quem já domina o básico e quer evoluir. Aumento gradual de intensidade e complexidade.",
            icone: "fas fa-leaf",
            nivel: 2,
            barras: [100, 33, 0]
        },
        {
            titulo: "Avançado",
            descricao: "Desafios intensos para atletas experientes. Treinos complexos com alto volume e intensidade.",
            icone: "fas fa-fire",
            nivel: 3,
            barras: [100, 100, 33]
        }
    ];

    const treinos = [
        {
            titulo: "Divisão por Objetivo",
            descricao: "Treinos específicos para hipertrofia, definição ou resistência, adaptados ao seu biotipo e metas pessoais.",
            icone: "fas fa-bullseye",
            imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            titulo: "Treino em Casa",
            descricao: "Programas completos usando apenas o peso do corpo ou equipamentos mínimos para quem prefere treinar em casa.",
            icone: "fas fa-home",
            imagem: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            titulo: "Acompanhamento Evolutivo",
            descricao: "Seu progresso é monitorado e os treinos são ajustados periodicamente para garantir evolução contínua.",
            icone: "fas fa-chart-line",
            imagem: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        }
    ];

    const niveisContainer = document.getElementById('niveis-container');
    
    niveis.forEach(nivel => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <div class="nivel-card">
                    <div class="icon-container">
                        <i class="${nivel.icone} icon-treino"></i>
                    </div>
                    <h3 class="nivel-title">${nivel.titulo}</h3>
                    
                    <div class="progress-bars">
                        ${nivel.barras.map(percent => `
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${percent}%"></div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="nivel-number">${nivel.nivel}</div>
                    <p class="treino-text">${nivel.descricao}</p>
                </div>
            </div>
        `;
        niveisContainer.appendChild(card);
    });

    const treinosContainer = document.getElementById('treinos-container');
    
    treinos.forEach(treino => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${treino.imagem}" class="card-img-top" alt="${treino.titulo}">
                <div class="treino-card-body">
                    <i class="${treino.icone} icon-treino"></i>
                    <h3 class="treino-title">${treino.titulo}</h3>
                    <p class="treino-text">${treino.descricao}</p>
                </div>
            </div>
        `;
        treinosContainer.appendChild(card);
    });

    const cards = document.querySelectorAll('.card');
    const btnCta = document.querySelector('.btn-gradient');
    
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
    
    btnCta.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    btnCta.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});