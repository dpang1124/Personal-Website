import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "ScriptChain Health",
    period: "June 2025 - August 2025",
    description: [
      "Resolved application vulnerabilities, including cryptographic flaws, rate-limiting issues, and insecure dependencies via Snyk.",
      "Built responsive, accessible UI components with Angular & Bootstrap, collaborating with Product Designers to meet user needs.",
      "Developed secure RESTful APIs integrating RBAC and FHIR, ensuring HIPAA-compliant encryption at rest and in transit.",
      "Implemented unit and integration tests with Mocha and Jasmine to validate core frontend and backend functionality.",
    ],
    achievements: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "Django",
      "Bootstrap",
      "DBeaver",
      "EHR APIs",
      "Snyk",
      "Mocha",
      "Jasmine",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Lee's Market",
    period: "December 2024 - May 2025",
    description: [
      "Designed a responsive front-end user interface adapting multiple screen sizes using React and Bootstrap libraries.",
      "Implemented user creation and authentication using hashing, salting, and XSRF protection with PostgreSQL, Express, JWT, and PuTTY for secure remote database access.",
      "Collaborated with UX Designer and Product Manager to implement features aligning with customer needs and preferences.",
      "Architected RESTful API endpoints and containerized app & database through docker for scalable deployment.",
    ],
    achievements: [
      "AWS S3",
      "React",
      "React Bootstrap",
      "PostgreSQL",
      "Express",
      "Node.js",
      "JWT",
      "Docker",
      "PuTTY",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-full bg-card border-2 border-primary items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>

                  <div className="p-6 md:p-8 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {exp.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
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

export default ExperienceSection;
