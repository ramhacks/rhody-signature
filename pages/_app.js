import Head from "next/head"
import "../styles/globals.css"

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rhody Signature</title>
        <meta
          name="description"
          content="Easy email signature creator for students, faculty and staff at the University of Rhode Island."
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
