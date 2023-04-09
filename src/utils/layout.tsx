import Head from "next/head";
import Footer from "~/components/Footer";
import NavBanner from "~/components/NavBanner";

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

      <div className="flex flex-col justify-center items-center h-screen">
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
