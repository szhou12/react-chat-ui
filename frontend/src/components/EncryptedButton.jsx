import React, { useRef, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

export default function EncryptedButton({
  plainText = "Encrypt data",
  cyclesPerLetter = 2,
  shuffleTime = 50,
  cipherChars = "!@#$%^&*():{};|,.<>/?",
  ...props
}) {
  const intervalRef = useRef(null);
  const [text, setText] = useState(plainText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = plainText
        .split("")
        .map((char, index) => {
          if (pos / cyclesPerLetter > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * cipherChars.length);
          const randomChar = cipherChars[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= plainText.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(plainText);
  };

  return (
    <Flex gap={4} alignItems="center">
      {/* Original Encrypted Button with Framer Motion */}
      <Button
        as={motion.button}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        w="fit-content"
        overflow="hidden"
        borderRadius="lg"
        borderWidth="1px"
        bgColor="gray.800"
        borderColor="gray.900"
        px={4}
        py={2}
        fontFamily="mono"
        fontWeight="medium"
        textTransform="uppercase"
        color="gray.200"
        transition="color 0.2s"
        _hover={{
          color: "green.300",
        }}
        role="group"
        {...props}
      >
        <Box as={Flex} position="relative" zIndex={10} alignItems="center" gap={2}>
          <FiLock />
          <span>{text}</span>
        </Box>
      </Button>

      {/* New Regular Chakra Button */}
      <Button
        w="fit-content"
        overflow="hidden"
        borderRadius="lg"
        borderWidth="1px"
        bgColor="gray.800"
        borderColor="gray.900"
        px={4}
        py={2}
        fontFamily="mono"
        fontWeight="medium"
        textTransform="uppercase"
        color="gray.200"
        transition="all 0.2s"
        _hover={{
          color: "green.300",
          transform: "scale(1.025)"
        }}
        _active={{
          transform: "scale(0.975)"
        }}
        {...props}
      >
        <Box as={Flex} position="relative" zIndex={10} alignItems="center" gap={2}>
          <FiLock />
          <span>Regular Button</span>
        </Box>
      </Button>
    </Flex>
  );
}
