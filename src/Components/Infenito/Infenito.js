import React from 'react';
import './Infenito.css'
import leftBg from "./../images/Rectangle 9470.png";
import humanThought from "./../images/Rectangle 9445.png";
import upImage from "./../images/41617-chatbot 1.png";
import navbarImage from "./../images/7 2 (Traced).png"

const Infenito = () => {
    return (
        <div className='flex justify-end text-white'>
            <section className='bgImage' style={{
                backgroundImage: `url("${leftBg}")`
            }}>
                <div className=' float-left ml-20'>
                    <div className='mt-7'>
                        <a href="https://flowbite.com/" class="flex items-center ">
                            <img src={navbarImage} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">infenito</span>
                        </a>
                    </div>
                    <p className='mt-20'>Welcome to Infenito</p>
                    <h1 className='font-bold text-5xl'>We power <br /> brands to build <br /> big!</h1>
                    <button className=' border-2 border-white font-bold px-20 py-2 mt-10'>Join</button>
                </div>
            </section>
            <section>
                <img className='upImage' src={upImage} alt="" />
                <img className='humanThought' src={humanThought} alt="" />
            </section>
        </div>
    );
};

export default Infenito;