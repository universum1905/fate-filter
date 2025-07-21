const fates = [
  {
    text: "Let go of one small fear today.",
    emoji: "🦋",
    task: "Write down what’s holding you back – then delete it."
  },
  {
    text: "Say yes before you're ready.",
    emoji: "🚀",
    task: "Accept one challenge today without hesitation."
  },
  {
    text: "You already have what it takes.",
    emoji: "🛡️",
    task: "Make a decision without asking anyone."
  },
  {
    text: "Be boldly quiet today.",
    emoji: "🤫",
    task: "Turn off your notifications for 1 hour."
  },
  {
    text: "Something good wants to find you.",
    emoji: "🎁",
    task: "Let someone surprise you today – don’t plan everything."
  },
  {
    text: "You're allowed to start over anytime.",
    emoji: "🔄",
    task: "Choose one thing to restart with a new mindset."
  },
  {
    text: "Curiosity is your compass.",
    emoji: "🧭",
    task: "Ask one unexpected question today."
  },
  {
    text: "Let your weirdness be loud.",
    emoji: "🦄",
    task: "Share something quirky about yourself."
  },
  {
    text: "Your silence is powerful.",
    emoji: "🌌",
    task: "Take a 10-minute walk in silence."
  },
  {
    text: "Give without keeping score.",
    emoji: "🎈",
    task: "Do a favor with zero expectation."
  },
  {
    text: "Your energy creates your reality.",
    emoji: "⚡",
    task: "Start the day with music that lifts you."
  },
  {
    text: "Magic is hidden in repetition.",
    emoji: "🔁",
    task: "Repeat something meaningful 3 times today."
  },
  {
    text: "Let the world meet your real self.",
    emoji: "🎭",
    task: "Say what you really think – once today."
  },
  {
    text: "Peace doesn't beg to be noticed.",
    emoji: "🕊️",
    task: "Breathe deeply 5 times before answering someone."
  },
  {
    text: "Imperfect is brave.",
    emoji: "✨",
    task: "Post or share something without editing."
  },
  {
    text: "Even small steps change everything.",
    emoji: "🐾",
    task: "Move something forward by 1% today."
  },
  {
    text: "Your path is not supposed to make sense yet.",
    emoji: "🌀",
    task: "Journal 3 things that confuse you – and accept them."
  },
  {
    text: "Joy is always allowed.",
    emoji: "🌈",
    task: "Do one small thing just because it feels good."
  },
  {
    text: "Today you are your own oracle.",
    emoji: "🔮",
    task: "Answer your own question – without outside advice."
  },
  {
    text: "Let doubt walk beside you, not ahead.",
    emoji: "🚶‍♂️",
    task: "Do it anyway, even if it feels uncertain."
  }
];

const btn = document.getElementById("revealBtn");
btn.addEventListener("click", () => {
  // Pop‑Effekt
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 300);

  // Fate anzeigen (bestehender Code) …
  const fate = fates[Math.floor(Math.random() * fates.length)];
  document.getElementById("fateText").textContent = fate.text;
  document.getElementById("fateEmoji").textContent = fate.emoji;
  document.getElementById("fateTask").textContent = fate.task;
  document.getElementById("fateBox").classList.remove("hidden");
});

