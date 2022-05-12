import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { FC } from 'react';

const theme = extendTheme({
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
        },
    },
});

export const withUI = (Component: FC) => () =>
    (
        <ChakraProvider>
            <Component />
        </ChakraProvider>
    );
