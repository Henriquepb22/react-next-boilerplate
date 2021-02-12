import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Boilerplate - Ecommerce</title>
                <meta
                    name="description"
                    content="A simple project boilerplate to work with React, Next, React Testing Library, Styled-components and Typescript"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
