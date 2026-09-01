import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "CareerCraft",
    description:
      "AI-powered career platform for resume analysis, job matching, ATS optimization, and interview preparation with microservices architecture.",
    image: "/projects/careercraft.jpg",
    tags: ["React", "TypeScript", "FastAPI", "Python", "LangGraph", "Docker", "Vitest"],
    link: "https://github.com/NohaCode-lab/CareerCraft",
    github: "https://github.com/NohaCode-lab/CareerCraft",
  },
  {
    title: "Fit-Zone",
    description:
      "Full-stack fitness platform with interactive class schedules, trainer bookings, member subscriptions, and workout analytics.",
    image: "/projects/fitness-club.jpg",
    tags: ["React", "NestJS", "PostgreSQL", "Prisma", "Redis", "Gemini AI", "Tailwind CSS"],
    link: "https://github.com/NohaCode-lab/fit-zone",
    github: "https://github.com/NohaCode-lab/fit-zone",
  },
  {
    title: "Supper-Mind",
    description:
      "AI Wellness & Habit SaaS Platform with multilingual support, AI companion, mood analytics, and modern React architecture.",
    image: "/projects/supper-mind.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Supabase", "OpenAI", "Vitest", "i18n"],
    link: "https://github.com/NohaCode-lab/Supper-Mind",
    github: "https://github.com/NohaCode-lab/Supper-Mind",
  },
  {
    title: "Mangata & Gallo",
    description:
      "Luxury jewelry e-commerce web platform featuring dynamic catalog filtering, shopping cart state, and responsive checkout.",
    image: "/projects/jewelry-store.jpg",
    tags: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "Playwright"],
    link: "https://github.com/NohaCode-lab/mangata-gallo",
    github: "https://github.com/NohaCode-lab/mangata-gallo",
  },
  {
    title: "Smart Watch E-Commerce",
    description:
      "Modern e-commerce platform for wearable devices featuring product catalog browsing, specification filtering, and shopping cart management.",
    image: "/projects/Smart-Watch.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    link: "https://github.com/NohaCode-lab/smart-watch-ecommerce",
    github: "https://github.com/NohaCode-lab/smart-watch-ecommerce",
  },
  {
    title: "Coffee Shop & Restaurant",
    description:
      "Interactive restaurant web application featuring dynamic menu browsing, table reservation booking, and location showcase.",
    image: "/projects/restaurant.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Responsive Layout"],
    link: "https://github.com/NohaCode-lab/coffee-shop-website",
    github: "https://github.com/NohaCode-lab/coffee-shop-website",
  },
  {
    title: "Aether-Travel",
    description:
      "Interactive travel exploration platform with dynamic map routing, tour package booking, and destination discovery.",
    image: "/projects/travel-agency.jpg",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Leaflet", "Zustand", "REST APIs"],
    link: "https://github.com/NohaCode-lab/aether-travel",
    github: "https://github.com/NohaCode-lab/aether-travel",
  },
  {
    title: "PetCare Clinic",
    description:
      "Veterinary clinic web portal providing online appointment scheduling, pet medical records, and service management.",
    image: "/projects/pet-clinic.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST APIs"],
    link: "https://github.com/NohaCode-lab/petcare-clinic",
    github: "https://github.com/NohaCode-lab/petcare-clinic",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} repository on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};