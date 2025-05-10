// 全体の初期化（最初に一回だけ呼ばれる）
function setup () {
  // キャンバスをつくる
  createCanvas (500, 500);
  }
//計算と表示
function draw() {
  //背景を塗りつぶす
  background(0,0,40);
  
  //テキストのフォント
  textFont('geo');
  
  //テキストの色
  fill(200,255,0);
  
  //テキストの位置
  textAlign(CENTER,CENTER);
  
  //テキストを表示
  text(hour()+":"+minute()+":"+second(),250,250);

}