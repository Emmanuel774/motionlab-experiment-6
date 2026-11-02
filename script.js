// Demo 1: Digital Clock
function displayTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const clock = document.getElementById("digitalClock");
  if (clock) {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

setInterval(displayTime, 1000);
displayTime();

// Demo 2: Dynamic Background Colors
let bgColorIntervalId = null;
let isAutoBgRunning = false;

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function updateBackgroundDisplay(color) {
  const colorValue = document.getElementById("bgColorValue");
  if (colorValue) {
    colorValue.textContent = color;
  }

  document.body.style.backgroundColor = color;
}

function startAutoColorChange() {
  if (bgColorIntervalId !== null) {
    return;
  }

  bgColorIntervalId = setInterval(() => {
    const nextColor = generateRandomColor();
    updateBackgroundDisplay(nextColor);
  }, 30000);

  isAutoBgRunning = true;
  const toggleButton = document.getElementById("toggleColorBtn");
  if (toggleButton) {
    toggleButton.textContent = "Stop Auto Change";
  }
}

function stopAutoColorChange() {
  if (bgColorIntervalId !== null) {
    clearInterval(bgColorIntervalId);
    bgColorIntervalId = null;
  }

  isAutoBgRunning = false;
  const toggleButton = document.getElementById("toggleColorBtn");
  if (toggleButton) {
    toggleButton.textContent = "Start Auto Change";
  }
}

const randomColorBtn = document.getElementById("randomColorBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");

if (randomColorBtn) {
  randomColorBtn.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    updateBackgroundDisplay(randomColor);
  });
}

if (toggleColorBtn) {
  toggleColorBtn.addEventListener("click", () => {
    if (isAutoBgRunning) {
      stopAutoColorChange();
      return;
    }

    startAutoColorChange();
  });
}

// Demo 3: Text Zoom
const zoomText = document.getElementById("zoomText");
if (zoomText) {
  zoomText.addEventListener("mouseover", () => {
    zoomText.style.fontSize = "1.25rem";
  });

  zoomText.addEventListener("mouseout", () => {
    zoomText.style.fontSize = "1rem";
  });
}

// Demo 4: Car Animation
let carXPosition = 0;
let carMoveTimeoutId = null;
const car = document.getElementById("car");
const carTrack = document.getElementById("carTrack");

function moveCarStep() {
  if (!car || !carTrack) {
    return;
  }

  const maxX = carTrack.clientWidth - car.offsetWidth - 10;

  if (carXPosition < maxX) {
    carXPosition += 12;
    car.style.transform = `translateX(${carXPosition}px)`;
    carMoveTimeoutId = setTimeout(moveCarStep, 80);
  } else {
    carMoveTimeoutId = null;
  }
}

function startCarAnimation() {
  if (carMoveTimeoutId !== null) {
    return;
  }

  moveCarStep();
}

function stopCarAnimation() {
  if (carMoveTimeoutId !== null) {
    clearTimeout(carMoveTimeoutId);
    carMoveTimeoutId = null;
  }
}

function resetCarAnimation() {
  stopCarAnimation();
  carXPosition = 0;
  if (car) {
    car.style.transform = "translateX(0px)";
  }
}

document.getElementById("startCarBtn")?.addEventListener("click", startCarAnimation);
document.getElementById("stopCarBtn")?.addEventListener("click", stopCarAnimation);
document.getElementById("resetCarBtn")?.addEventListener("click", resetCarAnimation);

// Demo 5: Student Profiles
const studentData = [
  { name: "Aisha Khan", regno: "20CS101", yearOfBirth: 2001 },
  { name: "Daniel Patel", regno: "19CS205", yearOfBirth: 1999 },
  { name: "Meera Nair", regno: "21CS318", yearOfBirth: 2003 },
  { name: "Rohit Sharma", regno: "18CS420", yearOfBirth: 1998 }
];

