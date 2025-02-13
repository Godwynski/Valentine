let noClicks = 0;
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const beggingContainer = document.getElementById('beggingContainer');
const imageContainer = document.getElementById('imageContainer');
const animationContainer = document.getElementById('animationContainer');

// Updated list of begging phrases
const beggingPhrases = [
  "I promise I'll make you laugh every day!",
  "Don’t leave me hanging... Please? 🥺",
  "C’mon, I’ll even share my fries with you! 🍟",
  "But we could make the cutest couple…",
  "What do you say? Should we make this official? 😘",
  "Imagine us going on cute dates, eating pizza and ice cream! 🍕🍦",
  "I might be a little nerdy, but you’ll love it! 💫",
  "Pretty please, I’ll treat you like a queen! 👑"
];

// List of random warm GIFs from the web
const gifs = [
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZmeGZ3N25mdTRpOXhhMWhldGY5M3B4ZncwNnJ1OW84aHJ2c3M4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.gif', // Cute dog
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFzZmk1ZXp2MXAxcW13NGNhczh5MG1jYTdsdmZ2cHJsdXJkeXFkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378giAZgxPw3eO52/giphy.gif', // Cute hug
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjh6c3p4aDR1bzRsaTB1ZWdiY3EwbnJraGZreTljeTViZTd5aDM1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ynEBV7lbWtAaeTcHz5/giphy.gif', // Heart animation
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Y5a3N5YW42dWR4NmVkYWV6OG1oczkzeDNtZTYzcnB4bHBrNDliYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQdL532ZANbjy/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHllNWpqZTN6eGgzdjlzdWx1ajJ6MHltc3BpZmxnNDY3cWhrM2NyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif', 
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVjZ204d3V3ZzA4MDY3dDhsam1wZHk4b3M4cmV4czZhZ3MxOHpxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fmRTfVIKMRiM/giphy.gif' 
];


function showRandomImage() {

  imageContainer.innerHTML = '';

  const randomIndex = Math.floor(Math.random() * gifs.length);
  const image = document.createElement('img');
  image.src = gifs[randomIndex];
  image.alt = "Trying to charm you";
  image.classList.add('w-48', 'sm:w-64', 'lg:w-80', 'rounded-lg');
  imageContainer.appendChild(image);
}
function changeButtonPosition() {
  const randomX = Math.random() * 80 + 10;
  const randomY = Math.random() * 80 + 10;
  noButton.style.left = `${randomX}%`;
  noButton.style.top = `${randomY}%`;
}


let currentPhraseIndex = 0;

function updateBeggingPhrase() {
  // Get the current phrase based on the current index
  const randomPhrase = beggingPhrases[currentPhraseIndex];
  beggingContainer.textContent = randomPhrase;

  // Update the index to the next phrase, looping back to 0 if necessary
  currentPhraseIndex = (currentPhraseIndex + 1) % beggingPhrases.length;
}



noButton.addEventListener('click', () => {

  showRandomImage();

  updateBeggingPhrase();
  changeButtonPosition();


  if (noClicks >= 5) {
    beggingContainer.textContent = "Okay, seriously, I’m begging! 😩";
  }
  if (noClicks >= 8) {
    beggingContainer.textContent = "I’ll treat you like royalty, I promise! 👑";
  }
});



document.getElementById("yesButton").addEventListener("click", function() {
  window.location.href = "yes.html"; // Replace with your link
});
