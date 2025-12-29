import { Code2, Palette, Zap, Download } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Building robust applications with React, TypeScript, Node.js, and other modern frameworks.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Creating user oriented interfaces with attention to detail and user experience.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed, accessibility, scalability, and ",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt parturient porta fusce id, 
              purus commodo nullam. Netus semper imperdiet conubia nisl orci inceptos. Pharetra luctus curae vel 
              lectus penatibus enim montes cras. Porttitor ridiculus eleifend consequat nostra tristique primis. 
              Ac integer nec tempus donec neque; consectetur maximus dis. Justo arcu habitasse at habitasse massa sociosqu eleifend et.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nec habitant ridiculus nam himenaeos tempus. 
              Dignissim et scelerisque lacus aenean habitasse nascetur quis integer quisque. 
              Velit habitant facilisis auctor tempus, fringilla senectus rhoncus tellus. 
              Velit massa non cubilia rhoncus enim nascetur. Consectetur porttitor habitasse venenatis himenaeos proin nisi massa. 
              Pellentesque nisl at vitae enim donec nisl molestie. Pretium proin sociosqu blandit vulputate nisl.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "React",
                "Angular",
                "TypeScript",
                "Javascript",
                "Bootstrap",
                "Node.js",
                "Python",
                "Java",
                "C/C++",
                "PHP",
                "PostgreSQL",
                "SQL",
                "MongoDB",
                "AWS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Download Resume button */}
            <div>
              <a
                href="/files/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
