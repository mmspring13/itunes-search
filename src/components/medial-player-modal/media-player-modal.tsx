import { Button, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/react";
import { MediaPlayer, MediaPlayerProps } from "../media-player";
import { ReactNode } from "react";
import { Link } from "lucide-react";

export type MediaPlayerModalProps = MediaPlayerProps & {
  children: (onOpen: () => void) => ReactNode;
};

export const MediaPlayerModal = ({
  children,
  ...mediaPlayerProps
}: MediaPlayerModalProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      {children(onOpen)}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{
        body: 'mt-8',
        footer: 'flex items-center'
      }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <MediaPlayer {...mediaPlayerProps}  />
              </ModalBody>
              <ModalFooter>
                <a
                  href={mediaPlayerProps.mediaUrl}
                  target="_blank" rel="noopener noreferrer" className="inline-block"
                >
                  <Link />
                </a>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};