import SectionDivider from "@/components/section-divider";
import Intro from "../components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skillls";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
   <Intro />
   <SectionDivider />
   <About />
   <Projects />
   <Skills />
   <Experience />
   <Contact />
    </main>
  )
}
