import AboutMe from "./AboutMe"
import Biography from "./Biography";
import Education from "./Education";


function About() {
  return (
        <div id = "about" className='container-layout mt-2'>

            <AboutMe />

            <div className='grid md:grid-cols-2 gap-6 py-2'>
                <Biography />

                <Education />
            </div>



            <div className='h-[500px]'></div>
        </div>


  )
}

export default About