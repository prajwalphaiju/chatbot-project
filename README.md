**Interactive Logic Assistant 🤖**


A production-ready chatbot interface built with React, focusing on state persistence, smooth user experience, and modern Web APIs.

🚀 Key Technical Features

    State Persistence: Implemented localStorage synchronization to ensure conversation history remains intact across browser refreshes and sessions.
    
    Custom Auto-Scroll Hook: Developed a specialized useAutoScroll hook using useRef and useEffect to manage the message container's scroll position dynamically as new content arrives.
    
    Secure Identity Management: Leverages the crypto.randomUUID() API for generating unique keys for every message, ensuring efficient React reconciliation and preventing console warnings.
    
    Asynchronous UX: Features a managed isLoading state that provides visual feedback (loading spinner) during bot processing to mimic real-world API interactions.
    
    Dynamic Response Mapping: Built a professional response engine that handles both static text-based triggers and functional logic for dynamic data generation.

🛠️ Tech Stack

    Frontend: React.js (Hooks, Functional Components)
    
    Date Management: Day.js for real-time message timestamping
    
    Persistence: Browser LocalStorage API
    
    Styling: CSS3 (Modular component-based styling)
    
    Library: supersimpledev Chatbot logic

📂 Project Structure

    ChatInput.jsx: Handles user interaction, input validation, and asynchronous message dispatching.
    
    ChatMessages.jsx: Manages the display list and implements the auto-scroll behavior.
    
    ChatMessage.jsx: A presentational component for rendering individual user and robot messages with profile images and timestamps.
    
    App.jsx: The central orchestrator managing global state and the professional response logic.

🔧 Installation & Setup
    Clone the repository:

    git clone https://github.com/prajwalphaiju/chatbot-project.git

Install dependencies:

    npm install
Run the development server:

    npm run dev
    
📝 Professional Use Cases
The bot is pre-configured to handle professional inquiries such as:

    Greetings: Responds to "hi" and "hello" with a professional summary.

    Tech Stack: Details the developer's proficiency in React, TypeScript, and Node.js.

    Live Demos: Includes a unique id trigger to demonstrate real-time logic execution via the crypto API.
