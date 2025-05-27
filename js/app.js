// app.js
import { prompts } from '../js/prompts.js';
import { criarCard } from '../js/cardPrompt.js';

// DOM Elements Manager
const DOM = {
  conteudo: document.getElementById('conteudo'),
  loadingIndicator: document.getElementById('loading'),
  searchInput: document.getElementById('busca'),
  categoryButtons: document.querySelectorAll('.categoria'),
  
  showLoading() {
    this.loadingIndicator.style.display = 'block';
    this.conteudo.innerHTML = '';
  },
  
  hideLoading() {
    this.loadingIndicator.style.display = 'none';
  },
  
  displayNoResults(message, icon = 'fa-exclamation-circle', color = 'gray') {
    this.conteudo.innerHTML = `
      <div class="text-center py-10 col-span-full">
        <i class="fas ${icon} text-3xl text-${color}-400 mb-2"></i>
        <p class="text-${color}-500">${message}</p>
      </div>
    `;
  }
};

// Clipboard Manager
const Clipboard = {
  async copy(texto, botao) {
    try {
      await navigator.clipboard.writeText(texto);
      this.showSuccessFeedback(botao);
    } catch (err) {
      this.showErrorFeedback(botao);
      console.error('Failed to copy text: ', err);
    }
  },
  
  showSuccessFeedback(botao) {
    const originalHTML = botao.innerHTML;
    
    botao.innerHTML = '<i class="fas fa-check mr-1"></i> Copiado!';
    botao.classList.add('bg-green-100', 'text-green-800');
    botao.disabled = true;
    
    setTimeout(() => this.resetButton(botao, originalHTML), 2000);
  },
  
  showErrorFeedback(botao) {
    const originalText = botao.textContent;
    botao.textContent = 'Erro ao copiar';
    setTimeout(() => botao.textContent = originalText, 2000);
  },
  
  resetButton(botao, originalHTML) {
    botao.innerHTML = originalHTML;
    botao.classList.remove('bg-green-100', 'text-green-800');
    botao.disabled = false;
  }
};

// Category Manager
const CategoryManager = {
  setActiveCategory(activeCategory) {
    DOM.categoryButtons.forEach(btn => {
      const isActive = btn.textContent.toLowerCase().includes(activeCategory) && activeCategory !== 'todos';
      
      btn.classList.toggle('bg-blue-600', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('hover:bg-blue-50', !isActive);
      btn.classList.toggle('text-blue-600', !isActive);
    });
  }
};

// Prompt Manager
const PromptManager = {
  getAllPrompts() {
    return Object.values(prompts).flat();
  },
  
  filterByCategory(category) {
    return category === 'todos' ? this.getAllPrompts() : prompts[category] || [];
  },
  
  searchPrompts(searchTerm) {
    return this.getAllPrompts().filter(prompt => 
      prompt.titulo.toLowerCase().includes(searchTerm) || 
      prompt.descricao.toLowerCase().includes(searchTerm) ||
      prompt.texto.toLowerCase().includes(searchTerm)
    );
  },
  
  displayPrompts(promptsToShow) {
    if (promptsToShow.length > 0) {
      promptsToShow.forEach(item => {
        const card = criarCard(item, Clipboard.copy.bind(Clipboard));
        DOM.conteudo.appendChild(card);
      });
    } else {
      DOM.displayNoResults('Nenhum prompt encontrado nesta categoria.');
    }
  }
};

// UI Controller
const UIController = {
  filterCategoria(categoria) {
    DOM.showLoading();
    CategoryManager.setActiveCategory(categoria);
    
    setTimeout(() => {
      try {
        const promptsToShow = PromptManager.filterByCategory(categoria);
        PromptManager.displayPrompts(promptsToShow);
      } catch (error) {
        console.error('Error loading prompts:', error);
        DOM.displayNoResults('Erro ao carregar prompts.', 'fa-times-circle', 'red');
      } finally {
        DOM.hideLoading();
      }
    }, 300);
  },
  
  handleSearch() {
    const searchTerm = DOM.searchInput.value.toLowerCase();
    
    if (searchTerm.length < 2) return;
    
    DOM.showLoading();
    
    setTimeout(() => {
      try {
        const filteredPrompts = PromptManager.searchPrompts(searchTerm);
        
        if (filteredPrompts.length > 0) {
          PromptManager.displayPrompts(filteredPrompts);
        } else {
          DOM.displayNoResults(`Nenhum resultado encontrado para "${searchTerm}".`, 'fa-search');
        }
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        DOM.hideLoading();
      }
    }, 300);
  },
  
  init() {
    // Initialize with default category
    this.filterCategoria('todos');
    
    // Add click event to all category buttons
    DOM.categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.filterCategoria(button.textContent.toLowerCase());
      });
    });
    
    // Debounce search input
    let searchTimeout;
    DOM.searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(this.handleSearch.bind(this), 500);
    });
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => UIController.init());