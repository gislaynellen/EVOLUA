document.addEventListener('DOMContentLoaded', function() {
  const depoimentos = [
    {
      nome: "Marina",
      idade: 34,
      profissao: "Professora | Emagrecimento",
      texto: "A EVOLUA transformou minha vida! Perdi 18kg em 6 meses com a combinação perfeita de treinos e dieta personalizados.",
      rating: 5
    },
    {
      nome: "Francisco",
      idade: 65,
      profissao: "Aposentado | Melhorar Resistência",
      texto: "Aos 65 anos, recuperei minha mobilidade e energia. O acompanhamento profissional fez toda diferença na minha evolução.",
      rating: 5
    },
    {
      nome: "Mário",
      idade: 26,
      profissao: "Desenvolvedor | Hipertrofia",
      texto: "Ganhei 7kg de massa muscular em 8 meses. Os treinos evoluíram junto com meu condicionamento!",
      rating: 4
    }
  ];

  const container = document.getElementById('depoimentos-container');
  
  depoimentos.forEach(depoimento => {
    const stars = '★'.repeat(depoimento.rating) + '☆'.repeat(5 - depoimento.rating);
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="depoimento-card">
        <div class="rating">${stars}</div>
        <p class="depoimento-texto">"${depoimento.texto}"</p>
        <div class="depoimento-autor">
          <div class="autor-avatar">${depoimento.nome.charAt(0)}</div>
          <div class="autor-info">
            <h4>${depoimento.nome}, ${depoimento.idade} anos</h4>
            <p>${depoimento.profissao}</p>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Efeitos hover
  const cards = document.querySelectorAll('.depoimento-card');
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