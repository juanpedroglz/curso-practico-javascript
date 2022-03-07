const lista1 = [
1,1,2,3,5,3,4,2,1,4,5,3,1

]

const lista1Count = {};

lista1.map(
    function(elemento){

        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }else{
            lista1Count[elemento] =1;
        }
        

    }
);

const lista1Array = Object.entries(lista1Count).sort(

    function(firstElemento,secondElemento){
        return firstElemento[1] - secondElemento[1]

    }

);

const moda = lista1Array[lista1Array.length -1];