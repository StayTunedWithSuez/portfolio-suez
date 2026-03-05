import AboutMe from "../about/AboutMe";
import Biography from "../about/Biography";


function AboutSection() {
  return (
        <div id = "about" className='container-layout mt-2'>

            <AboutMe />

            <div className='grid md:grid-cols-2 gap-6 items-center py-2'>
                <Biography />
            </div>



            <div className='h-[500px]'></div>
        </div>


  )
}

export default AboutSection