let images = ["dice-01.png",
  "dice-02.png",
  "dice-03.png",
  "dice-04.png",
  "dice-05.png",
  "dice-06.png"];
let dice = document.querySelectorAll("img");

const roll = () => {
  dice.forEach((dice) => {
    dice.classList.add("rolling");
  });
  setTimeout(() => {
    dice.forEach((dice) => {
      dice.classList.remove("rolling");
    });
    let diceValue = Math.floor(Math.random() * 6);
    console.log(diceValue);
    document.querySelector("#diceImage").setAttribute("src", `imgs/${images[diceValue]}`);
    document.querySelector("#result").innerHTML = `Seu resultado foi: ${diceValue + 1}`;
  }, 1000);
}
roll();