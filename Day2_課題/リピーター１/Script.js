// 変数
let positionX;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(500, 500);

  // 輪郭（りんかく）を消す
  noStroke();
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(0, 0, 40);

  // 四角形の横の位置
  positionX = 0;

  // 横に50回くりかえす
  for(let i = 0; i < 50; i++) {
    // ぬりつぶす
    fill(255, positionX / 2, 150, mouseX - positionX);

    // 四角形を描く
    rect(positionX, 0, 5, 500);

    // 四角形の横の位置をずらす
    positionX += 10;
  }
}
