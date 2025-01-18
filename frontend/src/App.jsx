import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { 
  MainContainer,
  ChatContainer, 
  MessageList, 
  Message, 
  MessageInput, 
  TypingIndicator
} from "@chatscope/chat-ui-kit-react"

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your AI assistant.",
      sender: "ChatGPT",
      direction: "incoming"
    }
  ]) // [message object, ...]

  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async (message) => {
    // create a message object
   const newMessage = {
    message: message,
    sender: "user",
    direction: "outgoing"
   }

   const newMessages = [...messages, newMessage] // all old messages + new message passed in

   // update messages state
   setMessages(newMessages)

   // set a typing indicator
   setIsTyping(true)
   // process message to chatgpt (send it over and see the response)
  }

  return (
    <>
      <div className="App">
        <div style={{ position: "relative", height: "800px", width: "700px"}}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={isTyping ? <TypingIndicator content="AI Agent is thinking" /> : null}
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  )
}

export default App
