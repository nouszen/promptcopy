import { prompts } from '../data/prompts.js';
import { criarCard } from '../components/cardPrompt.js';

function copiarPrompt(texto, botao) {
  navigator.clipboard.writeText(texto).then(() => {
    const original = botao.textContent;
    botao.textContent = 'Copiado!';
    botao.disabled = true;
    setTimeout(() => {
      botao.textContent = original;
      botao.disabled = false;
    }, 1500);
  });
}

function filtrarCategoria(categoria) {
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = '';
  prompts[categoria].forEach(item => {
    const card = criarCard(item, copiarPrompt);
    conteudo.appendChild(card);
  });
}

window.filtrarCategoria = filtrarCategoria;

document.addEventListener('DOMContentLoaded', () => {
  filtrarCategoria('negocios');
});
