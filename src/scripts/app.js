import { getResponse } from "./chat.js";

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

document.getElementById("userInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    const chatHistory = document.getElementById("chatHistory");

    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "chat-message user-message";
    userMessageDiv.innerText = `${userInput}`;
    chatHistory.appendChild(userMessageDiv);

    const thinkingMessageDiv = document.createElement("div");
    thinkingMessageDiv.className = "chat-message thinking";
    thinkingMessageDiv.innerText = "Mina is Writing...";
    chatHistory.appendChild(thinkingMessageDiv);

    document.getElementById("userInput").value = "";

    chatHistory.scrollTop = chatHistory.scrollHeight;

    setTimeout(() => {
      const response = getResponse(userInput);
      chatHistory.removeChild(thinkingMessageDiv);

      const responseMessageDiv = document.createElement("div");
      responseMessageDiv.className = "chat-message ai-message";
      responseMessageDiv.innerText = `${response}`;
      chatHistory.appendChild(responseMessageDiv);

      chatHistory.scrollTop = chatHistory.scrollHeight;
      const utterance = new SpeechSynthesisUtterance(response);
      const vtuberVoice = voices.find(voice => voice.lang === "en-US" && voice.name.toLowerCase().includes("female"));

      if (vtuberVoice) {
        utterance.voice = vtuberVoice;
      } else {
        const defaultFemaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female"));
        if (defaultFemaleVoice) {
          utterance.voice = defaultFemaleVoice;
        }
      }

      speechSynthesis.speak(utterance);
    }, 5000);
  }
});
