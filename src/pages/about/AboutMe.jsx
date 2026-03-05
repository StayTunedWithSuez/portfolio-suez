
import { MdDownloadForOffline } from "react-icons/md";

function AboutMe() {
    return (

        <div className='grid md:grid-cols-2 gap-6 py-4 items-center'>

            <div className='flex flex-col items-start gap-2'>

                <h2 className='text-2xl font-semibold text-gray-900'>About Me</h2>

                <span className='text-gray-800 text-md font-medium'>I Really Love To Create Amazing Websites.</span>

                <a className=' inline-flex bg-purple-600 text-white px-6 py-2 text-md font-semibold items-center gap-2 rounded-full transition duration-300 hover:bg-purple-700' href="#">Download CV <MdDownloadForOffline /></a>

            </div>

            <div className='space-y-2 text-gray-800 font-normal'>

                <p>
                    I am a final year Mechanical Engineering student with a strong interest in web development and technology.
                </p>

                <p>
                    I enjoy building modern and responsive websites using React and Tailwind CSS.
                </p>

                <p>
                    I focus on creating clean, user-friendly, and efficient web applications.
                    Currently, I am exploring full-stack development and backend technologies.
                </p>
            </div>

        </div>
    )
}

export default AboutMe