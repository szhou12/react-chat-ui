import React, { useEffect, useRef } from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useAnimation, useInView } from 'framer-motion';
import { MotionBox } from "./MotionUtil";



function HeroRevealAnimation({ children, width = 'fit-content' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView, mainControls, slideControls])

    return (
        <Box ref={ref} position="relative" width={width} overflow="hidden">
            <MotionBox
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.25 }} // duration: animation will take to complete, delay: animation will wait before starting
            >
                {children}
            </MotionBox>

            <MotionBox
                variants={{
                    hidden: { left: '0%' },
                    visible: { left: '100%' },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                style={{
                    position: 'absolute',
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: '#90cdf4',
                    zIndex: 20,
                }}
            >
            </MotionBox>

        </Box>
    )
}

export default function RevealAnimation() {
    return (
        <Box width="full" height="full" bgColor="white" px={{base: 6, lg: 12}} position="relative">
            <Flex
                height="100%"
                alignItems="center"
                justifyContent="center"
                direction={{ base: 'column', md: 'row' }}
                textAlign={{ base: 'center', md: 'left' }}
                position="relative"
                zIndex={1}
            >
                <Box textColor="black">
                    <HeroRevealAnimation>
                        <Heading fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }} color="black" mb={4}>
                            Welcome to ChakraFramer
                        </Heading>
                    </HeroRevealAnimation>

                    <HeroRevealAnimation>
                        <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} textAlign="left" color="black" mb={4}>
                        A modern and accessible React UI framework.
                        </Text>
                    </HeroRevealAnimation>

                    <HeroRevealAnimation>
                        <Text
                        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                        textAlign="left"
                        width={{ base: '280px', md: '400px' }}
                        color="black"
                        mb={2}
                        >
                        I've spent the last 5 years building and scaling software for some pretty cool
                        companies. I also teach people to paint online (in case you've got an empty canvas
                        layin' around 🎨). Let's connect!
                        </Text>
                    </HeroRevealAnimation>
                    
                    <HeroRevealAnimation>
                        <Button 
                            my={5}
                            colorScheme="blue" 
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                        >
                            Contact me
                        </Button>
                    </HeroRevealAnimation>

                </Box>
            </Flex>
        </Box>
    )
}