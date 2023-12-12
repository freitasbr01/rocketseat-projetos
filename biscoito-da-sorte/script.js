// VARIAVEIS DA APLICAÇÃO
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie1 = document.querySelector("#btnCookie1")
const btnReset = document.querySelector("#btnReset")

// EVENTOS
btnCookie1.addEventListener('click', getMessageClick)
btnReset.addEventListener('click', handleResetClick)

// FUNÇÕES
const messages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a esscuridão",
  "Não importa por onde você comece. Só que você comece."
]

function getMessageClick() {
  const randomMessage = Math.floor(Math.random() * messages.length) 
  const drawnMessage = (messages[randomMessage]);

  toggleScreen()
  screen2.querySelector("p").innerText = drawnMessage
}

function handleResetClick() {
toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}



// (19) número aleatorio vezes a quantidade de mensagens no array e arredonda para baixo.

/* (20)
-> Na expressão messages[randomMessage], messages é o array e randomMessage é o índice usado para acessar um elemento específico desse array.
-> Índice se refere à posição de um elemento dentro de um array.
-> Quando temos messages[randomMessage], estamos usando o número gerado por "randomMessage" como um índice para selecionar uma mensagem do array messages.
Por exemplo, se randomMessage for 2, então messages[randomMessage] será “a terceira da lista do array”.
*/
