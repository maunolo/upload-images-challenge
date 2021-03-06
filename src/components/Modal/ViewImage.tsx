import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link
} from '@chakra-ui/react'

interface ModalViewImageProps {
  isOpen: boolean
  onClose: () => void
  imgUrl: string
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="pGray.900" w="auto" h="auto" maxW="full">
        <ModalBody p={0}>
          <Image src={imgUrl} maxH="600px" maxW="900px" />
        </ModalBody>

        <ModalFooter
          justifyContent="start"
          bgColor="pGray.800"
          borderRadius="0 0 15px 15px"
        >
          <Link href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
