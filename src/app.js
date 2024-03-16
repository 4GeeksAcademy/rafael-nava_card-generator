/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

//esta funcion estara disponible cuando el cotenido de mi ventana este totalmente cargado
window.onload = function() {
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  //obtener las referencias de mi html donde afectare su valor
  let cartaArriba = document.querySelector("#cartaArriba");
  let cartaCentro = document.querySelector("#cartaCentro");
  let cartaAbajo = document.querySelector("#cartaAbajo");
  let boton = document.querySelector(".boton");

  //crear una funcion que genere valores aleatoreos
  function generarcarta() {
    //esto sera igual = a mi arreglo "palos"[posicion(dada por math random por el tamaño del arreglo)]
    let palosRandom = palos[Math.floor(Math.random() * palos.length)];
    let valoresRandom = valores[Math.floor(Math.random() * valores.length)];
    // si palosrandom es igual a corazon o diamante entonces afecta el color del texto a rojo
    if (palosRandom === "♥" || palosRandom === "♦") {
      carta.style.color = "red";
    } else if (palosRandom === "♠" || palosRandom === "♣") {
      carta.style.color = "black";
    }
    // el contenido de la referencia traida de mi html sera igual al resultado de palosrandom
    cartaArriba.textContent = palosRandom;
    cartaCentro.textContent = valoresRandom;
    cartaAbajo.textContent = palosRandom;
  }
  // el boton de mi html activara la funcion generarcarta al hacer click
  boton.addEventListener("click", generarcarta);
};
