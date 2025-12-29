import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelors of Science in Computer Science",
    school: "University at Buffalo, SUNY",
    period: "2022 - 2025",
    description:
      "Relevant coursework: Algorithms & Complexity, Data Structures, Systems Programming, Software Quality in Practice, Software Engineering, Computer Architecture, Object Oriented Programming, Web Applications.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Queens College, CUNY",
    period: "2021 - 2022",
    description:
      "Relevant coursework: Intro to Computer Science, Object Oriented Programming, Calculus I & II",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
   
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50">
                    <span className="text-primary text-sm font-medium">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {item.school}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
