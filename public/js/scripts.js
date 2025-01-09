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
  document.getElementById("game-container").style.display = "none";

  const gameFrameContainer = document.getElementById("game-frame-container");
  let gameFrame = document.getElementById("game-frame");

  if (!gameFrame) {
    gameFrame = document.createElement("iframe");
    gameFrame.id = "game-frame";
    gameFrame.src = gameUrl;
    gameFrame.width = "800";
    gameFrame.height = "600";
    gameFrame.style.border = "none";
    gameFrameContainer.appendChild(gameFrame);
  } else {
    gameFrame.src = gameUrl;
  }

  document.getElementById("game-display").style.display = "block";
}

function exitGame() {
  window.location.href = "/games.html";
}

function toggleGameFullScreen() {
  const gameFrame = document.getElementById("game-frame");

  if (gameFrame) {
    if (!document.fullscreenElement) {
      gameFrame.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

function showApps(appsUrl) {
  document.getElementById("apps-container").style.display = "none";

  const appsFrameContainer = document.getElementById("apps-frame-container");
  let appsFrame = document.getElementById("apps-frame");

  if (!appsFrame) {
    appsFrame = document.createElement("iframe");
    appsFrame.id = "apps-frame";
    appsFrame.src = appsUrl;
    appsFrame.width = "800";
    appsFrame.height = "600";
    appsFrame.style.border = "none";
    appsFrameContainer.appendChild(appsFrame);
  } else {
    appsFrame.src = appsUrl;
  }

  document.getElementById("apps-display").style.display = "block";
}

function exitApps() {
  window.location.href = "/apps.html";
}

function toggleAppsFullScreen() {
  const appsFrame = document.getElementById("apps-frame");

  if (appsFrame) {
    if (!document.fullscreenElement) {
      appsFrame.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
