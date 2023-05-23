// /**Funcion que obtenga numero menor y como parametro sea numero */

// function obtenerNumero(numero) {
//     let menor = Infinity
//     for (let i = 0; i < numero.length; i++) {
//         if (numero[i] <= menor) {
//             menor = numero[i]
//         }
//     }
//     return (menor)
// }

// console.log(obtenerNumero([10, 20, 30, 40, 50, 60, 70]))

// /*Funcion suma de 2 vectores*/

// function sumarVectores(suma) {
//     let resultado = ""
//     for (let i = 0; i < suma.length; i++) {
//         resultado = parseInt(resultado + suma[i])
//     }
//     return (resultado)
// }

// console.log(sumarVectores([5, 9, 3, 10, 25]))

// /**Funcion false o true */

// function falseTrue(numero, numeros) {

//     for (let i = 0; i < numeros.length; i++) {
//         if ( numeros[i] === numero) {
//             return true
//         }
//     } 
//     return false
// }

// console.log(falseTrue(54, [5, 6, 8, 54, 2, 12]))
// console.log(falseTrue(54, [8, 10, 8, 25, 3, 15]))


// /**Invertir caso (String)*/

// function invertirCaso (caso){
// var cadena = caso.split("");
// for(var i = 0; i <cadena.length; i++){
//     if(cadena[i] === cadena[i].toUpperCase()){
//     cadena[i]= cadena[i].toLowerCase();
//     }else {
//         cadena[i] = cadena[i].toUpperCase();
//     }
// }
// return cadena.join("");
// }

// var palabra = "hOlA"
// console.log("Palabra: "+ palabra)
// console.log("Invertir el caso: "+ invertirCaso(palabra))

// /**Gano (tragamonedas) */

// function tragaPerrasIguales (tragamonedas){
//     for(var i=0; i<5; i++){
//         if(tragamonedas[i] !== tragamonedas[0]){
//             return false
//         }
//     }
//     return true
// }
// var tragamonedas = ["💎","💎","💎","💎","💎","🍌","🍑"]
// console.log("Tragamonedas: "+ tragamonedas)
// console.log("¿Son iguales ambas?: "+ tragaPerrasIguales(tragamonedas))

// /**Estan juntos (personajes) */
//     function estanJuntos(personajes) {
//      for (let i = 0; i < personajes.length; i++) {
//          if(personajes[i]==='Frodo'){
//              let posicion = personajes.indexOf('Frodo')
//              if(personajes[posicion-1] === 'Sam' || personajes[posicion+1] === 'Sam')
//                  estaSalvo = true
//              }
//              else{
//                 estaSalvo = false
//             }
//          }
//      }
//     return estaSalvo
 
    

//  console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) 
//  console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) 
//  console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam'])) 
//  console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) 


