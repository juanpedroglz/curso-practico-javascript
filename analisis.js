
//Funciones Helpers

function calcularMediaAritmetica2(lista) {
  const sumaLista = lista.reduce(function (valoracumulado = 0, actual) {
    return valoracumulado + actual;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numerito) {
    return numerito % 2 === 0;
  }

  //Calculadora de salarios

  function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);
    console.log(lista.length);
  
    if (esPar(lista.length)) {
      console.log("es par");
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const promedioElemento1y2 = calcularMediaAritmetica2([
        personitaMitad1,
        personitaMitad2,
      ]);
  
      return promedioElemento1y2;
    } else {
      console.log("es impar");
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }

  
//Mediana General
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const SalariosColSorted = salariosCol.sort(function (value1, value2) {
  return value1 - value2;
});



const medianaGeneralCol = medianaSalariosCol(SalariosColSorted);

//Mediana del top 10%
const spliceStart = (SalariosColSorted.length * 90) / 100;
const spliceCount = SalariosColSorted.length - spliceStart;


const salariosColTop10 = SalariosColSorted.splice(spliceStart,spliceCount);


const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})
