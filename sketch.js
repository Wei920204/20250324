let button1, button2, button3;
let sprite1 = false, sprite2 = false, sprite3 = false;
let sprite1Images = [];
let sprite2Images = [];
let sprite3Images = [];
let currentFrame1 = 0;
let currentFrame2 = 0;
let currentFrame3 = 0;
let frameRate = 5; // 動畫速度
let sprite1Sheet, sprite2Sheet, sprite3Sheet;
let iframe;

function preload() {
  sprite1Sheet = loadImage('1_all.png');
  sprite2Sheet = loadImage('2_all.png');
  sprite3Sheet = loadImage('3_all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 提取 sprite1 的小圖片
  for (let i = 0; i < 6; i++) {
    sprite1Images[i] = sprite1Sheet.get(i * 36, 0, 36, 36);
  }
  
  // 提取 sprite2 的小圖片
  for (let i = 0; i < 6; i++) {
    sprite2Images[i] = sprite2Sheet.get(i * 38, 0, 38, 34);
  }

  // 提取 sprite3 的小圖片
  for (let i = 0; i < 3; i++) {
    sprite3Images[i] = sprite3Sheet.get(i * 28, 0, 28, 38);
  }
  
  button1 = createButton('自我介紹');
  button1.position(100, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(showSprite1);
  button1.mouseOut(hideSprite1);
  button1.mousePressed(showIframe1);

  button2 = createButton('作品簡介');
  button2.position(220, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(showSprite2);
  button2.mouseOut(hideSprite2);
  button2.mousePressed(showIframe2);

  button3 = createButton('筆記說明');
  button3.position(340, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(showSprite3);
  button3.mouseOut(hideSprite3);

  button4 = createButton('測驗題');
  button4.position(460, 50);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(showSprite3);
  button4.mouseOut(hideSprite3);

  iframe = createElement('iframe');
  iframe.position(windowWidth * 0.1, windowHeight * 0.2);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
  iframe.hide();
}

function draw() {
  background(220);
  
  if (sprite1) {
    image(sprite1Images[currentFrame1], 50, 50);
    if (frameCount % frameRate == 0) {
      currentFrame1 = (currentFrame1 + 1) % sprite1Images.length;
    }
  }
  if (sprite2) {
    image(sprite2Images[currentFrame2], 50, 50);
    if (frameCount % frameRate == 0) {
      currentFrame2 = (currentFrame2 + 1) % sprite2Images.length;
    }
  }
  if (sprite3) {
    image(sprite3Images[currentFrame3], 50, 50);
    if (frameCount % frameRate == 0) {
      currentFrame3 = (currentFrame3 + 1) % sprite3Images.length;
    }
  }
}

function showSprite1() {
  sprite1 = true;
}

function hideSprite1() {
  sprite1 = false;
}

function showSprite2() {
  sprite2 = true;
}

function hideSprite2() {
  sprite2 = false;
}

function showSprite3() {
  sprite3 = true;
}

function hideSprite3() {
  sprite3 = false;
}

function showIframe1() {
  iframe.attribute('src', 'https://wei920204.github.io/20250317/');
  iframe.show();
}

function showIframe2() {
  iframe.attribute('src', 'https://wei920204.github.io/20250310/');
  iframe.show();
}
