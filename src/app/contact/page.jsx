import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';
import { MdOutgoingMail } from 'react-icons/md';

const ContactPage = () => {
    return (
        <div className='container mx-auto pt-4 mb-4'>
            <div className="bg-red-800 text-black max-w-md mx-auto rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    যোগাযোগ করুন
                </h2>

                <div className="space-y-4 text-lg font-medium">

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold">📞</span>
                        <p className='font-semibold'>01850840896</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaFacebook className="text-blue-600 text-xl" />

                        <a
                            href="https://www.facebook.com/share/1BT6TE1viZ/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                        >
                            Facebook Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaLinkedin className="text-blue-700 text-xl" />

                        <a
                            href="https://www.linkedin.com/in/md-shahin-alam-1b24aa321/?skipRedirect=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-blue-700 text-xl" />

                        <a
                            href="https://github.com/shahin4317"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                        >
                            GitHub Profile
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold"> <MdOutgoingMail /> </span>
                        <p className='font-semibold'>shahinalam4317@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className=""><BsWhatsapp></BsWhatsapp></span>
                        <p className='font-semibold'>  WhatsApp: 01850840896</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <p className='font-semibold'>সকাল ১০টা - রাত ৮টা</p>
                    </div>
                </div>

                <p className="text-center mt-6 text-base font-semibold text-xl">
                    যেকোনো প্রয়োজনে যোগাযোগ করুন ❤️
                </p>
                <p className="text-center mt-6 text-base font-semibold text-white">আমাদের ওয়েবসাইট সম্পর্কে আরও বিস্তারিত জানতে নিচের বাটনে ক্লিক করুন</p>
                <div className='text-center pt-2'>
                    <Link href='/about'><button className='btn p-2 items-center'>Click Here</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;