/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//script para os ScrollMagic

document.addEventListener('DOMContentLoaded', () => {
   let controller = new ScrollMagic.Controller();


   let scene = new ScrollMagic.Scene({
      triggerElement: '.servicos-titulo-h3',
      triggerHook: 0.9, // mostrar, quando rolou 10% para exibição
      duration: "80%", // ocultar 10% antes de sair da visualização (80% + 10% da parte inferior)
      offset: 50 // mova o gatilho para o centro do elemento
   })
           .setClassToggle('.servicos-titulo-h3', 'servicos-titulo-efeito')
           .addTo(controller);


   let hrleft = new ScrollMagic.Scene({
      triggerElement: '.hr-left',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
   })
           .setClassToggle('.hr-left', 'hr-show')
           .addTo(controller);
   
   let hrright = new ScrollMagic.Scene({
      triggerElement: '.hr-right',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
   })
           .setClassToggle('.hr-right', 'hr-show')
           .addTo(controller);
   
   let boxleft = new ScrollMagic.Scene({
      triggerElement: '.servicos-box1',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
   })
           .setClassToggle('.servicos-box1', 'box1show')
           .addTo(controller);
   
   let boxright = new ScrollMagic.Scene({
      triggerElement: '.servicos-box2',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
   })
           .setClassToggle('.servicos-box2', 'box1show')
           .addTo(controller);
})

//script para suavizar a rolagem da pagine quando clicar no link ancora do menu
// $('#topo a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();
//
//     const hash = this.hash;
//
//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
//   }
// });

//do slide home
//var slideItem = 0;
//var tempo;
//window.onload = function(){tempo=
//setInterval(passarSlide,4000);
//var slide = document.getElementById("slideshow").offsetWidth;
//var objs = document.getElementsByClassName("slide");
//for(var i=0; i< objs.length; i++){
//objs[i].style.width = slide+'px';
//}
//}

//function passarSlide(){
//var slide = document.getElementById("slideshow").offsetWidth; //armazena o valor de width na variave slide
////monta uma condiçao para verificar a posicao do indice. se o indice for maior ou igual a ultima posicao, indice recebe zero e volta ao inicio
//
//if( slideItem >=3){
//
//slideItem =0;
//} else {
//
//slideItem++;
//}
//document.getElementById("slideArea").style.marginLeft = "-"+(slide * slideItem)+ "px"; // id nao possui array
////document.getElementsByClassName("slideArea")[0].style.marginLeft = "-"+(slide * slideItem)+"px"; 
//}
//
//function avancarSlide(){
//var slide = document.getElementById("slideshow").offsetWidth; //armazena o valor de width na variave slide
////monta uma condiçao para verificar a posicao do indice. se o indice for maior ou igual a ultima posicao, indice recebe zero e volta ao inicio
//
//if( slideItem >=3){
//
//slideItem =0;
//} else {
//
//slideItem++;
//}
//document.getElementById("slideArea").style.marginLeft = "-"+(slide * slideItem)+ "px"; // id nao possui array
////document.getElementsByClassName("slideArea")[0].style.marginLeft = "-"+(slide * slideItem)+"px"; 
//clearInterval(tempo);
//
//tempo = setInterval(passarSlide, 4000);
//
//}
//
//function voltarSlide(){
//var slide = document.getElementById("slideshow").offsetWidth; //armazena o valor de width na variave slide
////monta uma condiçao para verificar a posicao do indice. se o indice for maior ou igual a ultima posicao, indice recebe zero e volta ao inicio
//
//if( slideItem <=0){
//
//slideItem =3;
//} else {
//
//slideItem--;
//}
//document.getElementById("slideArea").style.marginLeft = "-"+(slide * slideItem)+ "px";
//
//clearInterval(tempo);
//
//tempo = setInterval(passarSlide, 4000);
//}