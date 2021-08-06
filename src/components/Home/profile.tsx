import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ElementType } from "react";

interface ProfileProps {
    avatar: string;
    email: string | ElementType;
    name: string;
    alt: string;
}

export function Profile({avatar, email, name, alt}: ProfileProps) {
    const txtColor = useColorModeValue("gray.700", "gray.400")
    const emailColor = useColorModeValue("gray.900", "gray.50")

    return(
        <Flex mt="4" ml="4" display="flex">
            <Avatar name={alt} src={avatar} />

            <Text mt="6" ml="4" color={txtColor} fontWeight="400">{email}</Text>
            <Text pos="relative" right="180px" color={emailColor} fontWeight="600">{name}</Text>
        </Flex>
    )
}