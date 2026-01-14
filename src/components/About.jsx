import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-linear-to-b from-gray-800 to-black pb-10! md:pb-0! text-white' >
        <div className='max-w-screen-lg p-4! mx-auto! flex flex-col justify-center w-full h-full'>
            <div className='pb-8!'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-10! md:mt-20!'>I am a MERN Stack Developer with hands-on experience in building responsive, scalable, and user-centric web applications. Skilled in React for dynamic frontend development and Node.js, Express, and MongoDB for designing robust backend systems and RESTful APIs.</p>

            <p className='text-xl my-8!'>Experienced in implementing authentication, role-based authorization, API integration, database modeling, and deployment of full-stack applications. Strong focus on clean code, performance optimization, and building real-world projects that follow industry best practices.</p>

            <p className='text-xl'>Continuously learning and improving by working on practical projects and exploring modern web technologies to deliver efficient and maintainable solutions.</p>
        </div>
    </div>
  )
}

export default About