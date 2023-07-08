import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center gap-5 items-center">
        <Link href="/" className="text-xl  font-bold">
          Movies
        </Link>
       
             
           
              <Link href="/search" className=" text-xl  font-bold hover:text-gray-300 ">
                Search
              </Link>
           
        
      </div>
    </header>
  );
};

export default Header;
