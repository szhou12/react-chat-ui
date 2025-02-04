import {
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Spacer,
    Stack,
    Text,
} from '@chakra-ui/react'
// import { IconType } from 'react-icons'
import { BiSolidQuoteLeft } from 'react-icons/bi'
// import { FaStar } from 'react-icons/fa'

const reviews = [
    {
        clientName: "John Doe",
        clientImage: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=johndoe',
        review: "I’ve been using Chakra Framer for the past few weeks, and I’m really impressed with its flexibility and ease of use. The integration with framer motion makes animations seamless. Whether you’re building a landing page or an entire website, this kit has all the essentials.",
    },
    {
        clientName: 'Arjun Patel',
        clientImage: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=ArjunPatel',
        review: 'Chakra Framer has made my development process so much faster...',
    },
    {
        clientName: 'Meera Desai',
        clientImage: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=MeeraDesai',
        review: 'Chakra Framer has been a game-changer for my projects!...',
    },
    {
        clientName: 'Rajiv Nair',
        clientImage: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=RajivNair',
        review: 'As a developer who frequently uses Next.js and Chakra UI...',
    },
]


// Props explanation:
// - `Icon`: A React component (e.g., an icon component from a library like react-icons).
// - `iconSize`: The size of the icon.
// - `props`: Any other props passed to the `Box` component.
const CustomIcon = ({ Icon, iconSize, ...props }) => {
    return (
      <Box {...props}>
        <Icon size={iconSize} />
      </Box>
    );
  };

export default function BentoReviewCard() {
    return (
        <Box 
            position="relative"
            display="flex"
            alignItems="center"
        >
            <Stack
                spacing={6}
                px={{
                    base: 0,
                    lg: 10,
                }}
            >
                <Grid
                    templateAreas={{
                        base: `"i1" "i2" "i4" "i3"`,
                        md: `"i1 i2" "i3 i4"`,
                        lg: `"i1 i1 i2" 
                             "i3 i4 i4"`,
                    }}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    templateRows={{
                        base: "auto",
                        md: "repeat(2, 1fr)",
                    }}
                    gap={6}
                >
                    {reviews.map((item, index) => {
                        
                        const area = `i${index + 1}`
                        const isBlue = ['i1', 'i4'].includes(area)
                        console.log(`Rendering review ${index + 1} with area ${area}`)
                        return (
                            <GridItem key={index} area={area}>
                                <Flex
                                    direction="column"
                                    gap={4}
                                    justify="space-between"
                                    bg={isBlue ? '#1EA1E0' : 'gray.300'}
                                    color={isBlue ? 'white' : 'black'}
                                    px={6}
                                    py={8}
                                    borderRadius={'xl'}
                                    position={'relative'}
                                    width={'100%'}
                                    height={'100%'}
                                >
                                    <Stack spacing={4}>
                                        <Avatar src={item.clientImage} bg={isBlue ? 'white' : 'black'} />
                                        <Text>{item.review}</Text>
                                    </Stack>
                                    <Stack>
                                        <strong>{item.clientName}</strong>
                                    </Stack>

                                    <CustomIcon
                                        Icon={BiSolidQuoteLeft}
                                        iconSize="2rem"
                                        position="absolute"
                                        bottom={3}
                                        right={4}
                                    />
                                </Flex>
                            </GridItem>
                        )
                    })}

                </Grid>
            </Stack>
        </Box>
    )
}
