let userName = '';

function setUserName() {
    const userNameInput = document.getElementById('user-name');
    userName = userNameInput.value;
    const userNameContainer = document.getElementById('user-name-container');
    const userNameText = document.getElementById('user-name-text');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.querySelector('.user-input');

    userNameContainer.style.display = 'none';

    // Display the user's name as a message
    userNameText.innerHTML = `User = ${userName}`;
    userNameText.style.display = 'block';

    // Show the input field for messages
    userInput.style.display = 'block';

    // Proceed with language selection
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = 'Please select a programming language:';
    chatBox.appendChild(botMessage);
    appendLanguageButtons();
}

function appendLanguageButtons() {
    const chatBox = document.getElementById('chat-box');
    const languageButtons = document.createElement('div');
    languageButtons.classList.add('message', 'bot');

    // Create language selection buttons
    languageButtons.innerHTML = `
        <button onclick="selectLanguage('python')">Python</button>
        <button onclick="selectLanguage('java')">Java</button>
        <button onclick="selectLanguage('cpp')">C++</button>
    `;

    chatBox.appendChild(languageButtons);
}

function selectLanguage(language) {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `
        <div class="message user">
            You selected: ${language}
        </div>
    `;

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('message', 'bot');
    questionContainer.id = 'question-container';

    chatBox.appendChild(questionContainer);

    // Hide the language selection buttons
    const languageButtons = chatBox.querySelectorAll('button');
    for (const button of languageButtons) {
        button.style.display = 'none';
    }

    // Load questions based on the selected language
    loadQuestions(language);
}

function loadQuestions(language) {
    // Here, you can dynamically generate and display questions based on the selected language.
    // Example: You can fetch questions from an array or an API and append them to the questionContainer.
}

function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    const chatBox = document.getElementById('chat-box');

    chatBox.innerHTML += `
        <div class="message user">
            ${userMessage}
        </div>`
    
}

let selectedLanguage = '';
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let questionContainer = document.getElementById('question-container');

function setUserName() {
    const userNameInput = document.getElementById('user-name');
    userName = userNameInput.value;
    const userNameContainer = document.getElementById('user-name-container');
    const userNameText = document.getElementById('user-name-text');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.querySelector('.user-input');

    userNameContainer.style.display = 'none';

    // Display the user's name as a message
    userNameText.innerHTML = `User = ${userName}`;
    userNameText.style.display = 'block';

    // Show the input field for messages
    userInput.style.display = 'block';

    // Proceed with language selection
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = 'Please select a programming language:';
    chatBox.appendChild(botMessage);
    appendLanguageButtons();
}

function appendLanguageButtons() {
    const chatBox = document.getElementById('chat-box');
    const languageButtons = document.createElement('div');
    languageButtons.classList.add('message', 'bot');

    // Create language selection buttons
    languageButtons.innerHTML = `
        <button onclick="selectLanguage('python')">Python</button>
        <button onclick="selectLanguage('java')">Java</button>
        <button onclick="selectLanguage('cpp')">C++</button>
    `;

    chatBox.appendChild(languageButtons);
}

function selectLanguage(language) {
    selectedLanguage = language;
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `
        <div class="message user">
            You selected: ${language}
        </div>
    `;

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('message', 'bot');
    questionContainer.id = 'question-container';

    chatBox.appendChild(questionContainer);

    // Hide the language selection buttons
    const languageButtons = chatBox.querySelectorAll('button');
    for (const button of languageButtons) {
        button.style.display = 'none';
    }

    // Load questions based on the selected language
    loadQuestions(selectedLanguage);
}

function loadQuestions(language) {
    // Define questions based on the selected language
    // For example, for Python:
    if (language === 'python') {
        questions = [
            {
                question: 'What is Python?',
                options: ['A high-level programming language', 'A type of snake', 'A programming framework', 'A low-level programming language'],
                correctAnswer: 'A'
            },
            {
                question: 'What is the purpose of the "if" statement in Python?',
                options: ['To define a loop', 'To define a function', 'To make a decision', 'To print text'],
                correctAnswer: 'C'
            },
            {
                question: 'What is the primary data structure for storing multiple values in Python?',
                options: ['Array', 'List', 'Dictionary', 'Set'],
                correctAnswer: 'B'
            },
            {
                question: 'Which of the following is NOT a valid Python variable name?',
                options: ['my_var', 'my-var', '_myvar', '1var'],
                correctAnswer: 'D'
            },
            {
                question: 'What is the purpose of the "for" loop in Python?',
                options: ['To define a function', 'To make a decision', 'To repeat a block of code a specific number of times', 'To print text'],
                correctAnswer: 'C'
            },
            {
                question: 'Which Python keyword is used to define a function?',
                options: ['function', 'def', 'define', 'method'],
                correctAnswer: 'B'
            },
            {
                question: 'What is the output of the following code?\n\nprint("Hello, " + "world!")',
                options: ['Hello, world!', 'Hello, + world!', 'Hello, "world!"', 'Error'],
                correctAnswer: 'A'
            },
            {
                question: 'What is the Python syntax for a single-line comment?',
                options: ['// This is a comment', '# This is a comment', '/* This is a comment */', '-- This is a comment'],
                correctAnswer: 'B'
            },
            {
                question: 'Which built-in function is used to get the length of a list in Python?',
                options: ['length()', 'len()', 'count()', 'size()'],
                correctAnswer: 'B'
            },
            {
                question: 'What is the result of 10 / 3 in Python?',
                options: ['3.333', '3.0', '3', 'Error'],
                correctAnswer: 'A'
            },
            // Add more Python questions
        ];
    } else if (language === 'java') {
        // Define questions for Java
    } else if (language === 'cpp') {
        // Define questions for C++
    }

    displayNextQuestion();
}

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionText = document.getElementById('question-text');
        questionText.textContent = currentQuestion.question;

        for (let i = 0; i < 4; i++) {
            const answerElement = document.getElementById('answer-' + String.fromCharCode(97 + i));
            answerElement.textContent = currentQuestion.options[i];
        }

        questionContainer.style.display = 'block';
        currentQuestionIndex++;
    } else {
        questionContainer.style.display = 'none';
        displayScoreAndLevel();
    }
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        displayNextQuestion();
    } else {
        alert('Please select an answer.');
    }
}

// ...

function displayScoreAndLevel() {
    // Calculate the score and familiarity level based on userAnswers.
    const correctAnswers = questions.filter((q, index) => q.correctAnswer === userAnswers[index]).length;
    const totalQuestions = questions.length;

    const score = (correctAnswers / totalQuestions) * 100;

    let familiarityLevel = 'Beginner';

    if (score >= 70) {
        familiarityLevel = 'Intermediate';
    } else if (score >= 40) {
        familiarityLevel = 'Advanced';
    }

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `
        <div class="message bot">
            Your score: ${score.toFixed(2)}%
        </div>
        <div class="message bot">
            Your familiarity level with ${selectedLanguage}: ${familiarityLevel}
        </div>
    `;
}

// ...
