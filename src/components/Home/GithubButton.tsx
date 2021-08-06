import { Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";
import { FaGithub } from 'react-icons/fa'

export function GithubButton() {
    const [session] = useSession()
    const bgButton = useColorModeValue("gray.600", "gray.800")

    return session ? (
            <Button
                pos="absolute"
                top="15px"
                right="210px"
                w="180px"
                display="flex"
                align="center"
                justify="space-around"
                color="gray.50"
                borderRadius="50"
                bg={bgButton}
                onClick={() => signOut()}
            >
                <Icon as={FaGithub} color="blue.400" />
                <Text ml="2">Sign out</Text>

            </Button>
        
            ) : (
            <Button
                pos="absolute"
                top="15px"
                right="210px"
                w="180px"
                color="gray.50"
                borderRadius="50"
                bg={bgButton}
                display="flex"
                align="center"
                justify="space-around"
                onClick={() => signIn('github')}
            >
                <Icon as={FaGithub} color="red.500" />
                <Text ml="2">Sign in</Text>
            </Button>
    )    
}