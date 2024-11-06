import Link from "next/link";

function Header() {
  return (
    <div className="bg-blue-500 w-full ">
      <main className="text-center bg-backgroundDark py-4 md:flex md:justify-around items-center">
        <Link href={"/"}>
          {" "}
          <h2 className="text-accentOrange font-extrabold font-mono text-2xl ">
            Muhammad Hassaan.
          </h2>
        </Link>
        <nav className="space-x-2 md:space-x-5">
          <Link className="hover:text-accentOrange" href="/">
            Home
          </Link>
          <Link className="hover:text-accentOrange" href="skills">
            Skills
          </Link>
          <Link className="hover:text-accentOrange" href="projects">
            Projects
          </Link>
          <Link className="hover:text-accentOrange" href="about">
            About
          </Link>
          <Link className="hover:text-accentOrange" href="contact">
            Contact
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default Header;
