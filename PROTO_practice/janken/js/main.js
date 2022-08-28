const janken = ["ぐー", "ちょき", "ぱー"];
const jankenImg = ["img/janken_0.png", "img/janken_1.jpg", "img/janken_2.jpg"];

const prayerJanken = document.getElementById("prayerJanken");
const prayerImg = document.getElementById("prayerImg");
const comJanken = document.getElementById("comJanken");
const comImg = document.getElementById("comImg");
const startButton = document.getElementById("startButton");
const resultText = document.getElementById("resultText");

startButton.addEventListener("click", () => {
  // セレクトボックスの値を数値で取得
  let prayerHand = prayerJanken.selectedIndex;

  //　comHandがランダムで変わるようにする
  //　最大値は配列の「要素数」
  let comHand = Math.floor(Math.random() * janken.length);
  // comJanken.textContent = janken[comHand];

  prayerImg.src = jankenImg[prayerHand];
  comImg.src = jankenImg[comHand];

  let result;

  // 結果の判定
  if (comHand - prayerHand === 0) {
    result = "あいこ、もう１回！";
  } else if (comHand - prayerHand === 1 || comHand - prayerHand === -2) {
    result = "あなたの勝ち！！";
  } else {
    result = "あなたの負け・・";
  }
  resultText.textContent = result;
});
