import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// V1 - ChatScope UI
import { ChatScopeUI } from './components/ChatScopeUI'
import { useChat } from './hooks/useChat'

// V2 - Tailwind UI
import ConversationUI from './components/ConversationUI'

function App() {

  /**
   * ChatScope UI
   */
  // const { messages, isTyping, handleSend } = useChat()
  // return (
  //   <>
  //     <ChatScopeUI messages={messages} isTyping={isTyping} handleSend={handleSend} />
  //   </>
  // )

  return (
    <QueryClientProvider client={queryClient}>
      <ConversationUI />
    </QueryClientProvider>
  )

}

export default App
