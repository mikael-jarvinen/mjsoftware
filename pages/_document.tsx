import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="alternate" hrefLang="en-US" href="https://mjsoftware.fi/en-US" />
        <link rel="alternate" hrefLang="fi" href="https://mjsoftware.fi/fi" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
