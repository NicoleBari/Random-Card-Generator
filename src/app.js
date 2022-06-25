/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let tipos = ["♥", "♠", "♣", "♦"];
  let carta = Math.floor(Math.random() * 4);
  document.querySelector(".up").innerHTML = tipos[carta];
  document.querySelector(".down").innerHTML = tipos[carta];
  if (carta == 0 || carta == 3) {
    document.querySelector(".down").style.color = "red";
    document.querySelector(".up").style.color = "red";
  }

  let num = [
    "1",
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
    "K",
    "A"
  ];
  let n = Math.floor(Math.random() * 14);
  document.querySelector("p").innerHTML = num[n];
};
