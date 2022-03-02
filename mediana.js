function calcularMediaAritmetica2(lista){

    
    const sumaLista = lista.reduce(
        function(valoracumulado = 0, actual){
            return valoracumulado + actual;

        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;


}


const lista1 =[
    100,
    200,
    500,
    400000000

];






function esPar(numerito){

    if(numerito % 2 === 0){

        return true;

    }else{
        return false;
    }

}






function ObtenerMediana(lista){

    

    const mitadLista1 = parseInt(lista.length / 2);

    lista.sort(function(a, b) {
         return a - b;
      });
    
    
      if(esPar(lista.length)){

        console.log("Es par");
       
        const elemento1 = lista[mitadLista1];
        const elemento2 = lista[mitadLista1 - 1]
       
       const promedioElemento1y2 = calcularMediaAritmetica2([
           elemento1,
           elemento2
       ]);
       
       return promedioElemento1y2;
      
       
       
       
       }else{
           console.log("Es impar");
       
              return lista[mitadLista1];
           
       
       }

}

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);