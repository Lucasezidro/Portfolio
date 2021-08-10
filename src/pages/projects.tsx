import { Box, Button, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Projects() {
    const bg = useColorModeValue("gray.200", "gray.900")
    return(
        <Flex w="100%" h="100vh" bg={bg} display="flex" align="center" justify="center">
           <Tabs defaultIndex={1}>
            <TabPanels>
                <TabPanel>
                <Image
                    w="1100px"
                    h="450px"
                    borderRadius="10"
                    fit="cover"
                    src="/images/ignews.jpeg"
                />
                  <Box pos="absolute" right="200px" bottom="120px" fontSize="20" color="blue.300" transition="all 0.6s" _hover={{ filter: "brightness(0.8)" }}>
                    <Link href="https://github.com/Lucasezidro/ig.news">Ver repositorio</Link>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Image
                   w="1100px"
                   h="450px"
                   borderRadius="10"
                   fit="cover"
                   src="/images/loginDark.jpeg"
                />

                <Box pos="absolute" right="200px" bottom="120px" fontSize="20" color="blue.300" transition="all 0.6s" _hover={{ filter: "brightness(0.8)" }}>
                    <Link href="https://github.com/Lucasezidro/Yellow-4">Ver repositorio</Link>
                </Box>
                </TabPanel>
                <TabPanel>
                <Image
                    w="1100px"
                    h="450px"
                    borderRadius="10"
                    fit="cover"
                    src="/images/dashgo.jpeg"
                />
                <Box pos="absolute" right="200px" bottom="120px" fontSize="20" color="blue.300" transition="all 0.6s" _hover={{ filter: "brightness(0.8)" }}>
                    <Link href="https://github.com/Lucasezidro/Dashgo">Ver repositorio</Link>
                </Box>
                </TabPanel>
            </TabPanels>
            <TabList>
                <Tab>Ig.news</Tab>
                <Tab>Yellow</Tab>
                <Tab>Dahgo</Tab>
            </TabList>
        </Tabs>
            
        </Flex>
    )
}