import Link from 'next/link';
import React from 'react';

const RawPage
    = () => {
        return (
            <div className='container mx-auto mb-30 justify-center pt-20'>
                <div className='bg-amber-50 p-20 rounded-xl space-y-2'>
                    <h1 className='text-black text-center text-xl font-bold'>এত বিয়ে করার শখ 😂 😂</h1>
                    <div className='text-center'>
                        <Link  href={'/blog'}> <button className=' text-black btn bg-red-800 '> আগের মেনুতে যান</button></Link>

                    </div>


                </div>

            </div>
        );
    };

export default RawPage
    ;