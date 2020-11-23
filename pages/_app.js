import Head from 'next/head'
import '../styles/globals.css'

function Application({ Component, pageProps }) {
  return <>
    <Head>
      <title>Rhody Signature</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default Application
