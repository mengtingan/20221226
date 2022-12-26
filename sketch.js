//產生變數，生成大小不一，不同位置，相同模樣的臉
//var face_size, face_x,  face_y
var face_x = []
var face_y = []
var face_size = []
var face_num = 5//產生5個相同圖形
var color = []

//宣告變數加入音樂
var song
var songIsplay=false//設定此變數為false,收到按下滑鼠把變數改為true,音樂播放
var amp
var vol
function preload(){
  song = loadSound("Put It - TrackTribe.mp3");
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)

for(var i=0;i<face_num;i++){
  face_size[i] = random(100,400)//臉的大小100~400
  face_x[i] = random(0,width)
  face_y[i] = random(0,height)
  color = random(0,255)
  }
}


function draw() {
  background("#ffe6a7");//背景
  for(var j=0;j<face_num;j++){
    push()
      var f_s = face_size[j]
        translate(face_x[j],face_y[j])//將圓心(0,0)移動到畫布正中心
        noStroke()//去除框線
        //身體
        fill(78,188,224)//身體顏色
        ellipse(-f_s/2,0,f_s/2)
        ellipse(f_s/2,0,f_s/2.85,f_s/2)
        rectMode(CENTER)//將原點設在方形中心
        rect(0,0,f_s,f_s/2)
        //尾巴
        //stroke(0)
        fill(78,188,224)
        beginShape()
          curveVertex(f_s/8,f_s)
          curveVertex(f_s/2,-f_s/4)   
          curveVertex(f_s/1.6,0)
          curveVertex(f_s/5,f_s)
        endShape()
        //耳朵
        stroke(0)
        fill(78,188,224)
        beginShape()
          curveVertex(-f_s/2.22,f_s/4*5)
          curveVertex(-f_s/1.74,-f_s/5)
          curveVertex(-f_s/3.33,-f_s/5)
          curveVertex(-f_s/2.22,f_s/4*5)
        endShape()
        noStroke()
        //身體紋路(左到右)
        fill(55,140,182)
        beginShape()
          curveVertex(-f_s/3.8,-f_s/4*5)
          vertex(-f_s/3.8,-f_s/4)
          vertex(-f_s/5.33,-f_s/4)
          curveVertex(-f_s/3.8,-f_s/4*5)
        endShape()
        beginShape()
          curveVertex(-f_s/7.27,-f_s/4*5)
          vertex(-f_s/7.27,-f_s/4)
          vertex(-f_s/16,-f_s/4)
          curveVertex(-f_s/7.27,-f_s/4*5)
        endShape()
        beginShape()
          curveVertex(f_s/80,-f_s/4*5)
          vertex(f_s/80,-f_s/4)
          vertex(f_s/11.4,-f_s/4)
          curveVertex(f_s/80,-f_s/4*5)
        endShape()
        beginShape()
          curveVertex(f_s/7.27,-f_s/4*5)
          vertex(f_s/7.27,-f_s/4)
          vertex(f_s/4.7,-f_s/4)
          curveVertex(f_s/7.27,-f_s/4*5)
        endShape()
        beginShape()
          curveVertex(f_s/3.47,-f_s/4*5)
          vertex(f_s/3.47,-f_s/4)
          vertex(f_s/2.75,-f_s/4)
          curveVertex(f_s/3.47,-f_s/4*5)
        endShape()
        beginShape()
          curveVertex(f_s/2.35,-f_s/4*5)
          vertex(f_s/2.35,-f_s/4)
          vertex(f_s/2,-f_s/4)
          curveVertex(f_s/2.35,-f_s/4*5)
        endShape() 
        //眼睛
        fill(0)
        ellipse(-f_s/1.81+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/40+map(mouseY,0,height,-f_s/40,f_s/12),f_s/13.33,f_s/8.88)
        
        //腳
        fill(78,190,227)
        ellipse(-f_s/2.22,f_s/3.7,f_s/10,f_s/6.15)
        ellipse(-f_s/4,f_s/3.7,f_s/10,f_s/6.15)
        ellipse(-f_s/20,f_s/3.7,f_s/10,f_s/6.15)
        ellipse(f_s/6.15,f_s/3.7,f_s/10,f_s/6.15)
        ellipse(f_s/2.75,f_s/3.7,f_s/10,f_s/6.15)
        ellipse(f_s/1.9,f_s/3.7,f_s/10,f_s/6.15) 
        //腮紅
        fill(252,93,98) 
        ellipse(-f_s/2.22,f_s/20,f_s/10,f_s/20)  
        //嘴巴
        fill(0)
        arc(-f_s/1.428,f_s/40,f_s/10,f_s/10,0,180)//下弧
        fill(78,188,224)
        arc(-f_s/1.428,f_s/40,f_s/10-3,f_s/13,0,180)//上弧
        if(mouseIsPressed)
        {   //mouseIsPressed為true，代表有按下滑鼠
          fill(252,93,98)
          arc(-f_s/1.428,f_s/40,f_s/10,f_s/10,0,180) //上弧

        }
        else
        {   //mouseIsPressed為false，代表沒有按下滑鼠
          fill(0)
            arc(-f_s/1.428,f_s/40,f_s/10,f_s/10,0,180)//下弧
            fill(78,188,224)
            arc(-f_s/1.428,f_s/40,f_s/10-3,f_s/13,0,180)//上弧
        }
    
    noFill()    
      pop()
  }
}
