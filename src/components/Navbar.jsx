export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-softGray text-darkNavyBlue shadow-md">
      <div className="h-20 flex flex-wrap justify-between items-center px-4 md:px-8">
        <div className="text-2xl font-bold hover:text-vibrantOrange transition-colors">
          Maxime You
        </div>
        <ul className="flex flex-wrap px-2 md:px-4 space-x-6 md:space-x-10 text-base">
          <li>
            <a
              href="#home"
              className="hover:text-vibrantOrange transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-vibrantOrange transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-vibrantOrange transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-vibrantOrange transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-vibrantOrange transition-colors">
              Experiences
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
