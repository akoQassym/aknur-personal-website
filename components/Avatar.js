import { Box, Image, Flex, keyframes, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

export const Avatar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) return false;

  return (
    <>
      <Box
        as="button"
        onClick={onOpen}
        type="button"
        cursor={'pointer'}
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: 'scale(1.03)',
        }}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius="50%"
            width={{ base: '50%', md: '30%', lg: 'full' }}
            src="avatar.jpeg"
            alt="Aknur"
            boxShadow="rgba(240, 130, 250, 0.35) 0px 5px 15px"
          />
        </Flex>
      </Box>
    </>
  );
};
