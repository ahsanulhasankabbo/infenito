import React from 'react';
import gossip from "./../images/Rectangle 9476.png";
import paper from "./../images/Rectangle 9477.png";
import yoga from "./../images/Rectangle 9478.png";

const Doubt = () => {
    return (
        <div className='w-3/4 mx-auto bg-[#FFE5F7] pt-10 pb-24 rounded-3xl'>
            <div className='text-center'>
                <hr className='border-2 border-[#F050BE] w-32 mx-auto' />
                <h1 className='text-xl font-bold my-4'>Still have a doubt ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <section className='flex items-center mt-14'>
                <img className='ml-[-40px]' src={gossip} alt="" />
                <div className='left-2'>
                    <h1 className='mx-4'>About Infenito, <br /> insights about us</h1>
                    <hr className='border-2 border-[#F050BE] w-32 mx-auto' />
                </div>
                <img src={paper} alt="" />
                <div>
                    <h1 className='mx-4'>See our latest blogs <br /> about stacks</h1>
                    <hr className='border-2 border-[#F050BE] w-32 mx-auto' />
                </div>
                <img className='mr-[-40px]' src={yoga} alt="" />
            </section>
        </div>
    );
};

export default Doubt;