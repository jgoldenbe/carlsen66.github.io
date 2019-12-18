class Sky {
   constructor() {
      // Starts at the right edge
      this.xSky = width;

      // How fast
      this.speedSky = 1.0;

      this.w = 1280;
   }

   // Draws the Background Images
   showOnce() {
      image(SkyImg, this.xSky - width, 0);
   }

   show() {
      image(SkyImg, this.xSky, 0);
   }

   // Updates X Position of Background
   update() {
      this.xsky -= this.speedSky;
   }

   // Check to see if Background moved off screen
   offscreen() {
      if (this.xSky < -this.w) {
         return true;
      } else {
         return false;
      }
   }
}
