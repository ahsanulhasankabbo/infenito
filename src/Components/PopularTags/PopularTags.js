import React from 'react';
import fire from "./../images/Vector (1).png";
import box from "./../images/Vector (2).png";
import leftarrow from "./../images/Vector(11).png";
import middlearrow from "./../images/Vector (12).png";
import rightarrow from "./../images/Vector (13).png";
import database from "./../images/Vector (3).png";
import ai from "./../images/AI.png";
import blockchain from "./../images/Vector (4).png";
import "./PopularTags.css"

const PopularTags = () => {
    return (
        <div>
            <hr className='border-2 border-[#F050BE] w-32 ml-20' />
            <p className='font-bold mb-10 ml-20'>See popular tags <br />
                and browse differnt topics</p>
            <div className='flex justify-between'>
                <section className='w-1/2 mx-auto'>
                    <button className='flex mx-auto mt-10 border-2 border-[#ED4B9E] py-2 px-16'><img src={fire} alt="" /> <span className='mx-3'>Different Topics</span></button>
                    
                
                </section>
                <section className='w-1/2'>
                    <div className='flex justify-between'>
                        <div className='ml-10 mr-20 w-1/2'>
                            <img src={box} alt="" />
                            <p className='mt-5 text-2xl'>Application stacks</p>
                            <hr className='border-2 border-[#ED4B9E] my-5' />
                            <p>We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.</p>
                        </div>
                        <div className='ml-10 mr-20 w-1/2'>
                            <div className='flex'>
                                <img src={leftarrow} alt="" />
                                <img className='mx-2' src={middlearrow} alt="" />
                                <img src={rightarrow} alt="" />
                            </div>
                            <p className='mt-5 text-2xl'>Website Stacks</p>
                            <hr className='border-2 border-[#4B4DED] my-5' />
                            <p>Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.</p>
                        </div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='ml-10 mr-20 w-1/2'>
                            <img src={database} alt="" />
                            <p className='mt-5 text-2xl'>Database Stacks</p>
                            <hr className='border-2 border-[#31D0AA] my-5' />
                            <p>We have a set of technologies and services that organizations use to store, manage, and access data.</p>
                        </div>
                        <div className='ml-10 mr-20 w-1/2'>
                            <img src={ai} alt="" />
                            <p className='mt-5 text-2xl'>AI/ML Stacks</p>
                            <hr className='border-2 border-[#F4C751] my-5' />
                            <p>We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control.</p>
                        </div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='ml-10 mr-20 w-1/2'>
                            <img src={blockchain} alt="" />
                            <p className='mt-5 text-2xl'>Blockchain</p>
                            <hr className='border-2 border-[#FF3131] my-5' />
                            <p>We use Blockstack, a project that utilizes blockchain technology to expand the functionalities of bitcoin by serving as a second layer protocol.</p>
                        </div>
                        <div className='ml-10 mr-20 mt-9 w-1/2'>
                            <p className='mt-5 text-2xl'>Gaming Stacks</p>
                            <hr className='border-2 border-[#F4C751] my-5' />
                            <p>Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PopularTags;