// *Declarar variable número
let num1 = Number(prompt("Escribe un número para calcularle el factorial: "));

//* Validar que sea un número
while (!isFinite(num1)){num1 = Number(prompt("Ingrese un número válido"))}

//* Calcular factorial
factorial = num1 => {
  if(typeof(num1) == "number" && isFinite(num1)){
    if (num1 > 1){
      return num1 * factorial(num1 - 1);
    }
    else {
      return 1;
    }
  }
}

let c = 30;
//* Imprimir por consola el resultado, con algunos detallitos de color.
console.log(`%cResultado factorial de ${num1} es:`, `color: #c87ee8; font-size: 16px; font-weight: bold`);
console.log(`%c-->${factorial(num1)}`, `color: #2092b6; font-size: 14px; font-weight: bold; font-style: italic`); 