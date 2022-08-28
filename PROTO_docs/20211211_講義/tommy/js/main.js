document.getElementById('trigger');

document.getElementById('trigger').addEventListener('click', () => {
  document.getElementById('target').textContent = 'ほかむー';
  document.getElementById('trigger').classList.add('hokamura');
});

let userName = 'ローカルベンチャールームのとみー';
console.log(userName);
console.log('こんにちは' + userName + 'さん');
console.log('こんばんは' + userName + 'さん');
console.log('おつかれさま' + userName + 'さん');

userName = 'ローカルベンチャールームのほかむー';
console.log(userName);
console.log('こんにちは' + userName + 'さん');
console.log('こんばんは' + userName + 'さん');
console.log('おつかれさま' + userName + 'さん');

let price = 3600;
const tax = 0.1; // 消費税

price = price * (3 + tax); // 3つの税込金額
console.log(price);
// price = price * 3 + price * 8;
console.log('購入金額：' + price + '円');
console.log(`合計金額：${price}円`); // テンプレートリテラル
price = price + 400;
