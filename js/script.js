let horas = 0;
let minutos = 0
let segundos = 0;

let tempo = 1000; /// quanto milesimo equivalem a 1 segundos
let cronn;
document.querySelector('#start').addEventListener('click', iniciar)
document.querySelector('#pause').addEventListener('click', pausar)
document.querySelector('#stop').addEventListener('click', parar)



function iniciar() {  // function de iniciar
    timer()
    cronn = setInterval(() => { timer() } , tempo)
}

function pausar() {  // function de pausar 
    clearInterval(cronn)

}
function requireDigit(digit) { // function de requisição, caso o digito não tenha o segundo número, adicione um zero na frente
    if ( digit < 10) { 
        return ('0' + digit)
    }
    else { 
        return (digit)
    }
}

function parar() {  // function de parar
    clearInterval(cronn)
    horas = 0;
    minutos = 0
    segundos = 0;
    document.querySelector('#cron').innerHTML = `00:00:00`

}

function timer() { // função principal 
    segundos++;  // inicia 0 + 1 dos segundos 

    document.querySelector('#cron').innerText = `${requireDigit(horas)}:${requireDigit(minutos)}:${requireDigit(segundos)}` // o formato de como vai sair os numeros
 
    if ( segundos > 60) {  // condição de caso o segundo chegue em 60, ganhe 1 no minuto
        minutos++
        segundos = 0;
    }
    if ( minutos > 60) {  // condição de quando chegar no 60min vire 1h 
        horas++
        minutos = 0;
    }
    
}
 function date() { // function de pegar os dados da hora e caso tiver a noite, fique com fundo preto, caso não fique com fundo vermelho
    let dateToday = new Date()
    let hr = dateToday.getHours()

    if ( hr >= 18 || hr <= 6) { 
        document.querySelector('#body').style.backgroundColor ='black'
    }
} 
date() 


