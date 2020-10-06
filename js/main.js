function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
  window.open("https://web.digitalinnovation.one/");
  //window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento) {
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("Página carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
/*
function soma(n1, n2) {
  return n1 + n2;
}

var validar = 0;

function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/
//alert(soma(5, 10));
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for (count = 0; count <= 5; count++) {
  alert(count);
}
*/
/*
var count = 0;
while (count <= 5) {
  console.log(count);
  alert(count);
  count++;
}
*/
/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}
*/
/*
var frutas = [
  { nome: "maça", cor: "vermelha" },
  { nome: "uva", cor: "roxa" },
];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Giovane Costa";
//var n1 = "37";
//var n2 = "10";
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(frase.toLowerCase());
//console.log(frase.replace("Japão", "Brasil"));
//console.log(n1 * n2);
