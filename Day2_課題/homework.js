// 変数
let positionX;
let positionY;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);

  // 背景をぬりつぶす
  background(255, 255, 224);

  // 輪郭（りんかく）を消す
  noStroke();

  // Y座標を初期化
  positionY = height;
}

// 計算と表示
function draw() {
  // X座標をランダムに決める
  positionX = random(width);

  // Y座標を5ずつへらす
  positionY -= 20;

  // ぬりつぶす
  fill(random(400), random(400), 400, random(300));

  // 円を描く
  ellipse(positionX, positionY, random(50, 150));

  // Y座標がキャンバスの外（上側）にで出たら
  if(positionY < 0) {
    // Y座標をheight（下側）に戻す
    positionY = height;
  }
}
