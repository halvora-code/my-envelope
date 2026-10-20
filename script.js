const note = document.querySelector("#note");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "You are very intelligent!",
    "the thing you are building counts, even half finished.",
    "you are allowed to be a beginner for as long as you need",
    "someone is going to love what you make with this",
    "Have a great day!",
    "you ask good questions. that is the whole skill.",
    "you can never ask too many questions!",
    "happy winter coding!",
    "your code is great no matter how long or short",
    "happy coding! Your next project is going to be amazing!",
    "have an amazing day, and happy coding!",
    "brrr I need to code!",
];

button.addEventListener("click", () => {
    note.classList.add("shaking");
    setTimeout(() => note.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});
