//変数
let positionX;
let positionY;

//全体の初期化(最初に１回だけ呼ばれる)
function etp(){
  //キャンパスをつくる
  createCanvas(windowWidth,windowHeight);
  
  //背景を塗りつぶす
  background(0,0,40);
  
  //座標のんすうをアンバスの中央で初期化
  positionX=width/2;
  positionY=height/2;
  
 //計算と表示
  function draw(){
    //塗りつぶす
    fill(255,positionX/4,positionY/4,50);
    
    //四角形を書く
    rect(positionX,positionY,15,15);
    
    //ランダムな数を選ぶ
    let randomNumber=floor(random(4));
  }
 //0なら右下へ
  if (randomNumber==0){
    positionX+=15;
    positionY+=15;
  }
 //1なら左上へ
  else if (randomNumber==1){
    positionX-=15;
    positionY-=15;
  }
 //2なら左下へ
  else if (randomNumber==2){
    positionX-=15;
    positionY+=15;
  }
 //3なら右上へ
  else if (randomNumber==3){
    positionX+=15;
    positionY-=15;
  }
  
 //座標がキャンバスの外に出たら
  if (
  positionX<0||
  positionX>width||
  positionY<0||
  positionY>height
  ){
    //真ん中に戻す
    positionX=width/2;
    positionY=height/2;
  }
}