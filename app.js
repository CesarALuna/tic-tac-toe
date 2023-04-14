const Gameboard = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector("#gameboard").innerHTML = boardHTML;
  };

  return {
    render,
  };
})(); // IIFE

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

// our controller
const Game = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "0"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };
  return {
    start,
  };
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  Game.start();
});
