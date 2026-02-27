import dayjs from 'dayjs';
import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingImage from '../assets/loading-spinner.gif';
import './ChatInput.css';


export function ChatInput( {chatMessages, setChatMessages} ) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    // Set isLoading to true at the start, and set it to
    // false after everything is done.
    setIsLoading(true);

    setInputText('');

    const newChatMessages =  [
      ...chatMessages, 
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingImage} className="loading-spinner" />,
        sender:'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    //Set isLoading to false after everything is done.
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key ==='Escape'){
      setInputText('');
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }


  return (
    <div className='chat-input-container'>
      <input 
        placeholder = "Send a message to Chatbot" 
        size = "30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value = {inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
      >Send</button>

      <button
        onClick={clearMessages}
        className='clear-button'
      >Clear</button>
    </div>
  );
}