// Initial setup
let bird = document.getElementById("bird");
let gameArea = document.getElementById("gameArea");
let gameWidth = gameArea.offsetWidth;
let gameHeight = gameArea.offsetHeight;

let birdY = 250; // Initial position of bird
let birdSpeed = 0; // Bird's vertical speed
let gravity = 0.5; // Gravity effect
let lift = -10; // Speed at which bird rises when spacebar is pressed
let isGameOver = false;
let obstacles = [];
let score = 0;

// Move the bird
function moveBird() {
  birdY += birdSpeed;
  birdSpeed += gravity;
  if (birdY < 0) birdY = 0; // Don't let bird go above the game area
  if (birdY > gameHeight - 40) {
    // Game over if bird hits the ground
    birdY = gameHeight - 40;
    gameOver();
  }
  bird.style.top = birdY + "px";
}

// Control the bird with spacebar
document.addEventListener("keydown", function (event) {
  if (event.key === " " && !isGameOver) {
    birdSpeed = lift; // Apply lift when space is pressed
  }
});

// Generate obstacles
function generateObstacles() {
  if (isGameOver) return;

  let gap = 200; // Gap between the obstacles
  let height = Math.floor(Math.random() * (gameHeight - gap));
  let topObstacle = document.createElement("div");
  let bottomObstacle = document.createElement("div");

  topObstacle.classList.add("obstacle");
  bottomObstacle.classList.add("obstacle-bottom");

  topObstacle.style.height = height + "px";
  bottomObstacle.style.height = gameHeight - height - gap + "px";

  topObstacle.style.left = gameWidth + "px";
  bottomObstacle.style.left = gameWidth + "px";

  gameArea.appendChild(topObstacle);
  gameArea.appendChild(bottomObstacle);

  obstacles.push({ top: topObstacle, bottom: bottomObstacle });
}

// Move obstacles and check for collisions
function moveObstacles() {
  obstacles.forEach((obstacle) => {
    let obstacleLeft = parseInt(obstacle.top.style.left.replace("px", "")) - 3; // Move obstacles to the left

    if (obstacleLeft + 50 <= 0) {
      // Remove obstacles when they go out of screen
      gameArea.removeChild(obstacle.top);
      gameArea.removeChild(obstacle.bottom);
      obstacles = obstacles.filter((obj) => obj !== obstacle);
      score++; // Increase score for each obstacle passed
    }

    // Collision detection with bird
    if (obstacleLeft < 90 && obstacleLeft + 50 > 50) {
      if (
        birdY < parseInt(obstacle.top.style.height) ||
        birdY + 40 > gameHeight - parseInt(obstacle.bottom.style.height)
      ) {
        gameOver();
      }
    }

    obstacle.top.style.left = obstacleLeft + "px";
    obstacle.bottom.style.left = obstacleLeft + "px";
  });
}

// Game Over function
function gameOver() {
  isGameOver = true;
  alert("Game Over! Your score: " + score);
  location.reload(); // Reload the game to restart
}

// Update game elements
function gameLoop() {
  if (isGameOver) return;
  moveBird();
  moveObstacles();
}

// Start the game
setInterval(gameLoop, 20);
setInterval(generateObstacles, 2000); // Generate obstacles every 2 seconds
