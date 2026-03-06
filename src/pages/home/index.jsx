import Hero from "./Hero"
import AboutSection from "./AboutSection"
import SkillSection from "./SkillSection"

function Home() {
  return (
    <div>
        <Hero />
        <AboutSection />
        <SkillSection />

        <div className='h-125'></div>
    </div>
  )
}

export default Home