import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ContactButton } from "../components/Home/ContactButton";
import { GithubButton } from "../components/Home/GithubButton";
import { Profile } from "../components/Home/profile";
import Link from 'next/link'

export default function HomeIndex(){

    const txtColor = useColorModeValue("gray.700", "gray.400")
    const linkColor = useColorModeValue("blue.800", "blue.300")
    const lineColor = useColorModeValue("gray.700", "gray.500")
    const bg = useColorModeValue("gray.200", "gray.900")

    return(
        <Flex
            w="100%"
            h="100vh"
            bg={bg}
            _after={{
                pos: "absolute",
                content: "''",
                h: "2px",
                w: "100%",
                bg: lineColor,
                top: "100px"
            }}
        >

            <GithubButton />

            <Profile 
                avatar="https://avatars.githubusercontent.com/u/80000943?v=4"
                name="Lucas Ezidro"
                email="lucasezidro7@gmail.com"
                alt="Lucas Ezidro"
            />

            <Heading pos="absolute" top="160px" left="410px">
                👋 Hi My name is Lucas Ezidro!
            </Heading>

            <Box mt="220px">
                <Text fontSize="30" pos="relative" left="170px" color={txtColor}>i'm a front-end developer</Text>
                <Box display="flex" mt="8">
                    <Text ml="203px">To learn more about my work</Text>
                    <Box color={linkColor} _hover={{ filter: "brightness(0.8)", textDecoration: "underline" }} ml="2">
                        <Link href="/about">click here</Link>
                    </Box>
                </Box>

                <ContactButton />


            </Box>
        </Flex>
    )
}