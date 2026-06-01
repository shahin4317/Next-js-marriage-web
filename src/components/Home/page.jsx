import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="m-0 p-0">

            <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">

                <Image
                    src="/heropic.jpg"
                    alt="hero"
                    fill
                    className="object-cover block"
                />

                <div className="absolute inset-0 bg-black/30" />

                <Link href={'/blog'}><button className="absolute bottom-[60px] left-1/2 -translate-x-1/2 bg-orange-800 text-black font-bold px-6 py-3 rounded-lg">
                “পাত্র/পাত্রী খুঁজতে এখানে ক্লিক করুন”
                    
                </button></Link>

            </div>

        </div>
    );
};

export default HomePage;