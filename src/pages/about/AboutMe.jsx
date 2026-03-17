
import { MdDownloadForOffline } from "react-icons/md";

function AboutMe() {
    return (

        <div className='grid md:grid-cols-2 gap-6 py-4 items-center'>

            <div className='flex flex-col items-start gap-2'>

                <h2 className='text-2xl font-semibold text-text-primary/90'>About Me</h2>

                <span className='text-text-primary/80 text-md font-medium'>I Really Love To Create Amazing Websites.</span>

                <a className=' inline-flex bg-primary text-surface px-6 py-2 text-md font-semibold items-center gap-2 rounded-full transition duration-300 hover:bg-primary-dark' href="#">Download CV <MdDownloadForOffline /></a>

            </div>

            <div className='space-y-2 font-normal bg-primary/5 p-4 rounded-lg shadow border-l-4 border-secondary transition-transform duration-300 cursor-pointer hover:scale-103'>

                <p className="text-justify">
                    I am a final year Mechanical Engineering student with a strong interest in web development and technology. I enjoy building modern and responsive websites using React and Tailwind CSS. I focus on creating clean, user-friendly, and efficient web applications. Currently, I am exploring full-stack development and backend technologies.
                </p>
            </div>

        </div>
    )
}

export default AboutMe