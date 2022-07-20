import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@clear/design-system'
import { PrismicProvider } from '@prismicio/react'
import { prismicClient } from '../prismic'

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PrismicProvider client={prismicClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PrismicProvider>
    </ThemeProvider>
  )
}

export default MainApp
