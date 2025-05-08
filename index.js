// Hàm tạo số ngẫu nhiên từ 1 đến 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Hàm cập nhật ảnh xúc xắc theo số ngẫu nhiên
function updateDiceImage(playerSelector, diceNumber) {
  const imagePath = `images/dice${diceNumber}.png`;
  document.querySelector(playerSelector).setAttribute("src", imagePath);
}

// Gieo xúc xắc cho cả hai người chơi
const player1Roll = rollDice();
const player2Roll = rollDice();

// Cập nhật hình ảnh xúc xắc
updateDiceImage(".img1", player1Roll);
updateDiceImage(".img2", player2Roll);

// Hiển thị kết quả
const heading = document.querySelector("h1");
if (player1Roll > player2Roll) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (player2Roll > player1Roll) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}
