/*Dados estos 5 arreglos que representan las ventas semanales del primer trimestre, correspondientes a 5 vendedores de la empresa: Camila, Franco, Sofía, Matías y Agustina, respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]

Escribir un programa que permita determinar:

Para cada vendedor mostrar su nombre y 
1- su venta máxima indicando semana y mes de la misma.
2- su venta mínima indicando semana y mes de la misma.
3- su promedio trimestral de ventas.
4- su promedio mensual de ventas.


Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre

Tenga en cuenta que cada valor en los arreglos es la venta de una semana, y que cuatro semanas forman un mes.*/

//se declara arreglo nombre de vendedores y ventas
let vendedores: string[] = ["Camila", "Franco", "Sofía", "Matías", "Agustina"];
let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let indice: number = 0;
let tiempo: string[] = [
  "1er semana de Enero",
  "2da semana de Enero",
  "3er semana de Enero",
  "4ta semana de Enero",
  "1er semana de Marzo",
  "2da semana de Marzo",
  "3er semana de Marzo",
  "4ta semana de Marzo"
];
// determinar para cada vendedor su venta maxima

let calcularVentaMax = (nombres: string[], ventas: number[]) => {
  let ventaMax: number = 0;
  let vendedor: string = " ";
  for (indice = 0; indice < 12; indice++) {
    if (ventas[indice] >= ventaMax) {
      ventaMax = ventas[indice];
    }
  }
  return ventaMax;
};

console.log(
  "La venta máxima " +
    vendedores[0] +
    " fue de $ " +
    calcularVentaMax(vendedores, vendedor1)
);
console.log(
  "La venta máxima " +
    vendedores[1] +
    " fue de $ " +
    calcularVentaMax(vendedores, vendedor2)
);
console.log(
  "La venta máxima " +
    vendedores[2] +
    " fue de $ " +
    calcularVentaMax(vendedores, vendedor3)
);
console.log(
  "La venta máxima " +
    vendedores[indice] +
    " fue de $ " +
    calcularVentaMax(vendedores, vendedor4)
);
console.log(
  "La venta máxima " +
    vendedores[indice] +
    " fue de $ " +
    calcularVentaMax(vendedores, vendedor5)
);

// Calcular la venta minima
let calcularVentaMin = (nombres: string[], ventas: number[]) => {
  let ventaMin: number = 1000000;
  let vendedor: string = " ";
  for (indice = 0; indice < 12; indice++) {
    if (ventas[indice] <= ventaMin) {
      ventaMin = ventas[indice];
    }
  }
  return ventaMin;
};

console.log(
  "La venta mínima " +
    vendedores[0] +
    " fue de $ " +
    calcularVentaMin(vendedores, vendedor1)
);
console.log(
  "La venta mínima " +
    vendedores[1] +
    " fue de $ " +
    calcularVentaMin(vendedores, vendedor2)
);
console.log(
  "La venta mínima " +
    vendedores[2] +
    " fue de $ " +
    calcularVentaMin(vendedores, vendedor3)
);
console.log(
  "La venta mínima " +
    vendedores[3] +
    " fue de $ " +
    calcularVentaMin(vendedores, vendedor4)
);
console.log(
  "La venta mínima " +
    vendedores[4] +
    " fue de $ " +
    calcularVentaMin(vendedores, vendedor5)
);
//promedio trimestral

let calcularPromedioTrimestral = (nombres: string[], 
  ventas: number[]) => {
  let sumaTotal: number= 0;  
  let promedio: number;
  for (indice = 0; indice < 12; indice++) {    
       sumaTotal += ventas[indice];
       promedio = sumaTotal/3
  }return promedio;
  }

console.log ("El promedio de ventas trimestral de " + vendedores[0] +
 " es de $ " +calcularPromedioTrimestral(vendedores,vendedor1);
 console.log ("El promedio de ventas trimestral de " + vendedores[1] +
 " es de $ " +calcularPromedioTrimestral(vendedores,vendedor2);
 console.log ("El promedio de ventas trimestral de " + vendedores[2] +
 " es de $ " +calcularPromedioTrimestral(vendedores,vendedor3);
 console.log ("El promedio de ventas trimestral de " + vendedores[3] +
 " es de $ " +calcularPromedioTrimestral(vendedores,vendedor4);
 console.log ("El promedio de ventas trimestral de " + vendedores[4] +
 " es de $ " +calcularPromedioTrimestral(vendedores,vendedor5);



 //calcular promedio mensual

 let calcularPromedioMensual = (nombres: string[], 
  ventas: number[]) => {
  let sumaTotal: number= 0;  
  let promedio: number;
  for (indice = 0; indice < 12; indice++) {    
       sumaTotal += ventas[indice];
       promedio = sumaTotal/12
  }return promedio;
  }

console.log ("El promedio de ventas mensual de " + vendedores[0] +
 " es de $ " +calcularPromedioMensual(vendedores,vendedor1);
 console.log ("El promedio de ventas mensual de " + vendedores[1] +
 " es de $ " +calcularPromedioMensual(vendedores,vendedor2);
 console.log ("El promedio de ventas mensual de " + vendedores[2] +
 " es de $ " +calcularPromedioMensual(vendedores,vendedor3);
 console.log ("El promedio de ventas mensual de " + vendedores[3] +
 " es de $ " +calcularPromedioMensual(vendedores,vendedor4);
 console.log ("El promedio de ventas mensual de " + vendedores[4] +
 " es de $ " +calcularPromedioMensual(vendedores,vendedor5);


