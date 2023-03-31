const carrossel = document.querySelector('.carrossel-container');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const bolinhas = document.querySelectorAll('.bolinha');

let itemAtual = 0;

// adiciona um listener ao botão de próxima imagem
document.querySelector('#proximo').addEventListener('click', function() {
  if (itemAtual < carrosselItems.length - 1) {
    itemAtual++;
    atualizaCarrossel();
  }
});

// adiciona um listener ao botão de imagem anterior
document.querySelector('#anterior').addEventListener('click', function() {
  if (itemAtual > 0) {
    itemAtual--;
    atualizaCarrossel();
  }
});

// adiciona um listener para cada bolinha
bolinhas.forEach((bolinha, index) => {
  bolinha.addEventListener('click', function() {
    itemAtual = index;
    atualizaCarrossel();
  });
});

// função que atualiza o carrossel com o item atual
function atualizaCarrossel() {
  // remove a classe "ativa" de todas as bolinhas
  bolinhas.forEach((bolinha) => {
    bolinha.classList.remove('ativa');
  });

  // adiciona a classe "ativa" na bolinha correspondente ao item atual
  bolinhas[itemAtual].classList.add('ativa');

  // atualiza a posição do carrossel
  carrossel.style.transform = `translateX(-${itemAtual * 100}%)`;
}
