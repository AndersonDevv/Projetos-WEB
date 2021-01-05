/* ==================================AULAS DE REACT COMPLETO - PLATAFORMA ORIGAMID ==================================*/

//==================Aula 0103 JavaScript 2=====================
/*
Adicionar  <script type="module" src = "./script.js">
fazendo isso, a linha 115 console.log(carroAno) para de funcionar
*/
export function areaQuadrado(lado){
    return lado*=lado;
}
console.log(areaQuadrado(5));

export function calcularPerimetro(valorLado){
    return 4*valorLado;
}

const quadrados = {
   areaQuadrado,
   calcularPerimetro
}


export default quadrados;
