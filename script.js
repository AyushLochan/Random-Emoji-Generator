const emojis = [
    { emoji: "😀", label: "Happy Face" },
    { emoji: "😎", label: "Cool Guy" },
    { emoji: "😢", label: "Sad Face" },
    { emoji: "😡", label: "Angry Face" },
    { emoji: "🤖", label: "Robot" },
    { emoji: "🐱", label: "Cat" },
    { emoji: "🌟", label: "Star" },
    { emoji: "🍕", label: "Pizza" },
    { emoji: "🚀", label: "Rocket" },
    { emoji: "🎉", label: "Party" }
  ];
  
  function generateEmoji() {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("emoji").textContent = random.emoji;
    document.getElementById("label").textContent = random.label;
  }
  