import { ThemeProvider } from 'styled-components'
import { PageProvider } from '../data/ContextPage'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <GlobalStyle />
      </PageProvider>
    </>
  )
}
