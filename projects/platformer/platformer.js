$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    // Actual Platforms //
    createPlatform(0, 200, 1300, 20);
    createPlatform(1300, 400, 1300, 20);
    createPlatform(300, 400, 1300, 20);
    createPlatform(0, 600, 200, 20)
    // Actual Platforms //
    // Obstacles on First Platform //
    createPlatform(425, 150, 30, 50);
    createPlatform(425, 0, 30, 50);
    createPlatform(600, 150, 30, 50);
    createPlatform(600, 0, 30, 50);
    createPlatform(750, 150, 30, 50);
    createPlatform(750, 0, 30, 50);
    createPlatform(925, 150, 30, 50);
    createPlatform(925, 0, 30, 50);
    // Obstacles on First Platform //
    // Obstacles on Second Platform //
    createPlatform(300, 350, 30, 50);
    createPlatform(500, 310, 50, 90);
    createPlatform(700, 310, 50, 90);
    createPlatform(900, 315, 50, 20);
    createPlatform(1100, 310, 50, 90);
    // Obstacles on Second Platform //
    // Obstacles on Third Platform //
    createPlatform(300, 560, 100,20)
    createPlatform(500, 580, 100,20)
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 910, 275, 20, 1);
    



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 400, 3050);
    createCannon("top", 600, 3100);
    createCannon("top", 750, 3150);
    createCannon("top", 925, 3200);
    createCannon("top", 1075, 3250);
    createCannon("left", 240, 5000);
    createCannon("left", 240, 5100);
    createCannon("left", 240, 5200);
    // Last Platform Cannons //
    createCannon("left", 600, 1000);
    createCannon("left", 610, 1050);
    createCannon("left", 620, 1100);
    createCannon("left", 630, 1150);
    createCannon("left", 640, 1200);
    createCannon("left", 650, 1250);
    createCannon("left", 660, 1300);
    createCannon("left", 670, 1350);
    createCannon("left", 680, 1400);
    createCannon("left", 690, 1450);
    createCannon("left", 700, 1500);
    createCannon("left", 600, 1600);
    createCannon("left", 610, 1650);
    createCannon("left", 620, 1700);
    createCannon("left", 630, 1750);
    createCannon("left", 640, 1800);
    createCannon("left", 650, 1850);
    createCannon("left", 660, 1900);
    createCannon("left", 670, 1950);
    createCannon("left", 680, 2000);
    createCannon("left", 690, 2050);
    createCannon("left", 700, 2100);
    
    



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
