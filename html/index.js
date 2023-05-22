// const tagoi = document.getElementById("tagoi")

// tagoi.innerText = "chao" //muda texto
// tagoi.style.color

// const vetor = ['juan', 'alguien', 'fulano'];

// const div = document.getElementById("div2");

// vetor.forEach((item) => {
//    let div2 = document.createElement('div');
//    div2.innerHTML = item;

//    div.appendChild(div2);
// });

// Obtener el elemento HTML
// Obtener el botón
// 


// /


// Obtener el botón y el elemento del mensaje
// const boton = document.getElementById("miBoton");
// const mensaje = document.getElementById("mensaje");

// // Variable contador inicializada en 0
// let contador = 0;

// // Función para manejar el clic del botón
// function manejarClic() {
//   contador++; // Incrementar el contador
//   if (contador === 5) {
//     mensaje.textContent = "Se alcanzó la cantidad de clics deseada";
//   }
// }

// // Obtener el botón
// const boton = document.getElementById("miBoton");

// // Variable contador inicializada en 0
// let contador = 0;

// // Función para manejar el clic del botón
// function manejarClic() {
//   contador++; // Incrementar el contador
//   if (contador === 10) {
//     alert("Se alcanzó la cantidad de clics deseada");
//   }
// }

// // Agregar evento al botón
// boton.addEventListener("click", manejarClic);


document.addEventListener('DOMContentLoaded', function() {
   var calcularBtn = document.getElementById('botoncalcular');
   calcularBtn.addEventListener('click', calcularMedia);
   
   function calcularMedia() {
      var nota1 = parseFloat(document.getElementById('nota1').value);
      var nota2 = parseFloat(document.getElementById('nota2').value);
      var nota3 = parseFloat(document.getElementById('nota3').value);
      var nome = document.getElementById('nome').value; 
      var media = (nota1 + nota2 + nota3) / 3;
   
      document.getElementById('resultado').innerHTML = `La nota final de ${nome} es:${media.toFixed(1)}`
      }
   });