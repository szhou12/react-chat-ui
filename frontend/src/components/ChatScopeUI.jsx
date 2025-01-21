import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { 
  MainContainer,
  ChatContainer, 
  MessageList, 
  Message, 
  MessageInput, 
  TypingIndicator
} from "@chatscope/chat-ui-kit-react"

export function ChatScopeUI({ messages, isTyping, handleSend }) {
  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
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
  )
}