const studentList = document.getElementById("studentList");
if (studentList) {
  for (const student of studentData) {
    const listItem = document.createElement("li");
    listItem.className = "student-item";

    const category = student.yearOfBirth < 2000 ? "Born before 2000" : "Born in/after 2000";

    listItem.innerHTML = `
      <span class="student-name">${student.name}</span>
      <span class="student-meta">Register Number: ${student.regno}</span>
      <span class="student-meta">Birth Year: ${student.yearOfBirth}</span>
      <span class="category-tag">${category}</span>
    `;

    studentList.appendChild(listItem);
  }
}

// Demo 6: Style Switcher and Show/Hide
const styleHeading = document.getElementById("styleHeading");
const welcomeMessage = document.getElementById("welcomeMessage");

const headingColorBtn = document.getElementById("headingColorBtn");
if (headingColorBtn) {
  headingColorBtn.addEventListener("click", () => {
    const colors = ["#22d3ee", "#8b5cf6", "#f472b6", "#34d399"];
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    if (styleHeading) {
      styleHeading.style.color = nextColor;
    }
  });
}

const headingSizeBtn = document.getElementById("headingSizeBtn");
if (headingSizeBtn) {
  headingSizeBtn.addEventListener("click", () => {
    if (styleHeading) {
      const currentSize = parseFloat(window.getComputedStyle(styleHeading).fontSize);
      const newSize = currentSize >= 26 ? 24 : currentSize + 4;
      styleHeading.style.fontSize = `${newSize}px`;
    }
  });
}

const messageBgBtn = document.getElementById("messageBgBtn");
if (messageBgBtn) {
  messageBgBtn.addEventListener("click", () => {
    const backgrounds = ["#111827", "#1f2937", "#1e1b4b", "#0f172a"];
    const nextBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    if (welcomeMessage) {
      welcomeMessage.style.backgroundColor = nextBg;
      welcomeMessage.style.color = "#edf2ff";
      welcomeMessage.style.padding = "10px 12px";
      welcomeMessage.style.borderRadius = "10px";
    }
  });
}

const showMessageBtn = document.getElementById("showMessageBtn");
if (showMessageBtn) {
  showMessageBtn.addEventListener("click", () => {
    if (welcomeMessage) {
      welcomeMessage.style.display = "block";
    }
  });
}

const hideMessageBtn = document.getElementById("hideMessageBtn");
if (hideMessageBtn) {
  hideMessageBtn.addEventListener("click", () => {
    if (welcomeMessage) {
      welcomeMessage.style.display = "none";
    }
  });
}

// Demo 7: Fade Animation
let fadeIntervalId = null;
let fadeOpacity = 1;
const fadeBox = document.getElementById("fadeBox");

function stopFadeAnimation() {
  if (fadeIntervalId !== null) {
    clearInterval(fadeIntervalId);
    fadeIntervalId = null;
  }
}

function fadeOutBox() {
  if (fadeIntervalId !== null || !fadeBox) {
    return;
  }

  fadeOpacity = 1;
  fadeIntervalId = setInterval(() => {
    fadeOpacity = Math.max(0, fadeOpacity - 0.05);
    fadeBox.style.opacity = fadeOpacity;

    if (fadeOpacity <= 0) {
      stopFadeAnimation();
    }
  }, 50);
}

function fadeInBox() {
  if (fadeIntervalId !== null || !fadeBox) {
    return;
  }

  fadeOpacity = 0;
  fadeIntervalId = setInterval(() => {
    fadeOpacity = Math.min(1, fadeOpacity + 0.05);
    fadeBox.style.opacity = fadeOpacity;

    if (fadeOpacity >= 1) {
      stopFadeAnimation();
    }
  }, 50);
}

document.getElementById("fadeOutBtn")?.addEventListener("click", fadeOutBox);
document.getElementById("fadeInBtn")?.addEventListener("click", fadeInBox);

updateBackgroundDisplay("rgb(15, 23, 42)");
