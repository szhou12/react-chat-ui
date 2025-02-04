import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ChakraProvider } from "@chakra-ui/react" 

// V1 - ChatScope UI
import { ChatScopeUI } from './components/ChatScopeUI'
import { useChat } from './hooks/useChat'

// V2 - Tailwind UI
import ConversationUI from './components/ConversationUI'

import BentoReviewCard from './components/BentoReviewCard'
import RevealAnimation from './components/RevealAnimation'
import EncryptedButton from "./components/EncryptedButton"


import { Box, Button, Flex } from "@chakra-ui/react";
import { FiLock } from "react-icons/fi";

const queryClient = new QueryClient()

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
    // <QueryClientProvider client={queryClient}>
    //   <ConversationUI />
    // </QueryClientProvider>

    <ChakraProvider>
      <div>
        <BentoReviewCard />
      </div>
    </ChakraProvider>

    // <ChakraProvider>
    //   <div>
    //     <RevealAnimation />
    //   </div>
    // </ChakraProvider>

    // <ChakraProvider>
    //   <div>
    //     <EncryptedButton plainText="Encrypt data" />
    //   </div>
    // </ChakraProvider>
    
    
  )

}

export default App
