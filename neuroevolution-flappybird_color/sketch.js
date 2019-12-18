// How big is the population
let totalPopulation = 1;
// All active birds (not yet collided with pipe)
let activeBirds = [];
// All birds for any given population
let allBirds = [];
// Pipes
let pipes = [];
// A frame counter to determine when to add a pipe
let counter = 0;

let sky = [];
let decor = [];
let middle = [];
let foreground = [];
let ground = [];
let player = [];

// Interface elements
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;

// All time high score
let highScore = 0;

// Training or just showing the current best
let runBest = false;
let runBestButton;
let bestBird;
let bird;
let SkyImg;
let BG_Decor;
let Middle_Decor;
let ForegroundImg;
let GroundImg;
let run;
let runCreate;
let run1;
let run2;
let run3;
let run4;
let run5;
let run6;
let run7;
let run8;

function preload() {
   birdimg = loadImage('bird.png');
   SkyImg = loadImage('img/bg/Sky.png');
   BG_Decor = loadImage('img/bg/BG_Decor.png');
   Middle_Decor = loadImage('img/bg/Middle_Decor.png');
   ForegroundImg = loadImage('img/bg/Foreground.png');
   GroundImg = loadImage('img/bg/Ground.png');

   run = loadImage('img/run/run.gif');
   runCreate = createImg('img/run/run.gif');
   run1 = loadImage('img/run/1.png');
   run2 = loadImage('img/run/2.png');
   run3 = loadImage('img/run/3.png');
   run4 = loadImage('img/run/4.png');
   run5 = loadImage('img/run/5.png');
   run6 = loadImage('img/run/6.png');
   run7 = loadImage('img/run/7.png');
   run8 = loadImage('img/run/8.png');
}

function setup() {
   let canvas = createCanvas(1280, 720);

   // Create a population
   for (let i = 0; i < totalPopulation; i++) {
      let bird = new Bird();
      activeBirds[i] = bird;
      allBirds[i] = bird;
   }
}

function draw() {
   // How many times to advance the game
   for (let n = 0; n < 1; n++) {
      // Show all the pipes
      for (let i = pipes.length - 1; i >= 0; i--) {
         pipes[i].update();
         if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
         }
      }

      // Show Background
      for (let i = sky.length - 1; i >= 0; i--) {
         sky[i].update();
         if (sky[i].offscreen()) {
            sky.splice(i, 1);
         }
      }

      for (let i = decor.length - 1; i >= 0; i--) {
         decor[i].update();
         if (decor[i].offscreen()) {
            decor.splice(i, 1);
         }
      }

      for (let i = middle.length - 1; i >= 0; i--) {
         middle[i].update();
         if (middle[i].offscreen()) {
            middle.splice(i, 1);
         }
      }

      for (let i = foreground.length - 1; i >= 0; i--) {
         foreground[i].update();
         if (foreground[i].offscreen()) {
            foreground.splice(i, 1);
         }
      }

      for (let i = ground.length - 1; i >= 0; i--) {
         ground[i].update();
         if (ground[i].offscreen()) {
            ground.splice(i, 1);
         }
      }

      //Add a new pipe every so often
      if (counter % 75 == 0) {
         pipes.push(new Pipe());
      }

      if (counter % (width / 2) == 0) {
         sky.push(new Sky());
      }

      if (counter % 854 == 0) {
         decor.push(new Decor());
      }

      if (counter % 640 == 0) {
         middle.push(new Middle());
      }

      if (counter % 1000 == 0) {
         player.push(new Player());
      }

      if (counter % 512 == 0) {
         foreground.push(new Foreground());
      }

      if (counter % 284 == 0) {
         ground.push(new Ground());
      }

      counter++;
   }

   // Draw everything!
   for (let i = 0; i < sky.length; i++) {
      sky[i].showOnce();
      sky[i].show();
   }

   for (let i = 0; i < decor.length; i++) {
      decor[i].showOnce();
      decor[i].show();
   }

   for (let i = 0; i < middle.length; i++) {
      middle[i].showOnce();
      middle[i].show();
   }

   for (let i = 0; i < foreground.length; i++) {
      foreground[i].showOnce();
      foreground[i].show();
   }

   image(run, 450, 450, 250, 270);

   for (let i = 0; i < pipes.length; i++) {
      pipes[i].show();
   }

   if (runBest) {
      bestBird.show();
   } else {
      for (let i = 0; i < activeBirds.length; i++) {
         activeBirds[i].show();
      }
   }

   for (let i = 0; i < ground.length; i++) {
      ground[i].showOnce();
      ground[i].show();
   }
}
