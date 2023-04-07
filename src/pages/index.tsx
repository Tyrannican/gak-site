import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { renderLogo } from "../utils/logos";

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
          <header className="flex w-full md:max-w-3xl">
            <div className="flex text-2xl p-3 w-1/2">
                <Link href="/">
                    <div className="font-bold">$ cd ~/</div>
                </Link>
            </div>
            <div className="flex text-2xl justify-end w-1/2 p-3">
                <Link href="/cv">
                    <div className="font-bold">CV</div>
                </Link>
            </div>
          </header>

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
          <footer className="justify-center text-slate-100 p-4">
            © gak {new Date().getFullYear()}
          </footer>
      </div>
    </>
  );
};

export default Home;
