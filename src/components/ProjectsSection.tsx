import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Lee's Market",
    description:
      "A full-stack e-commerce application with real-time inventory, online ordering, admin dashboard, blogs, and more.",
    tags: ["React", "Javscript", "Node.js", "PostgreSQL", "Docker", "Bootstrap"],
    image: "../public/images/Cart.png",
    github: "#",
    live: "#",
  },
  {
    title: "Margn",
    description:
      "Collaborative course project featuring online bookstore platform with social features, personalized recommendations, and seamless reviewing system.",
    tags: ["React", "Javascript", "OpenLibrary", "MySQL", "Redis", "PHP"],
    image: "../public/images/Margn.png",
    github: "#",
    live: "#",
  },
  {
    title: "Meal Delivery Platform",
    description:
      "Interactive data visualization dashboard with customizable widgets and real-time updates.",
    tags: ["HTML", "CSS", "JavaScript", "Nominatim", "Google Maps API", "PHP"],
    image: "../public/images/Meal.png",
    github: "#",
    live: "#",
  },
  {
    title: "Forest Classifier",
    description:
      "Big data application using Hadoop, Spark, and Machine Learning to predict forest health within Buffalo to maximize ecoproductivity.",
    tags: ["Next.js", "Prisma", "tRPC", "Tailwind"],
    image: "../public/images/Forest.png",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
