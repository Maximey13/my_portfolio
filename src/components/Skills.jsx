export default function Skills() {
  const skillCategories = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["PHP", "Symfony", "MySQL", "PostgreSQL"],
    "DevOps & Tools": ["Git", "Linux"],
    "Programming Languages": ["C", "C++", "Python"],
    Networking: [
      "TCP/IP",
      "Subnetting",
      "Cisco Packet Tracer",
      "Switches & Routers",
      "VLSM",
      "ARP",
      "DNS",
    ],
  };

  return (
    <section id="skills" className="bg-slate-300 text-darkNavyBlue py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold inline-block mb-12 text-center relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-darkNavyBlue after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Skills
          </h2>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow text-center py-3 px-2 font-medium transition-all duration-200 hover:bg-vibrantOrange hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
