import React from 'react';
import ServicesImage from "./../images/117909-meditation-man 1.png";
import query from "./../images/Vector (14).png";
import desinging from "./../images/Vector(15).png";
import peoples from "./../images/45155-support-system 1.png";

const Services = () => {
    return (
        <div>
            <section>
                <div className='text-center'>
                    <hr className='border-2 border-[#F050BE] w-32 mx-auto mt-20' />
                    <h1 className='text-2xl mt-5 font-bold'>Services we provide</h1>
                    <p>We serve the users in different categories with latest tools</p>
                </div>
                <div>
                    <img className='mx-auto' src={ServicesImage} alt="" />
                </div>
            </section>
            <section>
                <hr className='border-2 border-[#F050BE] w-32 ml-16 mt-20' />
                <p className='font-bold mb-10 ml-16 mt-3'>Let’s See<br />
                    how it works</p>
                <div className='flex justify-evenly'>
                    <div>
                        <img className='border-4 p-8 text-gray-400 rounded-full' src={query} alt="" />
                    </div>
                    <div>
                        <img className='border-4 p-8 text-gray-400 rounded-full' src={desinging} alt="" />
                    </div>
                    <div>
                        <img className='border-4 p-8 text-gray-400 rounded-full' src={query} alt="" />
                    </div>
                    <div>
                        <img className='border-4 p-8 text-gray-400 rounded-full' src={desinging} alt="" />
                    </div>
                </div>
            </section>
            <section className='ml-16'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-2xl'>What you get besides <br />
                        the above things</h1>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='font-semibold'>24/7 Support</p>
                    </div>
                    <img src={peoples} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Services;