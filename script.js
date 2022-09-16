'use strict';

let btnConfirma = document.querySelector('.confirma');
let btnContagem = document.querySelector('.contagem');
let btnNovoVoto = document.querySelector('.outro');
let displayUrna = document.querySelector('.display');
let Numero = document.querySelector('.numero');
let btnCandidato = document.querySelector('.candidato');
let telaFim = document.querySelector('.fim').textContent;
let resultado = document.querySelector('.resultado');
let tabela = document.querySelector('.tabela');
let numero = function(){
    document.querySelector('.numero').value;
}

let bolso = ['Jair Bolsonaro', 0]
let lula = ['Lula da Silva', 0]
let ciro = ['Ciro Gomes', 0]

//função para retornar candidato a partir do número digitado pelo eleitor
let candidato = function(numero){
    if(numero == 22){
        return bolso;
    }else  if(numero == 13){
        return lula;
    }else  if(numero == 12){
        return ciro;
    }else{
        alert('Número inválido!')
        Numero.value = null;
    }
}

//função do botão confirmar
let confirmar = function(){
    let n = document.querySelector('.numero').value;
    validação(candidato(n));
    Numero.classList.add('ocultar');
    btnNovoVoto.textContent = 'corrige';
    resultado.classList.add('ocultar');
}

//função para o eleitor verificar seu voto para prosseguir ou corrigir
let validação = function( candidato){
    
    displayUrna.innerHTML = `Seu candidato é ${candidato[0]}?`
    btnConfirma.classList.add('ocultar')
    btnCandidato.classList.remove('ocultar')
    btnNovoVoto.classList.remove('ocultar');       
}

//função que confirma o voto para o candidato.
let confirmaCandidato = function(){
    let N = document.querySelector('.numero').value;
    let voto = candidato(N)
    voto[1]++
    console.log(bolso);
    console.log(lula);
    console.log(ciro);
    alert('Seu voto foi confirmado com sucesso!');
    displayUrna.innerHTML = 'Fim!';
    btnNovoVoto.classList.remove('ocultar');
    btnCandidato.classList.add('ocultar');
    Numero.classList.add('ocultar');
    resultado.classList.remove('ocultar');
    btnNovoVoto.textContent = 'voltar ao início';
}

//volta ao início ou corrige o voto.
let back = function(){

    if(!tabela.classList.contains('ocultar')){
        location.reload()
    }else{
    btnConfirma.innerHTML = 'confirmar'
    btnConfirma.classList.remove('ocultar');
    btnNovoVoto.classList.add('ocultar');
    btnCandidato.classList.add('ocultar');
    resultado.classList.add('ocultar');
    tabela.classList.add('ocultar');
    Numero.classList.remove('ocultar');
    displayUrna.textContent = 'Digite o número do seu candidato e clique em "confirma".';
    Numero.value = null;
    }
   
}

//Botão de confirmar candidato.
document.querySelector('.candidato').addEventListener('click', function(){
    confirmaCandidato()
})

//Botão de voltar ou corrigir.
document.querySelector('.outro').addEventListener('click',  function(){
    back();

})

//Botão de confirmar 
document.querySelector('.confirma').addEventListener('click', function(){
    confirmar();
    
})

//Botão confirmar quando tecla enter.
document.addEventListener('keydown', function(evento){
   if(evento.key === 'Enter' && !btnConfirma.classList.contains('ocultar')){
    confirmar();
   }else if(evento.key === 'Enter' && !btnCandidato.classList.contains('ocultar')){
    confirmaCandidato();
   }   
})

 //voltar ou corrigir na tecla backspace.
 document.addEventListener('keydown', function(evento){
    if(evento.key === 'Backspace' && !btnNovoVoto.classList.contains('ocultar')){
     back();
    }  
 })

 //resultado da urna.
document.querySelector('.resultado').addEventListener('click', function(){
    document.querySelector('.totalBolso').textContent = bolso[1];
    document.querySelector('.totalLula').textContent = lula[1];
    document.querySelector('.totalCiro').textContent = ciro[1];
    tabela.classList.remove('ocultar');
    btnNovoVoto.innerHTML = 'novas eleições';
    Numero.classList.add('ocultar')
    btnConfirma.classList.add('ocultar');
    resultado.classList.add('ocultar');
    
})


  