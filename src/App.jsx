import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      // Professional Greeting Triggers
      'hello':
        "Hi! I'm Prajwal's virtual assistant. I can help you explore his technical skills, recent projects, or professional background. What would you like to know?",
      'hi': "Hello! I'm here to answer questions about Prajwal's work. Feel free to ask about his tech stack or how he built this interactive project.",

      // Career-Focused Information
      "tech stack":
        "Prajwal specializes in React, TypeScript, and Node.js. He is also experienced with AWS, Express, and building stable, production-ready applications.",
      'experience':
        "Prajwal is a Software Engineer focused on performance and reliability. You can see his full history in the Experience section of this portfolio.",
      'projects':
        "This chatbot is a great example of his work! It demonstrates state management with LocalStorage and custom hooks like useAutoScroll for a polished UX.",

      // Technical Demonstration
      "give me a unique id": function () {
        //implement dynamic logic and modern Web APIs
        return `Certainly. Here is a securely generated UUID for your session: ${crypto.randomUUID()}`;
      },

      'goodbye':
        "Thank you for stopping by! I hope you enjoy exploring the rest of the portfolio.",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
