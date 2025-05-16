export function criarCard(item, copiarPrompt) {
  const card = document.createElement('div');
  card.className = "bg-white p-4 rounded-xl shadow mb-4 text-sm sm:text-base";

  card.innerHTML = `
    <h3 class="text-lg font-bold">${item.titulo}</h3>
    <p class="text-sm text-gray-600 mb-2">${item.descricao}</p>
    <pre class="bg-gray-100 p-2 text-sm rounded overflow-x-auto">${item.prompt}</pre>
    <button class="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Copiar</button>
  `;

  const botao = card.querySelector('button');
  botao.addEventListener('click', () => copiarPrompt(item.prompt, botao));

  return card;
}
