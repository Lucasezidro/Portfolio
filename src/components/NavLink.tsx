import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export function NavLink(){
    const txtColor = useColorModeValue("gray.700", "gray.400")


    return(
        <>
        <Box
        pos="absolute"
        right="138px"
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
        <Link href="/channel">Channel</Link>
    </Box>


    <Box
        pos="absolute"
        right="215px"
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

    <Box
        pos="absolute"
        right="280px"
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
        <Link href="/projects">Projects</Link>
    </Box>

    <Box
        pos="absolute"
        right="363px"
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
        <Link href="/about">About</Link>
    </Box>
    </>
    )
}