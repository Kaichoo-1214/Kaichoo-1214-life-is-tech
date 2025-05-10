let capture;

function setup(){
  createCanvas(windowWidth,windowHeight);
  capture=createCapture(VIDEO);
  capture.hide();
  }

function draw(){
  
  capture.loadPixels();
  
  let pixels=capture.pixel;
  
  for(let y=0;y<capture.height;y++){
    for(let x=0;x<capture.width;y++){
      let i=(x+y*capture.width)*4;
      //ピクセルを書き換える
      let red =pixels[i];
      let green=pixels[i+1];
      let blue =pixels[i+2];
      let gray =(red+green+blue)/3;
      piels[i]  =gray*0.9;
      piels[i+1]=gray*0.7;
      piels[i+2]=gray*0.4;
      piels[i+3]=25;
      }
    }
  }
