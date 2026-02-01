const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");
const hero = document.getElementById("hero");

let answered = false;

// NO button escape
noBtn.addEventListener("mouseover", () => {
  if (answered) return;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
  if (answered) return;

  message.classList.remove("hidden");
  message.textContent =
    "oh ante nuvvu NO nokkithey silent ga untanu ani anukunnava 🤨";
});

// YES button
yesBtn.addEventListener("click", () => {
  answered = true;

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  title.textContent = "Yeeeesss 💖";
  subtitle.textContent = "See you on the 14th, Princess 😌";
  hero.src = "images/dance.gif";

  message.textContent =
    "NO tap chesi untey nee pani aipoyedhi 😤👊🏻";
  message.classList.remove("hidden");

  launchHearts();
});

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
