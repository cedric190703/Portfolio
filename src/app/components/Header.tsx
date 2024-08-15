import Link from "next/link";

const Header = () => {
    return (
        <header className="lg:w-1/3 w-full rounded-lg shadow bg-gray-800 mb-14">
            <div className="w-full max-w-screen-xl p-4 flex items-center justify-center">
                <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:mt-0 md:space-x-6">
                    <li>
                        <Link href="/" passHref legacyBehavior>
                            <a
                                className="transition-bg ease-in-out hover:bg-gradient-to-r from-[#6E6E6E] to-white p-2 text-white hover:text-black rounded duration-300">
                                Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref legacyBehavior>
                            <a
                                className="transition-bg ease-in-out hover:bg-gradient-to-r from-[#6E6E6E] to-white p-2 text-white hover:text-black rounded duration-300">
                                About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" passHref legacyBehavior>
                            <a
                                className="transition-bg ease-in-out hover:bg-gradient-to-r from-[#6E6E6E] to-white p-2 text-white hover:text-black rounded duration-300">
                                Projects</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
