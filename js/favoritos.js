// js/favoritos.js

function salvarFavorito(prompt) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const existe = favoritos.some(p => p.id === prompt.id);
  if (!existe) {
    favoritos.push(prompt);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert("Adicionado aos favoritos!");
  } else {
    alert("Já está nos favoritos.");
  }
}

function removerFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos = favoritos.filter(p => p.id !== id);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  alert("Removido dos favoritos.");
}

function pegarFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos')) || [];
}

export { salvarFavorito, removerFavorito, pegarFavoritos };
