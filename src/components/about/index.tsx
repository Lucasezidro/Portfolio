import { Box, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ElementType } from "react";

interface AboutProps {
    icon: ElementType;
    courses: string;
    status: string;
    top?: string;
}

export function AboutCourses(props: AboutProps) {
    const boxColor = useColorModeValue("gray.400", "gray.800")
    const txtStatus = useColorModeValue("purple.700", "blue.400")
    const txtColor = useColorModeValue("gray.700", "gray.400")

    return(
        <Stack spacing="4">
            <Box
                pos="absolute"
                top="150px"
                left="80px"
            >
            <Box 
                w="350px" 
                h="90px" 
                bg={boxColor} 
                borderRadius="10"
                pos="relative"
                top={props.top}
            >
                <Icon as={props.icon} ml="4" mt="4" color={txtColor} fontSize="20" />

                <Text 
                    fontSize="12"
                    fontWeight="bold"
                    pos="relative"
                    left="45px"
                    bottom="15px"
                    color={txtColor}
                >
                    {props.courses}
                </Text>

                <Text
                    pos="relative"
                    fontSize="16"
                    left="43px"
                    fontWeight="bold"
                >
                    Status -
                </Text>

                <Text pos="relative" left="110px" bottom="22px" color={txtStatus}>{props.status}</Text>
            </Box>
        </Box>
    </Stack>
    )
}