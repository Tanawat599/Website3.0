import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../components/Data"
import Experience, { ExperienceItem } from "../components/Experience";
import { sql } from "../lib/db";

interface HomeProps {
  experiences: ExperienceItem[];
}

const Home: NextPage<HomeProps> = ({ experiences }) => {

  return (
    <div style={{ backgroundColor: "#555659" }} className="responsive-padding">
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
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:title" content="Kidinventor" />

      </Head>

      <Header />

      <main >
        <About />
        <Experience experiences={experiences} />
        <Data />
        {/* <Project/> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const experiences = await sql`
      SELECT * FROM experiences 
      ORDER BY id DESC
    `;

    // serialized dates if necessary, but assuming simple types for now
    return {
      props: {
        experiences: JSON.parse(JSON.stringify(experiences)), // clean serialization of dates/undefined
      },
    };
  } catch (error) {
    console.error("Error fetching experiences:", error);
    // Return empty array on error to prevent page crash
    return {
      props: {
        experiences: [],
      },
    };
  }
};

export default Home;