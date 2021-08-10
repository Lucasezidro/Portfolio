import { Box, Flex, Heading, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { AboutCourses } from "../components/about";
import { Profile } from "../components/Home/profile";
import { FaPython, FaUniversity } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";


export default function About() {
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

          <AboutCourses 
            icon={FaUniversity}
            courses="FMU - Analise e desenvolvimento de sistemas"
            status="cursando até 07/2024"
          />
          
          <AboutCourses 
            icon={GoRocket}
            courses="Ignite - Curso completo de ReactJS"
            status="Completo em 06/2021 "
            top="110px"
          />

          <AboutCourses 
            icon={FaPython}
            courses="Udemy - Python do basico ao avançado"
            status="Completo em 12/2020"
            top="220px"
          />

          <AboutCourses 
            icon={IoLogoJavascript}
            courses="Dev Samurai - JavaScript"
            status="Completo em 01/2021"
            top="330px"
          />

        </Flex>
    )
}