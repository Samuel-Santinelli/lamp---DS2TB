"use strict"
const lampada = document.getElementById("lampada");
//declarando a variavel idInterval

let  idInterval;

function botoesLigaDesliga(estadoLiga,estadoDesliga){
    const ligar = document.getElementById("ligar");
    const desligar = document.getElementById("desligar");
    // const piscar = document.getElementById("piscar");
    ligar.disabled = estadoLiga;
    desligar.disabled = estadoDesliga;
    // piscar.disabled = estadoPisca;
}

function lampadaInteira(){
    return !lampada.src.includes("quebrada");
}
function ligarLampada(evento){ 
    if(lampadaInteira()){
        lampada.src ="img/ligada.jpg";
        botoesLigaDesliga(true,false);
    }
    if (evento)pararPiscar()
   
}

function lampadaDesligada(){
    return lampada.src.includes("desligada");
}

function trocarImagem(){
    if(lampadaDesligada()){
        ligarLampada();
    }else{
        desligarLampada();
    }
}

function pararPiscar(){
    clearInterval(idInterval)
}
function piscarLampada(){
    pararPiscar()
    // setTimeout (trocarImagem,1000); //setTimeout -> executa uma função 1 vez
     idInterval = setInterval (trocarImagem,1000); // setInterval -> executa uma funcção varias vezes
}

// function pisca(){
    
//     for(let i=0; i<=length; i++){

//         if(ligarLampada){
//             lampada.src ="img/ligada.jpg";
//         }
      
        
//     }
    
// }


function desligarLampada(evento){
    if(lampadaInteira()){
        lampada.src ="img/desligada.jpg";
        botoesLigaDesliga(false,true);
    }
   if(evento) pararPiscar()
}

function quebrarLampada(){
   lampada.src ="img/quebrada.jpg";
   botoesLigaDesliga(true,true);
   
}

//eventos

document.getElementById("ligar")
    .addEventListener("click", ligarLampada);// dois parametros click em uma funcao, ligarLampada que chama
    document.getElementById("piscar")
    .addEventListener("click", piscarLampada); 
    document.getElementById("desligar")
    .addEventListener("click", desligarLampada);
    document.getElementById("lampada")
    .addEventListener("mouseover",ligarLampada);
    document.getElementById("lampada")
    .addEventListener("mouseout",desligarLampada);
    document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada);