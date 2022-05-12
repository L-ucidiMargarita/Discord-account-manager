import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { FC } from 'react';

export const withColorMode = (Component: FC) => () =>
    (
        <>
            <ColorModeScript initialColorMode='dark' />
            <Component />
        </>
    );
