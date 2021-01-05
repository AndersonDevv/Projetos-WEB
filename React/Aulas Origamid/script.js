const menu = {
    seletor: ".principal"
}

console.log(menu.seletor.toUpperCase())


/* ----------------------ARROW FUNCTION ----------------------*/

//Função normal
function upperName(nome){

    return nome.toUpperCase();
}
console.log(upperName("Anderson Silva"));

//---------Arrow Function-----------
//modo 1
/*
const upperNameArrowFunction  = (nome) => {
    return name.toLocaleUpperCase();
}
*/

//modo 2
const asduasudh  = (nome) => nome.toUpperCase(); 

console.log(asduasudh("Anderson de Abreu da Silva"));

// --------- DESESTRUTURAÇÃO DE OBJETO -------------------
function handleMouse(event){
   // passo 1
   //console.log(event);
    /* 
    o console acima mostra uma série de propriedades
    passíveis de serem acessadas ao clicar em qualquer local
    do documento.
     Vamos analisar a propriedade clientX e clientY
    */
    //passo 2
    //console.log(event.clientX, event.clientY);

    //agora vamos desestruturar

    const {clientX, clientY} = event;
    console.log(clientX,clientY);
}

function handleMouseModo2({clientX, clientY}) {
console.log("Modo 2");
console.log(clientX,clientY)
}

document.addEventListener('click',handleMouse);

document.addEventListener('click',handleMouseModo2);

// ---------------Desestruturação de Array-------------------

const frutas = ["banana","uva"];
console.log(frutas);

const [fruta1,fruta2] = frutas;
console.log(fruta1+fruta2);

//outro exemplo

const useQuadrado = [
    4,
    function (lado){
        return 4 * lado;
    }
]
//trata-se de um array que recebe 4 na posição 0 e na pos 1 uma função
//vamos desestruturar
const [lados,perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// -----------------CONCEITO DE REST SPREAD -----------------
function showList (empresa,clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente,empresa)
    });
}
showList('Google', ["Andre", "Rafael"])
console.log("------------------------")
// mas se eu não quiser passar o array ["Andre", "Rafael"], mas apenas os nomes soltos?
// posso utilizar o operador REST, que são 3 pontinhos (...)
//bs.: posso adiciona quantos itens eu quiser

function showListREST(empresa, ...clientes){
    clientes.forEach((cliente) => {
        console.log(cliente,empresa)
    });
}
showListREST('Google', "Andre", "Rafael");

// --------- USANDO SPREAD ---------------
const numeros = [10,5,20,23];
// resultado NAN const maior = Math.max(numeros);
const maior = Math.max(...numeros)//imprime 20
console.log(maior)

const numeros2 =[33,12, ...numeros, 24,32,36];
console.log(numeros2);

const carro = {
    cor: "Azul",
    portas:4
}
carro.ano = 2020;
console.log(carro.ano);
//carroAno = {...carro, ano: 2009};
//console.log(carroAno)

/* ==================================AULAS DE REACT COMPLETO - PLATAFORMA ORIGAMID ==================================*/

//==================Aula 0103 JavaScript 2=====================
/*
Adicionar  <script type="module" src = "./script.js">
fazendo isso, a linha 115 console.log(carroAno) para de funcionar
ver arquivo js "quadrado.js"
*/

//import {areaQuadrado} from './quadrado.js';
//import {calcularPerimetro} from './quadrado.js';

console.log("//==================Aula 0103 JavaScript 2=====================")
import {areaQuadrado, calcularPerimetro} from './quadrado.js';

console.log("a área do quadrado é: "+areaQuadrado(5));
console.log("O perímetro para quadrado de lado 2: "+perimetro(2)+"\n ")

import quadrados from './quadrado.js';
console.log("A área de um quadrado de lado 5 é: "+quadrados.areaQuadrado(5)+"\n ")
console.log("O perímetro de um quadrado de lado 5 é: "+quadrados.calcularPerimetro(5)+"\n ")

//==================REQUISIÇÕES ASSÍNCRONAS COM FETCH=====================
console.log("==================REQUISIÇÕES ASSÍNCRONAS COM FETCH=====================")
/*var myInit = { method: 'GET',
               mode: 'no-cors'
              };
*/
fetch('https://ranekapi.origamid.dev/json/api/produto')
.then((response) => response.json())
.then((json) => {
    console.log(json);
});

//==FETCH MODO 2=== 

function fetchProdutos (url) {
    const response = fetch(url);
    return response;
}
const produtos = fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");
console.log(produtos)  // imprime "Promise Pending"

async function fetchProdutos2(url) {
    const response = await fetch(url); //tudo que é promessa recebe await
    const json = await response.json;
    
    console.log(response) //agora retorna objeto de resposta, nao promise
    //return response;
    return json;
}
const produtos2 = fetchProdutos2("https://ranekapi.origamid.dev/json/api/produto");



//==================Métodos de Map e Filter=====================

console.log("==================Métodos de Filter=====================");
const preco = [
    'Crédito',
    'R$ 200.00',
    'R$ 400.87',
    'Contas a Pagar',
    'R$ 500',
    'R$ 2012',
    'Meus dados'
]

const precosFiltrados = preco.filter(function (preco, index){
    //console.log(preco,index); //imprime o vetor[i] e i
    console.log(preco.includes("R$")); // se tiver "R$" na string, retorna true;
    return preco.includes("R$")  //se v[i] contém "R$", ele retorna
})
console.log(precosFiltrados)

// fazendo a mesma coisa, mas com arrow function

const precosFiltradosArrowFunction = preco.filter((valorNaPosicaoAtual) => valorNaPosicaoAtual.includes("R$"));
console.log(precosFiltradosArrowFunction);

console.log("==================Métodos de Map ======================");

const precosNumeros = precosFiltradosArrowFunction.map((valor) => 
parseFloat(valor.replace('R$ ','')));
// também posso usar Number no lugar de parseFloat
console.log(precosNumeros)


console.log("==============================================================")