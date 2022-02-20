//Codigo de un cuadrado
console.group("Mensajes del cuadrado");

//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){

    return lado * 4;

} 

perimetroCuadrado()

//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}
//console.log  (`El area del cuadrado es: ${areaCuadrado} cm cuadrados`);

console.groupEnd();


//Codigo de un triangulo
console.group("Mensajes del triangle");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo =4;
const alturaTriangulo = 5.5;*/

//console.log(`Los lados del triandulo miden: Lado uno ${ladoTriangulo1} cm ,
//Lado uno ${ladoTriangulo2} cm  
//y la base mide ${baseTriangulo} cm`);


//console.log(`La altura del triangulo es ${alturaTriangulo} cm` );

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1,lado2,base){

    return lado1 + lado2 + base;
}
//console.log(`El perimetro del cuadrado es: ${perimetroTriangulo} cm`);

//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

function areaTriangulo(base, altura){
    return (base*altura) / 2;
}

//console.log  (`El area del triangulo es: ${areaTriangulo} cm cuadrados`);



console.groupEnd();


//Codigo de un circulo
// console.group("Mensajes del circle");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio){
    return radio * 2;
}
 const PI = Math.PI;
// console.log(`El valor de PI es ${PI}`);

//const perimetroCirculo = diametroCirculo * PI;
//console.log(`El perimetro del cuadrado es: ${perimetroCirculo} cm`);
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);

    return diametro * PI;

}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log  (`El area del triangulo es: ${areaCirculo} cm cuadrados`);

function areaCirculo (radio){
    return (radio * radio) * PI;
}

console.groupEnd();