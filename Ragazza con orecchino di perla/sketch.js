function setup() {
  createCanvas(500, 700);
}

// parametri per controllare il movimento delle fasce
let amplitudeDeg = 7;   // ampiezza dell'oscillazione in gradi
let speed = 0.015;        // velocità dell'oscillazione
let pivotOffset = 30;    // quanto sopra al vertice mettere il pivot di rotazione

function draw() {
  background("#000000");

push ();
  fill(255);
  textSize(20);
  //text("mouseX: " + mouseX + ",mouseY: " + mouseY,20,20);
pop();

  // viso
  fill ("#E9CEBB");
  triangle (111,195,223,264,134,391);

  // fascia piccola azzurra
  fill ("#80A7BF");
  triangle (110,190,203,138,290,197);

  // fascia gialla piccola
  fill ("#E7D397");
  triangle (294,127,213,134,299,195);

  // coordinate di partenza delle due fasce lunghe
  let yellowLong = [
    {x:320, y:169},
    {x:433, y:467},
    {x:382, y:503}
  ];

  let blueLong = [
    {x:373, y:262},
    {x:435, y:444},
    {x:464, y:419}
  ];

  // calcolo il pivot: prendo il vertice più in alto tra le due fasce
  let allVerts = yellowLong.concat(blueLong);
  let topMost = allVerts.reduce((a,b)=>b.y<a.y?b:a);
  let pivotX = topMost.x;
  let pivotY = topMost.y - pivotOffset; // lo sposto ancora più in alto

  // calcolo gli angoli oscillanti in radianti per le due fasce
  let angleYellow = radians(amplitudeDeg) * sin(frameCount * speed);
  let angleBlue = radians(amplitudeDeg * 0.9) * sin(frameCount * speed + 0.5);

  // fascia gialla lunga che ruota intorno al pivot
  push();                          
  translate(pivotX, pivotY);       // sposto l'origine nel pivot
  rotate(angleYellow);             // ruoto di un angolo oscillante
  noStroke ();
  fill("#E7D397");
  triangle(
    yellowLong[0].x - pivotX, yellowLong[0].y - pivotY,
    yellowLong[1].x - pivotX, yellowLong[1].y - pivotY,
    yellowLong[2].x - pivotX, yellowLong[2].y - pivotY
  );
  pop();                       

  // fascia azzurra lunga che ruota intorno allo stesso pivot
  push();
  translate(pivotX, pivotY);
  rotate(angleBlue);            
  noStroke ();
  fill("#798C90");
  triangle(
    blueLong[0].x - pivotX, blueLong[0].y - pivotY,
    blueLong[1].x - pivotX, blueLong[1].y - pivotY,
    blueLong[2].x - pivotX, blueLong[2].y - pivotY
  );
  pop();

  //fascia azzurra #2
  push();
  fill ("#1C2E42")
  triangle (286,205,199,228,256,288);
  pop();

//ombra faccia #1
  push();
  fill ("#A28065")
  triangle (259,337,227,273,140,391);
  pop();

//collo
  push();
  fill ("#A28065")
  triangle (179,383,245,353,188,404);
  pop();

//colletto
  push();
  fill ("#E5E7DA")
  triangle (215,390,160,444,270,389);
  pop();

//vestito
  push();
  fill ("#D9AF63")
  triangle (224,418,110,640,311,640);
  pop();

//ombra vestito
  push();
  fill ("#55472D")
  triangle (251,459,331,620,408,630);
  pop();

//naso
  push();
  noStroke ();
  fill ("#B18D75")
  triangle (145,264,111,304,143,318);
  pop();

//bocca
  push();
  noStroke ();
  fill ("#B24C3E")
  triangle (118,328,162,340,122,352);
  pop();

//pupilla occhio dx
  push();
  noStroke ();
  fill ("#33291F")
  triangle (182,273,172,266,172,279);
  pop();

//sclera occhio dx
  push();
  noStroke ();
  fill (255)
  triangle (162,271,172,266,172,279);
  pop();

//pupilla occhio sx
  push();
  noStroke ();
  fill ("#33291F")
  triangle (136,263,127,256,127,269);
  pop();

//sclera occhio sx
  push();
  noStroke ();
  fill (255)
  triangle (117,262,127,256,127,269);
  pop();

//orecchino
  push();
  noStroke ();
  fill ("#7C7F76")
  circle(257,356,20);
  pop();

//punto luceorecchino
  push();
  noStroke ();
  fill (255)
  circle(258,354,14);
  pop();

}
