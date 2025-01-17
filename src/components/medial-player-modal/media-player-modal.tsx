import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { MediaPlayer, MediaPlayerProps } from '../media-player';
import { ReactNode } from 'react';
import { Link } from 'lucide-react';

export type MediaPlayerModalProps = MediaPlayerProps & {
  children: (onOpen: () => void) => ReactNode;
};

export const MediaPlayerModal = ({
  children,
  ...mediaPlayerProps
}: MediaPlayerModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {children(onOpen)}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: 'mt-8',
          footer: 'flex items-center',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <MediaPlayer {...mediaPlayerProps} />
              </ModalBody>
              <ModalFooter>
                <a
                  href={mediaPlayerProps.mediaUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex flex-1 space-x-2 overflow-hidden'
                >
                  <Link />
                  <span className='inline-block max-w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-nowrap'>
                    {mediaPlayerProps.mediaUrl}
                  </span>
                </a>
                <Button color='danger' variant='light' onPress={onClose}>
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
