// 変数
let positionX;
let positionY;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);

  // 背景をぬりつぶす
  background(0, 0, 40);

  // 座標の変数をキャンバスの中央で初期化
  positionX = width / 2;
  positionY = height / 2;
}

// 計算と表示
function draw() {
  // ぬりつぶす
  fill(random(255), random(255), 255);

  // 円を描く
  ellipse(positionX, positionY, 15);

  // ランダムな数を選ぶ
  let randomNumber = floor(random(4));

  // 0なら、右に進む
  if (randomNumber == 0) {
    positionX += 15;
  }
  // 1なら、左に進む
  else if (randomNumber == 1) {
    positionX -= 15;
  }
  // 2なら、下に進む
  else if (randomNumber == 2) {
    positionY += 15;
  }
  // 3なら、上に進む
  else if (randomNumber == 3) {
    positionY -= 15;
  }
}
