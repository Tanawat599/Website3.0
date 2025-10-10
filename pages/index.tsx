import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Body"
import Data from "../components/Data"

const Home: NextPage = () => {

  return (
    <div>
    {/* <div style={{ backgroundColor: "#25262A" }}>. */}
      <Head>
        <title>Kidinventor</title>
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="Tanawat Chuthaphiromporn" />
        <meta name="keywords" content="Portfolio" />
        <meta name="description" content="I am a Computer Engineer" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Kidinventor" />
        <meta property="og:locale" content="en_GB" />
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Kidinventor"/>

      </Head>

      <Header />

      <main >
        <About />
        <Data/>
        {/* <Project/> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;