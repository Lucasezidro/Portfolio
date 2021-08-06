import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { Profile } from "../components/Home/profile";

export default function Projects() {
    const lineColor = useColorModeValue("gray.700", "gray.500")
    const bg = useColorModeValue("gray.200", "gray.900")
    const txtColor = useColorModeValue("gray.700", "gray.400")

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
            <Profile 
                avatar="https://avatars.githubusercontent.com/u/80000943?v=4"
                name="Lucas Ezidro"
                email="lucasezidro7@gmail.com"
                alt="Lucas Ezidro"
            />

            <Box
                pos="absolute"
                right="150px"
                top="18px"
                color={txtColor}
                fontSize="16"
                fontWeight="bold"
                transition="all 0.6s"
                _hover={{
                    filter: "brightness(0.8)",
                    textDecoration: "underline"
                }}
            >
                <Link href="/home">Home</Link>
            </Box>

            <Box>
                <Image src="/images/lucas.png" w="400px"mt="16" ml="100px" />

                <Box
                    pos="absolute"
                    top="120px"
                    maxW="350px"
                    p="6"
                    right="120px"
                    border="2px solid #1A202C"
                    borderRadius="8"
                    
                >
                    <Heading mb="4">Quem eu sou ?</Heading>

                    <Text color={txtColor}>
                        Meu nome é Lucas dos Santos Ezidro, eu sou front-end developer.
                        Atualmente faço curso superior de analise e desenvolvimento de sistemas,
                        mas tenho formação em outros cursos como curso de HTML e CSS do curso em video,
                        o curso de React e o de node JS do ignite da rocketseat, curso de ITIL da fundação
                        Bradesco, curso de ingles da Kultive, e curso em andamento de ingles do professor Mairo Vergara
                        entre outros! <br/> Sou apaixanado pela area de programação e estou sempre disposto
                        a aprender coisas novas e pornto para novos desafios!
                    </Text>
                </Box>
            </Box>

        </Flex>
    )
}