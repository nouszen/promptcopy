export function criarCard(prompt, copiarCallback) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300';
  
  card.innerHTML = `
    <div class="p-5">
      <div class="flex justify-between items-start">
        <div>
          <span class="inline-block px-2 py-1 text-xs font-semibold rounded-full 
                      ${getCategoryColor(prompt.categoria)} mb-2">
            ${formatCategory(prompt.categoria)}
          </span>
          <h3 class="text-xl font-bold text-gray-800 mb-2">${prompt.titulo}</h3>
        </div>
      </div>
      
      <p class="text-gray-600 mb-4">${prompt.descricao}</p>
      
      <div class="bg-gray-50 p-4 rounded mb-4">
        <pre class="text-sm text-gray-700 whitespace-pre-wrap">${prompt.texto}</pre>
      </div>
      
      <div class="flex justify-between items-center">
        <button class="copy-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
          <i class="fas fa-copy mr-2"></i>Copiar Prompt
        </button>
        <span class="text-xs text-gray-500">ID: ${prompt.id}</span>
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

function getCategoryColor(category) {
  const colors = {
    'negócios': 'bg-blue-100 text-blue-800',
    'marketing': 'bg-purple-100 text-purple-800',
    'escrita': 'bg-green-100 text-green-800',
    'roteiros': 'bg-red-100 text-red-800',
    'design': 'bg-yellow-100 text-yellow-800',
    'programação': 'bg-indigo-100 text-indigo-800',
    'educação': 'bg-teal-100 text-teal-800',
    'saúde': 'bg-pink-100 text-pink-800',
    'tecnologia': 'bg-gray-100 text-gray-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}
