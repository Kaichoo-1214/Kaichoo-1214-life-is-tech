// 変数
let pianoImage;
let pianoPlayingImage;
let pianoSound;

// データのロード
function preload() {
  // ピアノの画像
  pianoImage = loadImage('piano_image.png');
  // 演奏中のピアノの画像
  pianoPlayingImage = loadImage('piano_playing_image.png');
  // ピアノのサウンド
  pianoSound = loadSound('piano_sound.mp3');
}

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(500, 500);

  // 画像の基準を真ん中にする
  imageMode(CENTER);
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(0, 0, 40);

  // ピアノのサウンドが再生中だったら
  if (pianoSound.isPlaying()) {
    // 演奏中のピアノの画像を表示する
    image(pianoPlayingImage, 250, 250);
  }
  // それ以外の場合は、ピアノの画像を表示する
  else {
    image(pianoImage, 250, 250);
  }
}

// マウスをクリックしたら
function mouseClicked() {
  // ピアノのサウンドを再生する
  pianoSound.play();
}
