import React from 'react'
import { MdDownloadForOffline } from "react-icons/md";
import { IoBody } from "react-icons/io5";

function AboutMe() {
    return (
        <section id = "about" className='container-layout mt-4'>

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

            <div className='grid md:grid-cols-2 gap-6 items-center py-4'>
                <div className='space-y-4'>
                    <h3 className='text-lg text-gray-900 font-semibold'>Biography</h3>
                    <div>
                        <div className='flex rounded-md  bg-gray-200 w-full p-2 items-center space-x-6'>
                            <div className='bg-purple-700 text-white px-8 py-4 text-3xl rounded-md'><IoBody /></div>
                            <div className='flex w-full text-md text-gray-800 font-medium'>
                                <span className='w-1/3'>Age:</span>
                                <span className='w-2/3'>23 Years Old</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





            <div className='h-[500px]'></div>
        </section>
    )
}

export default AboutMe