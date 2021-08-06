import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import theme from '../../styles/themes'

export default class Mydocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <title>Lucas Ezidro</title>
                </Head>

                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}