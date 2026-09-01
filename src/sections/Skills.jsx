import {
  Layout,
  Server,
  Database,
  Sparkles,
  Workflow,
  CheckCircle2,
  Cloud,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description:
      "Modern component-driven UIs, state management, client-side routing, and responsive web design.",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Leaflet",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description:
      "Server-side services, micro-frameworks, authentication, and RESTful API integrations.",
    skills: [
      "Node.js",
      "Express.js",
      "Fastify",
      "NestJS",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    description:
      "Relational schemas, ORM modeling, document stores, caching, and vector indexing.",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Supabase",
      "Firebase",
      "Redis",
      "pgvector",
    ],
  },
  {
    title: "AI & AI Engineering",
    icon: Sparkles,
    description:
      "LLM integrations, agentic workflows, retrieval-augmented generation (RAG), and prompt design.",
    skills: [
      "Generative AI",
      "OpenAI API",
      "Google Gemini",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI Automation",
    icon: Workflow,
    description:
      "End-to-end workflow automation, webhook pipelines, and automated business integrations.",
    skills: [
      "n8n",
      "AI Workflow Automation",
      "API Automation",
      "Data Processing",
      "Process Discovery",
      "Google Sheets API",
    ],
  },
  {
    title: "Testing & QA",
    icon: CheckCircle2,
    description:
      "Automated unit testing, integration tests, and end-to-end verification workflows.",
    skills: [
      "Vitest",
      "Playwright",
      "Pytest",
      "Jest",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description:
      "Containerization, continuous integration/deployment, and scalable cloud hosting.",
    skills: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description:
      "Version control, UI design handoff, API testing, and code quality tooling.",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "ESLint",
      "npm",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills forged through
            <span className="font-serif italic font-normal text-white">
              {" "}
              real-world building.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A comprehensive overview of engineering technologies, frameworks, and workflows demonstrated across full-stack web applications, AI integrations, and automated pipelines.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl glow-border flex flex-col justify-between animate-fade-in hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(idx % 4 + 1) * 100}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/30">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
