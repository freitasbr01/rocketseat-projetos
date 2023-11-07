let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let rest = firstNumber % secondNumber;

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + mult);
alert("A divisão dos dois números é: " + div);
alert("O resto da divisão dos dois números é: " + rest);

if(sum % 2 == 0 ) {
  alert("A soma dos dois números é par: " + sum)
} 
else {
  alert("A soma dos dois números é impar: " + sum)
}

if(firstNumber == secondNumber) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}