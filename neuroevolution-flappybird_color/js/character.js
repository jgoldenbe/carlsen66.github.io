class Player {
   constructor() {
      this.ground = 745;
      this.x = 400;

      // Gravity, lift and velocity
      this.gravity = 0.8;
      this.lift = -12;
      this.velocity = 0;
   }

   show() {
      image(run[i], this.x, this.ground);
   }
}
