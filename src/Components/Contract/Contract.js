import React from 'react';
import girl from "./../images/113015-contact-us 1.png";
import bg from "./../images/Rectangle 9482.png";
import instagram from "./../images/Vector(21).png";
import twitter from "./../images/Vector (22).png";
import linkedIn from "./../images/Vector (23).png";

const Contract = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2 ml-20'>
                <hr className='border-2 border-[#F050BE] w-32 mt-20' />
                <h1 className='text-2xl font-bold my-3'>Let’s Buid Something <br /> AWESOME !</h1>
                <p className='font-semibold'>One of the Tech Experts will reach out to you within next <br />
                    48 business hours.</p>
                <img src={girl} alt="" />
                <h1 className='font-bold text-xl mb-3'>Follow us on</h1>
                <div className='flex'>
                    <img src={instagram} alt="" />
                    <img className='mx-5' src={twitter} alt="" />
                    <img src={linkedIn} alt="" />
                </div>
            </div>
            <div className='w-1/2 bg-no-repeat bg-contain' style={{ backgroundImage: `url("${bg}")` }}>
                <h1 className='text-white text-2xl font-bold ml-12 mt-10'>Drop us a message</h1>
                <p className='ml-12 text-white'>We would love to hear everything from you</p>
                <div class="flex items-center justify-center p-12">
                    <div class="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div class="mb-5">
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-white"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="email"
                                    class="mb-3 block text-base font-medium text-white"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="number"
                                    class="mb-3 block text-base font-medium text-white"
                                >
                                    Contact Number
                                </label>
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    class="w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="subject"
                                    class="mb-3 block text-base font-medium text-white"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    class="w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="description"
                                    class="mb-3 block text-base font-medium text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    rows="4"
                                    name="description"
                                    id="description"
                                    class="w-3/4 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    class="hover:shadow-form bg-[#0E0E2C] py-3 px-20 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;