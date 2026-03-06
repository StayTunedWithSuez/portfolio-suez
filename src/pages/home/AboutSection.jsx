import AboutMe from "../about/AboutMe";
import Biography from "../about/Biography";
import Education from "../about/Education";


function AboutSection() {
  return (
        <div id = "about" className='container-layout mt-2'>

            <AboutMe />

            <div className='grid md:grid-cols-2 gap-6 py-2'>
                <Biography />
                <Education />
            </div>
        </div>


  )
}

export default AboutSection