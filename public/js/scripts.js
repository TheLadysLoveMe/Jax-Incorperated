var url = "/";
var win;

function openAboutBlank() {
  if (win) {
    win.focus();
  } else {
    win = window.open("", "_blank");
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = url;
    win.document.body.appendChild(iframe);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var switchInput = document.querySelector("#about-blank-btn");

  if (switchInput) {
    switchInput.addEventListener("change", function () {
      if (this.checked) {
        openAboutBlank();
      }
    });
  }
});

function showGame(gameUrl) {
  // Hide the game list container
  document.getElementById("game-container").style.display = "none";

  // Dynamically create and load the iframe
  const gameFrameContainer = document.getElementById("game-frame-container");
  const existingFrame = document.getElementById("game-frame");

  if (!existingFrame) {
    const iframe = document.createElement("iframe");
    iframe.id = "game-frame";
    iframe.src = gameUrl;
    iframe.width = "800";
    iframe.height = "600";
    iframe.style.border = "none";
    gameFrameContainer.appendChild(iframe);
  } else {
    existingFrame.src = gameUrl;
  }

  // Show the game display section
  document.getElementById("game-display").style.display = "block";
}

function exitGame() {
  // Redirect to the games.html page
  window.location.href = "/games.html";
}

function toggleFullScreen() {
  const gameFrame = document.getElementById("game-frame");

  if (gameFrame) {
    if (!document.fullscreenElement) {
      gameFrame.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
