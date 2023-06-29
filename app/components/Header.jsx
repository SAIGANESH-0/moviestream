import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl ml-2 font-bold">Movies App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/series" className="hover:text-gray-300">
                Series
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-gray-300 mr-2">
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
