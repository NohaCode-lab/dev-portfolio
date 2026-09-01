import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Noha is one of the most talented developers I've worked with. Her attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Mahmoud Habib",
  },
  {
    quote:
      "Working with Noha was a game-changer for our project. She delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
  },
  {
    quote:
      "Noha's expertise in React helped us improve our frontend significantly. Her work continues to add real value.",
    author: "Emily Watson",
  },
  {
    quote:
      "Not only is Noha technically strong, but she's also a great communicator and team player.",
    author: "David Kim",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Circle */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-center">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* Author */}
              <div className="font-semibold text-primary text-center text-lg">
                {testimonials[activeIdx].author}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};