/* Funcion de operaciones basicas primer punto */
function opBasicas(){
    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var Division = 0;
    a = parseInt( prompt ("Ingrese el primer valor para realizar las operaciones basicas"));
    b = parseInt( prompt ("Ingrese el segundo valor para realizar las operaciones basicas"));
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    Division =  a / b;

    alert ("El resulado de la suma es: " + suma);
    alert ("El resultado de la resta es: " + resta);
    alert ("El resultado de la multiplicación es: " + multiplicacion);
    alert ("El resultado de la división es: " + Division);
}


/* Determinar el mayor de dos numeros ingresados por el usuario */
function nuMayor(){
   var n1 = 0;
   var n2 = 0;
   n1 = parseInt(prompt("Ingrese el primer número"));
   n2 = parseInt(prompt("Ingrese el segundo número"));
   if(total = n1>n2)
   alert('El número mayor es: ' + n1);
else
   alert('El número mayor es: ' + n2);
}


/* Determinar el menor de dos numeros ingresados por el usuario */
function nuMenor(){
    var n1 = 0;
   var n2 = 0;
   n1 = parseInt(prompt("Ingrese el primer número"));
   n2 = parseInt(prompt("Ingrese el segundo número"));
   if(total = n1<n2)
   alert('El número menor es: ' + n1);
else
   alert('El número menor es: ' + n2);
}


/* Determinar si un numero es par o impar */
function parImpar(){
    var N1 = 0;
    N1 = parseInt( prompt("Ingrese el numero a determinar si es par o impar"));
    if(N1/2==0){
        
        alert("El número "+N1+" es par");
    
    }else{
        
        alert("El número "+N1+" es impar");
        
    }
}


/* Determinar el cuadrado de un numero */
function numCuadrado(){
    var a = 0;
    a = parseInt(prompt("Ingrse el numero a sacar el cuadrado"));
    a = a * a;
    alert ("El numero cuadrado es: " + a);
}


/* Determinar el area de un triangulo */
function areaTrian(){
    var B = 0;
    var H = 0;
    var A = 0;
    H = parseInt(prompt("Ingrese el valor de la altura del triangulo"));
    B = parseInt(prompt("Ingrese el valor de la base del triangulo"));
    A = (B * H) /2;
    alert("El área del triangulo es: " + A);
}


/* Determinar los cm de un valor dado en metros por el usuario */
function cenMetros(){
    var c = 0;
    var metro = 0;
    metro = parseInt(prompt("Ingrese el valor del numero en metros"));
    c = ( metro * 100);
    alert ("el valor en centimetros es: " + c);
}


/* Determinar el año en que nacio el usuario ingresando su edad */
function añoEdad (){
    var edad = 0;
    var año = 2022;
    var total = 0;
    edad = parseInt(prompt("Ingrese la edad"));
    total = año - edad;
    alert(" El año en que nació es: "+total);
}
/* Un individuo desea invertir su capital en un banco y requiere
 saber cuanto dinero ganará después de N numero de años, teniendo en 
 cuenta que el banco paga un interés de 2% mensual. */
function bancoN (){
    var n = 0;
    var t=0;
    var c= 0;
    var g = 0;
    var i = 0;
    n = parseInt (prompt("ingrese la cantidad de años"));
    c = parseInt(prompt("ingrese el capital invertido"));
    i = 2/100;
    g = (i*12) * n;
    t = g*c;
    alert("La ganancia del banco es: " + g);
    alert("La ganancia total es: "+ t);
}
/* El colegio ABC requiere un sistema que le permita calcular el promedio de un
alumno que tiene 5 calificaciones en la materia de inglés. las calificaciones
son en escala de 1 a 5, donde reprueba entre 1 y 2.9 y aprueba si es superior a 3 */
function colegioABC(){
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var total= 0;
c1 = parseInt(prompt("ingrese la primera calificación"));
c2 = parseInt(prompt("ingrese la segunda calificación"));
c3 = parseInt(prompt("ingrese la tercera calificación"));
c4 = parseInt(prompt("ingrese la cuarta calificación"));
c5 = parseInt(prompt("ingrese la quinta calificación"));
total = (c1 + c2 + c3 + c4 + c5)/5;
alert ("El promedio del estudiante es: " +total);
if(total>=3)
        alert('El estudiante es aprobado');
    else
        alert('El estudiante es reprobado');

}
/* una fruteria vende manzanas a $4.500 el kilo , 
pemita saber al vendedor cuanto debe pagar un cliente teniendo encuenta que la fruteria tiene estos descuentos
0-2 kilos 0% de descuento, 3-5 kilos 15% de descuento, 6-10 kilos 15% de descuento
10- mas kilos 20% de descuento */
function fruTeria (){
    var kilo = 4500;
    var nkilo = 0;
    var total = 0;
    var des1 = 0;
    var des2 = 0;
    var des3 = 0;
    nkilo = parseInt(prompt("ingrese el numero de kilos"));
    total = kilo * nkilo;
    des1 = (10 * total) / 100;
    des2 = (15 * total) / 100;
    des3 = (20 * total) / 100;
    if (nkilo<=2)
    alert('Su descuento es de 0% el valor  pagar es: ' + total);
    else if (nkilo<=5)
     alert('Su descuento es de 10% el valor  pagar es: ' + des1);
    else if (nkilo<=9 )
      alert('Su descuento es de 15% el valor a pagar es: '+ des2);
    else if (nkilo >= 10)
      alert ('Su descuento es de 20% el valor a pagar es: ' + des3);
}