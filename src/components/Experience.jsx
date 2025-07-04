// src/components/Experience.jsx

export default function Experience() {
  const experiences = [
    {
      date: "February 2025",
      title: "Order Picker",
      company: "E.Leclerc Drive – La Roche-sur-Yon",
      description:
        "Handled order preparation and managed deliveries for online grocery customers.",
    },
    {
      date: "September – December 2024",
      title: "Bar Server",
      company: "Stade de la Beaujoire",
      description:
        "Served drinks and handled customer flow during high-attendance events.",
    },
    {
      date: "Summer 2024 & School Holidays",
      title: "Sales Assistant – Bakery Section",
      company: "E.Leclerc La Roche Sud",
      description:
        "Restocked shelves and assisted customers in the bakery department.",
    },
    {
      date: "July – August 2023",
      title: "Order Picker",
      company: "Espace des Marques – Boissière-des-Landes",
      description:
        "Prepared and packaged fashion product orders in a warehouse environment.",
    },
    {
      date: "June 2023",
      title: "Order Preparer",
      company: "Pharmacie Acti-Sud – La Roche-sur-Yon",
      description:
        "Managed pharmaceutical product orders for delivery to local pharmacies.",
    },
  ];

  return (
    <section id="experience" className="bg-darkNavyBlue py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-softGray mb-8 text-center underline-animate">
          Experiences
        </h2>
      </div>
      <div className="max-w-3xl mx-auto border-l-2 border-vibrantOrange pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <span className="absolute left-[-22px] top-2 w-3 h-3 rounded-full bg-vibrantOrange border-2 border-darkNavyBlue shadow"></span>
            <p className="text-sm text-gray-500">{exp.date}</p>
            <h3 className="text-xl font-semibold text-softGray">
              {exp.title} – <span className="text-skyBlue">{exp.company}</span>
            </h3>
            <p className="text-slate-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
