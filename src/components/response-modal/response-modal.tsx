import { ItunesResponse } from '@/api/types';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

export type ResponseModalProps = {
  data: ItunesResponse;
  children: (v: boolean, set: (v: boolean) => void) => React.ReactNode;
};

export const ResponseModal = ({ data, children }: ResponseModalProps) => {
  const [open, setOpen] = useState(false);

  const str = useMemo(() => JSON.stringify(data, null, 2), [data]);

  return (
    <>
      {children(open, setOpen)}
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        classNames={{
          body: 'mt-8 max-h-[80dvh] overflow-auto',
          footer: 'flex items-center',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h4>Full Response</h4>
              </ModalHeader>
              <ModalBody>
                <pre className='whitespace-pre-wrap'>{str}</pre>
              </ModalBody>
              <ModalFooter>
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

export default ResponseModal;
