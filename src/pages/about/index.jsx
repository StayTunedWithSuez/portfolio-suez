import AboutMe from "./AboutMe"
import Biography from "./Biography";
import Education from "./Education";


function About() {
  return (
        <div id = "about" className='container-layout my-2'>

            <AboutMe />

            <div className='grid md:grid-cols-2 gap-6 py-2'>
                <Biography />

                <Education />
            </div>
        </div>


  )
}

export default About