const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you?": "I'm just a program, but I'm here to help you!",
    "what is your name?": "I'm your friendly AI train by Rachel And Luminous!",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "i am tuan": "Tuan Anh is Stupid Dog!",
    "default": "I'm not sure how to respond to that. Can you ask something else?",
};

export function getResponse(userInput) {
    const normalizedInput = userInput.toLowerCase().trim();
    return responses[normalizedInput] || responses["default"];
}