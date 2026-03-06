import Hero from "./Hero"
import AboutSection from "./AboutSection"
import SkillSection from "./SkillSection"
import ProjectsSection from "./ProjectsSection"

function Home() {
  return (
    <div>
        <Hero />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
    </div>
  )
}

export default Home