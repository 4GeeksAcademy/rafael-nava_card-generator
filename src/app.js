/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

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
  let carta = document.querySelector("#card");
  let arriba = document.querySelector("#arriba");
  let centro = document.querySelector("#centro");
  let abajo = document.querySelector("#abajo");
  let boton = document.querySelector(".boton");

  function generarcarta() {
    let palosrandom = palos[Math.floor(Math.random() * palos.length)];
    let valoresrandom = valores[Math.floor(Math.random() * valores.length)];

    arriba.textContent = palosrandom;
    centro.textContent = valoresrandom;
    abajo.textContent = palosrandom;

    if (palosrandom === "♥" || palosrandom === "♦") {
      card.style.color = "red";
    } else if (palosrandom === "♠" || palosrandom === "♣") {
      card.style.color = "black";
    }
  }
  boton.addEventListener("click", generarcarta);
};
