import { getResponse } from './chat.js';

document.getElementById('userInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('userInput').value.trim();
        if (userInput === '') return; // Nếu ô nhập trống, không làm gì

        const chatHistory = document.getElementById('chatHistory');

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user-message';
        userMessageDiv.innerText = `${userInput}`;
        chatHistory.appendChild(userMessageDiv);

        const thinkingMessageDiv = document.createElement('div');
        thinkingMessageDiv.className = 'chat-message thinking';
        thinkingMessageDiv.innerText = 'AI is thinking...';
        chatHistory.appendChild(thinkingMessageDiv);

        document.getElementById('userInput').value = '';

        chatHistory.scrollTop = chatHistory.scrollHeight;

        setTimeout(() => {
            const response = getResponse(userInput);
            chatHistory.removeChild(thinkingMessageDiv);

            const responseMessageDiv = document.createElement('div');
            responseMessageDiv.className = 'chat-message ai-message';
            responseMessageDiv.innerText = `${response}`;
            chatHistory.appendChild(responseMessageDiv);

            chatHistory.scrollTop = chatHistory.scrollHeight;
        }, 5000);
    }
});
