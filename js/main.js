window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
function calculatorImc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const idade = document.getElementById("idade").value;
  const nome = document.getElementById("nome").value;
  const sexo = document.getElementById("sexo").value;
  const result = Math.round(peso / (altura * altura));
  let categoria;
  if (result < 18.5) {
    categoria = "Abaixo do peso normal"
  } else if (result > 18.5 && result < 24.9) {
    categoria = "Peso normal"
  } else if (result > 25 && result < 29.9) {
    categoria = "Excesso de peso"
  } else if (result > 30 && result < 34.9) {
    categoria = "Obesidade classe 1"

  } else if (result > 35 && result < 39.9) {
    categoria = "Obesidade classe 2"
  } else {
    categoria = "Obesidade classe 3"
  }
  document.getElementById('result').innerHTML = "<div>Sua categoria é: " + categoria + '</div><div>O seu imc é: ' + result + "</div><div>Sua idade é: " + idade + "</div><div>Seu nome é: " + nome + "</div>Seu sexo é: " + sexo;

}