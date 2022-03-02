
function calcularMediaAritmetica1(lista){

    let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){
    
        sumaLista = sumaLista + lista[i];
    
    }
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;


}

function calcularMediaAritmetica2(lista){

    
    const sumaLista = lista.reduce(
        function(valoracumulado = 0, actual){
            return valoracumulado + actual;

        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;


}

function calcularMediaAritmetica2(lista){

    
    const sumaLista = lista.reduce(
        function(valoracumulado = 0, actual){
            return valoracumulado + actual.precio;

        }
    );
    
   

    return sumaLista;


}