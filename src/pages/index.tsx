import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { renderLogo } from "../utils/logos";
import NavBanner from "../components/NavBanner";
import Footer from "../components/Footer";

const SocialLink = (props: { href: string, logo: string }) => {
    return <a target="_blank" href={props.href} rel="noopener noreferrer">
        { renderLogo(props.logo) }
    </a>
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GAK</title>
        <meta name="description" content="Personal site of Graham Keenan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
          <NavBanner />

          <main className="flex flex-col justify-center w-full md:max-w-3xl h-screen">
            <span className="flex justify-center text-4xl p-4 font-bold">
                <h1>graham</h1>
            </span>
            <span className="flex justify-center p-4">
                software engineer from glasgow, scotland. currently working at the BBC
            </span>
            <span className="flex justify-center space-x-3">
                <SocialLink href="https://hachyderm.io/@tyrannican" logo="mastodon" />
                <SocialLink href="https://github.com/Tyrannican" logo="github" />
                <SocialLink href="https://www.linkedin.com/in/graham-keenan-4007321b8/" logo="linkedin" />
                <SocialLink href="mailto:graham.keenan@outlook.com" logo="mail" />
            </span>
          </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
