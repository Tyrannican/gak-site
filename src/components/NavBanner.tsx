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
            <Link href="/cv">
                <div className="font-bold">CV</div>
            </Link>
        </div>
      </header>
    );
};

export default NavBanner;
