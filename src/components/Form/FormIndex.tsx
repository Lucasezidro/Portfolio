import { Box, Button, Flex, FormLabel, Heading, Icon, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/client'
import { useRouter } from "next/dist/client/router";
import { useAuth } from '../../hooks/useAuth'


export function FormIndex() {
    const router = useRouter()
    const { signInWithGoogle } = useAuth()

    const bg = useColorModeValue("gray.50", "gray.900")
    const bgInput = useColorModeValue("gray.500", "gray.900")
    const bgForm = useColorModeValue("gray.300", "gray.800")
    const title = useColorModeValue("gray.700", "gray.400")
    const subTitle = useColorModeValue("purple.700", "blue.500")

    async function SignInWithGithub(){
        signIn()

        await router.push('/home')
    }

    async function SignInWithGoogle(){
        await signInWithGoogle()

        router.push('/home')
    }


    return(
        <Flex
            w="100%"
            h="100vh"
            display="flex"
            align="center"
            justify="center"
            bg={bg}
        >
            <Stack spacing="4">
                <Box
                    as="form" 
                    width="100%" 
                    maxWidth={360}
                    bg={bgForm}
                    p="8"
                    borderRadius={8}
                    flexDir="column"
                >
                    <Heading size="md" color={title}>
                        Welcome, my name is Lucas
                    </Heading>
                    <Text color={subTitle} ml="8" mt="2">and i'm a Front-end Developer</Text>

                    <FormLabel color={title} mt="8" ml="3" fontWeight="600">What do you prefer to be called?</FormLabel>
                    <Input
                        type="text"
                        placeholder="username"
                        variant="filled"
                        focusBorderColor={subTitle}
                        _placehoder={{ color: "gray" }}
                        bg={bgInput}
                        mt="4"
                        w="300px"
                    />


                    <Button
                        mt="8" 
                        mb="6"  
                        w="300px" 
                        bg="gray.900"
                        color="white" 
                        transition="all 0.6s" 
                        _hover={{ bg: "gray.700" }}
                        onClick={SignInWithGithub}
                    >

                        <Icon as={FaGithub} pos="relative" right="40px" />
                        <Text mt="1">Continue com Github</Text>
                    </Button>

                    <Button 
                        w="300px" 
                        bg="blue.500"
                        color="white" 
                        transition="all 0.6s" 
                        _hover={{ bg: "blue.700" }}
                        onClick={SignInWithGoogle}
                    >

                        <Icon as={FaGoogle} pos="relative" right="40px" />
                        <Text mt="1">Continue com Google</Text>
                    </Button>
                </Box>
            </Stack>

        </Flex>
    )
}