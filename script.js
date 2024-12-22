"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btnEl = document.querySelector("button");
const rangeNum = document.querySelector("#rangeValue");
const passBox = document.querySelector(".password-box");

btnEl.addEventListener("click", () => {
  const length = +rangeNum.textContent;
  const listOfNum = [];

  for (let i = 0; i < length; i++) {
    const generateRandomNum = Math.floor(Math.random() * characters.length + 1);
    listOfNum.push(characters[generateRandomNum]);
  }
  const generatedPassword = listOfNum.join("");
  passBox.textContent = generatedPassword;
});

passBox.addEventListener("click", () => {
  const password = passBox.textContent;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard");
    });
  } else {
    alert("No password to copy");
  }
});
