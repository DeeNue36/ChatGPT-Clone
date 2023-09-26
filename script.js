document.addEventListener("DOMContentLoaded", () => {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    function addUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.textContent = message;
        chatLog.appendChild(userMessage);
        userInput.value = "";
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function addBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot-message");
        botMessage.textContent = message;
        chatLog.appendChild(botMessage);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addUserMessage(userMessage);
            // Simulate a bot response (in a real chatbot, you'd use AI or a backend server)
            setTimeout(() => {
                addBotMessage("I'm just a simple example chatbot.");
            }, 1000);
        }
    });

    userInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
