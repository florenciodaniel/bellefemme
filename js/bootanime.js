/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//exemplo do arquivo original 
//
// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash

/*const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 100));
}*/
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const boot_flip = document.querySelectorAll('[data-boot_flip]');
const animation_boot_flip = 'data-boot_flip';

function data_boot_flip() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.80);
  boot_flip.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animation_boot_flip);
    } else {
      element.classList.remove(animation_boot_flip);
    }
  })
}

data_boot_flip();

if(boot_flip.length) {
  window.addEventListener('scroll', debounce(function() {
    data_boot_flip();
  }, 100));
}
//----------------

const boot_aparecer = document.querySelectorAll('[data-boot_aparecer]');
const animation_boot_aparecer = 'data-boot_aparecer';

function data_boot_aparecer() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.80);
  boot_aparecer.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animation_boot_aparecer);
    } else {
      element.classList.remove(animation_boot_aparecer);
    }
  })
}

data_boot_aparecer();

if(boot_aparecer.length) {
  window.addEventListener('scroll', debounce(function() {
    data_boot_aparecer();
  }, 100));
}