const precioOriginal = 320;
const descuento = 10;

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;


}

const cupones = ["Juanito10","Juanito20","Juanito30"];

function onClickButtonPriceDiscount(){

   const precio = document.getElementById("inputprecio");
   const preciovalue = precio.value;

   const descuento = document.getElementById("inputdescuento");
   const descuentovalue = descuento.value;

   const inputCupon = document.getElementById("InputCoupon");
   const cuponvalor = inputCupon.value;

   let descuento2;

   if (!cupones.includes(cuponvalor)) {
    alert("El cupón " + cuponvalor + "no es válido");
    
    } else if (cuponvalor === "Juanito10") {
    descuento2 = 10;
    }else if (cuponvalor === "Juanito20") {
    descuento2 = 20;
    } else if (cuponvalor === "Juanito30") {
    descuento2 = 30;
    }

    let descuentofinal = Number(descuento2) + Number(descuentovalue);

   const preciofinal = calcularPrecioConDescuento(preciovalue,descuentofinal);

   console.log({preciovalue, descuentovalue, preciofinal, descuento2, descuentofinal});

   const resultP = document.getElementById("ResultP");
   resultP.innerText=`El precio con descuentazo es ${preciofinal}`;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento

// }
// )

// console.log(`El precio con descuento es: ${precioConDescuento}`);






