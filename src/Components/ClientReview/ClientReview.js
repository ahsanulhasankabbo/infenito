import React from 'react';
import review from "./../images/Rectangle 9480.png"

const ClientReview = () => {
    return (
        <div className='flex items-center justify-between my-16 mx-20'>
            <h1 className='text-2xl'>What our Client’s <br /> say about us ?</h1>
            <div className='flex items-end'>
                <div className='bg-[#31D0AA] text-white rounded-l-full rounded-tr-full p-10'>
                    <p>Look no further. These guys are great to work with! VERY GOOD <br />
                        COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.</p>
                    <h1 className='mt-5'>DAVID</h1>
                    <p>Jr. Manager at SUBROS, India</p>
                </div>
                <img className='ml-5 h-1/2 bottom-0' src={review} alt="" />
            </div>
        </div>
    );
};

export default ClientReview;