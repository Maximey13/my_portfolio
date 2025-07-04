import Socials from "./Socials";

export default function Header() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Colonne gauche */}
        <div
          className="md:w-1/2 flex flex-col justify-center space-y-6
                        bg-softGray rounded-r-3xl shadow-lg p-3 md:p-12">
          <h1 className="relative text-3xl md:text-5xl font-bold text-darkNavyBlue">
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-darkNavyBlue after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
              Hello, I'm Maxime You
            </span>
          </h1>
          <p className="text-lg text-darkNavyBlue">
            I'm a student at ISEN, specializing in web development and software
            engineering. Passionate about creating innovative solutions and
            learning new technologies.
          </p>
          <Socials />
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          {/* Ajout d'une photo de profil */}
          <img
            src="/profile.jpg"
            alt="Maxime You"
            className="w-64 h-64 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
