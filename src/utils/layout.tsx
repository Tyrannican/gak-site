import Head from "next/head";
import Link from "next/link";

const NavBanner = () => {
   return ( 
      <header className="flex w-full md:max-w-3xl">
        <div className="flex text-2xl p-3 w-1/2">
            <Link href="/">
                <div className="font-bold">$ cd ~/</div>
            </Link>
        </div>
        <div className="flex text-2xl justify-end w-1/2 p-3">
            <Link href="/cv.pdf" target="_blank">
                <div className="font-bold">CV</div>
            </Link>
        </div>
      </header>
    );
};

const Footer = () => {
  return <footer className="justify-center text-slate-100 p-4">
    © gak {new Date().getFullYear()}
  </footer>
};

type LayoutProps = {
  children: React.ReactNode
};

const Layout = ({children}: LayoutProps) => {
  return (
    <> 
      <Head>
        <title>GAK</title>
        <meta name="description" content="GAK Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen overflow-y-scroll">
        <NavBanner />
        <main className="flex flex-col justify-center w-full md:max-w-3xl h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
