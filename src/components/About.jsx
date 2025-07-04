export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-300 text-darkNavyBlue py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-3xl inline-block font-bold mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-darkNavyBlue after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            About Me
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            I'm a computer engineering student with a strong interest in web and
            software development. I enjoy learning new technologies and turning
            ideas into functional and clean applications.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Currently, I’m working with tools like React, Tailwind CSS, C#, C
            and Qt to build real-world projects, both in school and on my own.
          </p>
          <p className="text-lg leading-relaxed">
            I’m looking to grow as a developer through hands-on experience and
            collaborative work. I value clean code, efficient design, and
            continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
