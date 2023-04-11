import type { NextPage } from "next";
import { renderLogo } from "../utils/logos";

const SocialLink = (props: { href: string, logo: string }) => {
    return <a target="_blank" href={props.href} rel="me">
        { renderLogo(props.logo) }
    </a>
};

const Home: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
