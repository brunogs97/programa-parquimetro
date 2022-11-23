// criar uma referência ao form e aos elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionando o submit quando for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();  // evita o envio da form

    const tempo = Number(frm.inTempo.value);  // obtém o valor de entrada
    const valor = Number(frm.inValor.value);  

    let troco = 0;
    
    if(tempo < 30) {  // se o tempo digitado for menor que 30 min
        resp1.innerText = `Valor insuficiente.`;
    } else if(tempo == 30 || tempo < 60) {
        if (valor > 1) {
            troco = valor - 1;
            resp1.innerText = `Tempo: 30 min.`;
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}.`;
        } else {
            resp1.innerText = `Tempo: 30 min.`;
        }
    } else if(tempo == 60 || tempo < 120) {  // se o tempo for 60 min ou menor que 120 min
        if (valor < 1.75) {  // se o valor for menor que R$1.75
            resp1.innerText = `Saldo Insuficiente!`
        } else if (valor > 1.75) {  // se o valor digitado for maior que R$1.75
            troco = valor - 1.75;
            resp1.innerText = `Tempo: 60 min.`;
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}.`;
        } else {
            resp1.innerText = `Tempo: 60 min.`;
        }
    } else {
        if (valor < 3.00) {  // se o valor for menor que R$3.00
            resp1.innerText = `Saldo Insuficiente!`
        } else if (valor > 3.00) {  // se o valor digitado for maior que R$3.00
            troco = valor - 3.00;
            resp1.innerText = `Tempo: 120 min.`;
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}.`;
        } else {
            resp1.innerText = `Tempo: 120 min.`;
        }
    }    
})