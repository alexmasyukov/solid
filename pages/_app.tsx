import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../themes/main'
import { MDXProvider } from '@mdx-js/tag'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>SOLID</title>
        </Head>
        <GlobalStyle />
        <MDXProvider
          components={{
            wrapper: 'section',
            thematicBreak: 'section'
          }}
        >
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MDXProvider>
      </Container>
    )
  }
}
