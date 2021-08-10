import { Box, Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export function ContactButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef()
    const ButtonColor = useColorModeValue("blue.600", "blue.500")


  return (
    <>

        <Button 
            pos="relative"
            top="100px"
            left="200px"
            bg={ButtonColor}
            color="gray.50"
            transition="all 0.6s"
            _hover={{
                filter: "brightness(0.8)"
            }}
            onClick={onOpen}
            w="300px"
        >
        Contact me
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.400">Contact Lucas Ezidro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Button
                w="100%"
                bg="green.400"
                color="black"
                _hover={{bg: "green.500"}}
              >
                  <Icon as={FaWhatsapp} pos="relative" right="2" />
                  <Link href="https://web.whatsapp.com/send?phone=5511991428954">WhatsApp</Link>
              </Button>

              <Button
                w="100%"
                bg="gray.900"
                color="gray.300"
                mt="4"
                _hover={{bg: "gray.800"}}
              >
                  <Icon as={FaGithub} pos="relative" right="2" />
                  <Link href="https://github.com/Lucasezidro">GitHub</Link>
              </Button>

              <Button
                w="100%"
                bg="blue.500"
                color="black"
                mt="4"
                _hover={{bg: "blue.600"}}
              >
                  <Icon as={FaFacebook} pos="relative" right="2" />
                  <Link href="https://www.facebook.com/lucas.ezidro/">Facebook</Link>
              </Button>

              <Button
                w="100%"
                bg="orange.400"
                color="black"
                mt="4"
                _hover={{bg: "orange.500"}}
              >
                  <Icon as={FaInstagram} pos="relative" right="2" />
                  <Link href="https://www.instagram.com/ezidropics/">Instagram</Link>
              </Button>

              <Button
                w="100%"
                bg="blue.400"
                color="black"
                mt="4"
                _hover={{bg: "blue.500"}}
              >
                  <Icon as={FaLinkedin} pos="relative" right="2" />
                  <Link href="https://www.linkedin.com/in/lucasezidro/">LinkedIn</Link>
              </Button>
          </ModalBody>

          <ModalFooter>
            <Button bg="gray.900" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}