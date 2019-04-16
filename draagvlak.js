var a = 0
var b = 0
var c = 20
var d = 200
var e = 0
var f = 100

//xpos = a ypos= b xstep is c y step is d xpas = e ypas= f

function setup() {
  createCanvas(windowWidth, windowHeight);
  // hier boven zie je dat ik voor de groote van het canvas heb gekozen om het zo te doen dat het zo graat is als het kan op die window
}

function draw() {
  background(255, 250, 0)
   
  //hier boven geef je aan welke kleur de achtergrond is
  // en de eerste rij hier ondergeeft aan welkekleur de ellipse moeten hebben
  // het is in 3 delen die staan voor de RGB rood, groen en blauw
  
  
  fill(200 * sin(frameCount / 50), 150 * sin(frameCount / 150), 100 * sin(frameCount / 100))
  for (var kolom = 0; kolom < 60; kolom++) { 
    //hier zet ik het begin op 0 en elkekeer dat de lope klaar is gaat hhet met 1 omhoog tot dat het op 60 is en dan gaat het weer naar 0
    for (var rij = 0; rij < 6; rij++) {
      
      ellipse(a + (c * kolom), b + (d * rij), 200 * sin(frameCount / 50), 200 * sin(frameCount / 260));
      
      
      stroke(255, 250, 0)
      
      
      strokeWeight(8); 
      
      
      // hier heb ik een rand toegevoeg om het een wat cooler effect te geven tevens heb ik die rand in de kleur van de achtergrond gemaakt om het niet al te veel op te laten vallen 
      
      rectMode(CENTER);
      // dit zorgt ervoor dat de blokjs om hun  as draaien
      
    for (var rkolom = 0; rkolom < 10; rkolom++) {
        for (var rrij = 0; rrij < 4; rrij++) {
          push();
          translate(50 + (rkolom * 100), 100 + (rrij * 200));
          rotate(10 * sin(frameCount / 400));
          
          rect(0,0, 80, 80);
          
          pop();
        }
      }
    }
  }
}
