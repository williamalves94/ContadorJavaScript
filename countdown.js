'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2); // slice(2) corta dois digitos da esquerda pra direita, e slice(-2) corta dois digitos da direita pra esquerda.

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60; // divide por 60 e o resto da divisão armazena na qtdSegundos.
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60); 
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)); 
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)); 

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);  // o clearInterval() limpa o timer configurado pela função setInterval(). Ele desativa a função definida pelo temporizador.
    
    const contar = () => {
        if (tempo == 0) {
            pararContagem();  // se o tempo for menor que 0, ele para a contagem.
        }    
        
        atualizar (tempo);
        tempo--; 
    }
    
    const id = setInterval(contar, 1000);  // a cada segundo vai ser executada a callback.
    
}

const tempoRestante = () => {
    // 1 de janeiro de 1970
    const dataEvento = new Date ('2020-10-27 17:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());