import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='container mx-auto mb-8 space-y-4'>
            <div className='pt-10 space-y-3'>
                <h1 className='text-xl font-bold '>1. আমরা আপনার জীবনের সঠিক জীবনসঙ্গী খুঁজে দিতে সাহায্য করি</h1>
                <p className='text-sm'>আমরা বিশ্বাস করি, একটি সুন্দর সম্পর্কই জীবনের সবচেয়ে বড় সুখ। তাই আমরা আপনাকে নিরাপদ ওসহজভাবে আপনার পছন্দের পাত্র/পাত্রী খুঁজে পেতে সাহায্য করি।</p>
            </div>
            <div>
                <h1 className='text-xl font-bold '>2. আমাদের লক্ষ্য</h1>
                 <p className='text-sm'>আমাদের লক্ষ্য হলো প্রতিটি মানুষের জন্য একটি বিশ্বস্ত ও সহজ প্ল্যাটফর্ম তৈরি করা, যেখানে তারা নিজের পছন্দ অনুযায়ী জীবনসঙ্গী খুঁজে পেতে পারে।</p>

            </div>
            <div>
                <h1 className='text-xl font-bold '>4. কেন আমাদের বেছে নেবেন</h1>
                 <p className='text-sm ml-6'>
                 <li>100% সহজ ব্যবহারযোগ্য প্ল্যাটফ</li>
                 <li>নিরাপদ ও বিশ্বাসযোগ্য সার্ভিস</li>
                 <li>দ্রুত ম্যাচ খুঁজে পাওয়ার সুবিধা</li>
                 <li>আধুনিক ডিজাইন ও ফাস্ট সিস্টেম</li></p>

            </div>
            <div>
                <h1 className='text-xl font-bold '>3. আমরা কী করি</h1>
                 <p className='text-sm ml-6'>
                 <li>পাত্র/পাত্রী খোঁজার সহজ ব্যবস্থা</li>
                 <li>প্রোফাইল যাচাই (optional feature)</li>
                 <li>নিরাপদ যোগাযোগ ব্যবস্থা</li>
                 <li>পছন্দ অনুযায়ী ম্যাচ সাজেস্ট করা</li></p>

            </div>
            <div>
                <h1 className='text-xl font-bold text-center '>আমরা বিশ্বাস করি ভালো সম্পর্ক ভাগ্য নয়, সঠিক মানুষের সাথে পরিচয়ের সুযোগ।</h1>
            </div>
            <div className='text-center'>
                <Link href={'/blog'}><button className='btn bg-red-800 '>“পাত্র/পাত্রী খুঁজুন”</button></Link>
            </div>
        </div>
    );
};

export default AboutPage;