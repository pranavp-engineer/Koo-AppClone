import React from 'react'
import {GrLanguage} from 'react-icons/gr';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button 
  } from '@chakra-ui/react'

const LanguageModal = () => {

  
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    
        <>
      <Button bgColor='transparent' onClick={onOpen}><GrLanguage/></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
     
  )
}

export default LanguageModal