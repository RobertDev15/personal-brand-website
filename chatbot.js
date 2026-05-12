// 1. The questions array contains objects with questions, options, correct answers, and feedback messages.
let questions = [
    {
        question: "Hello! Do you want to play a minigame?",
        options: {
            a: "No",
            b: "Yes"
        },
        correctAnswer: "b",
        correctResponse: "Great! Let's see how much you know about web design.",
        incorrectResponse: "Ok. We will play it anyway."
    },
    {
        question: "What is CSS best known for",
        options: {
            a: "Styling and designing web pages",
            b: "Storing your data"
        },
        correctAnswer: "a",
        correctResponse: "Correct! CSS makes the web pages look gourgeus.",
        incorrectResponse: "Nope, CSS is only for styling. Datasets use SQLs style languages."
    },
    {
        question: "How can Github Pages help you?",
        options: {
            a: "Display my repository",
            b: "It can host my website for free"
        },
        correctAnswer: "b",
        correctResponse: "Spot on! Github is a free web hosting site.",
        incorrectResponse: "Nope. Your repo isn't displayed by Github Pages."
    },
    {
        question: "What is the acronim for HyperText Markup Language?",
        options: {
            a: "HTML",
            b: "React"
        },
        correctAnswer: "a",
        correctResponse: "Yes! HTML is the base of one's website.",
        incorrectResponse: "Incorrect! React is a Javasript library."
    },
    {
        question: "What can JavaScript do to your website?",
        options: {
            a: "Add styling and design",
            b: "Add animation to elements"
        },
        correctAnswer: "b",
        correctResponse: "Exactly. JavaScript can make your websites animated and lively.",
        incorrectResponse: "Not really correct. While it can add CSS rules to an element, it is not a styling language"
    },
];

let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        let botResponse = document.createElement("div");
        botResponse.classList.add("message");
        botResponse.classList.add("bot-message");
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} <br> a) ${currentQuestion.options.a} <br> b) ${currentQuestion.options.b}`;
        chatContainer.appendChild(botResponse);
        chatContainer.scrollTop = chatContainer.scrollHeight; 
    }
    else {
        let botResponse = document.createElement("div");
        botResponse.classList.add("message");
        botResponse.classList.add("bot-message");
        botResponse.innerHTML = `<strong>Bot:</strong> That's all the questions I have! Thanks for playing.`;
        chatContainer.appendChild(botResponse);
        userInput.disabled = true;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

displayQuestion();

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let userAnswer = userInput.value.toLowerCase();
    let userResponse = document.createElement("div");
    userResponse.classList.add("message");
    userResponse.classList.add("user-message");
    userResponse.innerHTML = `<strong>You:</strong> ${userAnswer}`;
    chatContainer.appendChild(userResponse);
    let currentQuestion = questions[currentQuestionIndex];
    let botFeedback = document.createElement("div");
    botFeedback.classList.add("message");
    botFeedback.classList.add("bot-message");
    if (userAnswer === currentQuestion.correctAnswer) {
        botFeedback.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
    }
    else {
        botFeedback.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
    }
    chatContainer.appendChild(botFeedback);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    userInput.value = "";
    currentQuestionIndex++;
    displayQuestion();
});