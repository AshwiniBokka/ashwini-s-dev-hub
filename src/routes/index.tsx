import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Ashwini Bokka — Computer Science Engineer & Software Developer";
const description =
  "Portfolio of Ashwini Bokka, Integrated M.Tech CSE student at VIT-AP University — software development, DSA, machine learning, IoT and open-source contributions to Apache TVM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashwini Bokka",
          jobTitle: "Software Developer",
          description,
          alumniOf: { "@type": "CollegeOrUniversity", name: "VIT-AP University" },
          knowsAbout: [
            "Software Development",
            "Data Structures and Algorithms",
            "Machine Learning",
            "IoT",
            "Open Source",
          ],
          sameAs: [
            "https://github.com/ashwinibokka3",
            "https://www.linkedin.com/in/ashwini-bokka-350551395",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen font-body">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
