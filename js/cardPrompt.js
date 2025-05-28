export function criarCard(prompt, copiarCallback) {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <div>
          <span class="category-badge ${getCategoryClass(prompt.categoria)}">
            ${formatCategory(prompt.categoria)}
          </span>
          <h3 class="card-title">${prompt.titulo}</h3>
        </div>
      </div>
      
      <p class="card-description">${prompt.descricao}</p>
      
      <div class="prompt-container">
        <pre class="prompt-text">${prompt.texto}</pre>
      </div>
      
      <div class="card-footer">
        <button class="copy-btn">
          <i class="fas fa-copy"></i>Copiar Prompt
        </button>
        <span class="prompt-id">ID: ${prompt.id}</span>
      </div>
    </div>
  `;

  configurarBotaoCopiar(card, prompt, copiarCallback);
  return card;
}

function configurarBotaoCopiar(card, prompt, callback) {
  const copyBtn = card.querySelector('.copy-btn');
  copyBtn.addEventListener('click', () => {
    callback(prompt.texto, copyBtn);
  });
}

function formatCategory(category) {
  const categories = {
    'negócios': 'Negócios',
    'marketing': 'Marketing',
    'escrita': 'Escrita Criativa',
    'roteiros': 'Roteiros',
    'design': 'Design',
    'programação': 'Programação',
    'educação': 'Educação',
    'saúde': 'Saúde',
    'tecnologia': 'Tecnologia'
  };
  return categories[category] || category;
}

function getCategoryClass(category) {
  const categoryClasses = {
    'negócios': 'category-business',
    'marketing': 'category-marketing',
    'escrita': 'category-writing',
    'roteiros': 'category-scripts',
    'design': 'category-design',
    'programação': 'category-programming',
    'educação': 'category-education',
    'saúde': 'category-health',
    'tecnologia': 'category-technology'
  };
  return categoryClasses[category] || 'category-default';
}
