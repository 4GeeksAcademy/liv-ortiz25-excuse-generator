/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateExcuse() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomwho = who[Math.floor(Math.random() * who.length)];

  let randomaction = action[Math.floor(Math.random() * action.length)];

  let randomwhat = what[Math.floor(Math.random() * what.length)];

  let randomwhen = when[Math.floor(Math.random() * when.length)];

  document.getElementById(
    "excuse"
  ).innerHTML = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}.`;
};
