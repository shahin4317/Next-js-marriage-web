"use client";
import Link from "next/link";
import { useState } from "react";

const groomsData = [
  {
    id: 1,
    name: "Rakibul Islam",
    age: "20",
    profession: "প্রেম করা",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৭″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত",
    location: "Dinajpur",
    salary: "বাবার টাকায় চলে, মাসে খরচ ২ লাখ টাকা।",
    familyType: "বিদেশি",
    complexion: "ফর্সা",
    hobbies: ["প্রেম করা"],
    image: "/rakib.jpeg",
    about: "একজনের প্রতি লয়াল কিন্তু ৪ জনের সাথে প্রেম করে,ভেবে চিন্তে যোগাযোগ করবেন।",
  },
  {
    id: 2,
    name: "Titumir Ahamed",
    age: "২0",
    profession: "শয়তানি করা",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৭″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত+বিবাহিত",
    location: "Dinajpur",
    salary: "বাড়ি আছে, ২ তলা ভাড়া দেবে।",
    familyType: "বড়লোক",
    complexion: "শয়তানি না, আসলে ফর্সা",
    hobbies: ["বিয়ে করা", "ক্রোম তার খুব পছন্দের ওয়েবসাইট"],
    image: "/t2.png",
    about: "একজন ভালো মানুষ, তার একটি স্ত্রী আছে এবং তিনটি সন্তান। এক বছর আগে বিয়ে হয়েছে। এখন প্রথম স্ত্রীর অনেক চাপ দেয়। এখন আমাদের ওয়েবসাইটের মাধ্যমে গোপনে দ্বিতীয় বিয়ে করবে। সাধারণ ও সৎ মনের একজন মানুষ, পরিবারকে সবচেয়ে বেশি গুরুত্ব দেন এই কারণে সে দ্বিতীয় বিয়ে করবে।",
  },
  {
    id: 3,
    name: "Ripon Karmokar",
    age: "২0",
    profession: "Protection Saller and Treder ",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৮″",
    religion: "হিন্দু",
    maritalStatus: "অবিবাহিত",
    location: "Dinajpur",
    salary: "ট্রেডারের মাসিক আয় ১ লাখ।",
    familyType: "বড়লোক",
    complexion: "ফর্সা",
    hobbies: ["টানাটানি করা", "পুলিশ", "বউয়ের প্রেমিক"],
    image: "/ripon.jpeg",
    about: "দায়িত্বশীল এবং ভদ্র স্বভাবের একজন ব্যক্তি,বিয়াইনি ছাড়া কাউকে ভালোবাসে না।",
  },
  {
    id: 4,
    name: "Abir Noman",
    age: "২0",
    profession: "ট্র্যাক ইঞ্জিনিয়ার",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৮″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত",
    location: "Chirirbandar ",
    salary: "টাকা-পয়সা নিয়ে কোনো সমস্যা নেই।",
    familyType: "দুইজন বউয়ের অনেক গয়না আছে, তারা খুব বড়লোক।",
    complexion: "ফর্সা",
    hobbies: ["ট্র্যাক চলা", "ক্রোমে মুভি দেখা"],
    image: "/noman.jpeg",
    about: "গোপন তথ্য একদিন একটা মেয়ের জন্য কাঁদছিল। তারপর সে দুইটা বিয়ে করেছে গোপনে। তার পাঁচটা ছেলে সন্তান আছে। প্রথম স্ত্রী বডি বিল্ডার, কথা বেশি বলে এবং হাতের ঝগড়া বেশি হয়। এখন সে তৃতীয় বিয়েতে বসতে চায়। জীবনে সে খুব দুঃখে আছে।কিন্তু পরিশ্রমী এবং উচ্চাকাঙ্ক্ষী একজন মানুষ।",
  },
  {
    id: 5,
    name: "Fuad Hasan Nur",
    age: "২0",
    profession: "ফুলবাড়ীতে ফুলের দোকান।",
    education: "ব্যাচেলর অব আর্টস",
    height: "৫′৬″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত",
    location: "Chiribandar ",
    salary: "টাকায় ফুল।",
    familyType: "শ্বশুরের অনেক জমি আছে।",
    complexion: "রাশিয়ান কালার",
    hobbies: ["শুধু ফুলবাড়ী যাওয়া শখ", "আর কিছু নেই", ],
    image: "/fuad.jpeg",
    about: "সৃজনশীল এবং বন্ধুসুলভ স্বভাবের একজন ব্যক্তি। তার বউ ফোন দিলে এলাকায় আর তাকে পাওয়া যায় না। বউ তাকে খুব ভয় দেখায়, এজন্য সে আবার বিয়ে করবে।",
  },
  {
    id: 6,
    name: "Mahmudul Sagor",
    age: "20",
    profession: "ডাক্তার",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৬″",
    religion: "ইসলাম",
    maritalStatus: "বিবাহিত",
    location: "SaidPur",
    salary: "১,২০,০০০ টাকা",
    familyType: "উচ্চবিত্ত",
    complexion: "রাশিয়ান কালার",
    hobbies: ["ওসব বলা যাবে না।",],
    image: "/sagor.jpeg",
    about: "গোপন সম্পর্কে আছে, খুব লয়াল, কিন্তু স্বভাব খারাপ—টাকা ধার দিলে সবসময়ই চায়।",
  },
  {
    id: 7,
    name: "Shawon Ahmed",
    age: "২১",
    profession: "তাল খাওয়া",
    education: "Higher Secondary Certificate in Humanities/Arts (Running)",
    height: "৫′৭″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত",
    location: "Tangail",
    salary: "৩৫,০০০ টাকা শূন্যগুলো বাথ।",
    familyType: "বড়লোক",
    complexion: "সেই ফরসা",
    hobbies: ["নারীর টানে দিনাজপুর আসা।", ],
    image: "/shawon.jpeg",
    about: "হাসিখুশি এবং পরিবারপ্রেমী একজন মানুষ।",
  },
  {
    id: 8,
    name: "Suvo Roy",
    age: "20",
    profession: "ক্যাসিনো ব্যবসায়ী",
    education: "Higher Secondary Certificate in Science (Running)",
    height: "৫′৬″",
    religion: "হিন্দু",
    maritalStatus: "অবিবাহিত",
    location: "Nagat88",
    salary: "৯০,০০০ টাকা (সব ক্যাসিনো)",
    familyType: "উচ্চ বড়লোক",
    complexion: "উজ্জ্বল শ্যামলা",
    hobbies: ["ব্যবসা", "ক্যাসিনো খেলা", ],
    image: "/suvo.jpeg",
    about: "সৎ এবং দায়িত্বশীল স্বভাবের একজন ব্যক্তি। একজন খুব পরিশ্রমী মানুষ কষ্ট করে ক্যাসিনো খেলে ১০০ টাকার জন্য সব করতে পারে, কিন্তু মানুষ ভালো—টাকা-পয়সার অভাব নেই।",
  },
  {
    id: 9,
    name: "Shahin",
    age: "20",
    profession: "",
    education: "",
    height: "৫′৭″",
    religion: "ইসলাম",
    maritalStatus: "অবিবাহিত",
    location: "Dinajpur",
    salary: "০ টাকা",
    familyType: "",
    complexion: "",
    hobbies: ["Data Not Found",],
    image: "/shahin.jpeg",
    about: "",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ─── Single Groom Card (same look as first widget) ─── */
function GroomCard({ data, onSeeMore }) {
  return (
    <div className="bg-red-800 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
      {/* Photo / Avatar */}
      <div className="flex justify-center pt-5 pb-2">
        {data.image ? (
          <img
            src={data.image}
            alt={data.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white/20"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-red-700 border-4 border-white/20 flex items-center justify-center text-white text-3xl font-medium select-none">
            {getInitials(data.name)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <h2 className="text-white font-semibold text-base leading-snug mt-1">
          {data.name}
        </h2>
        <p className="text-red-200 text-sm">{data.profession}</p>
        <p className="text-red-200 text-sm mb-3">বয়স: {data.age} বছর</p>

        {/* Hobby tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {data.hobbies.map((h) => (
            <span
              key={h}
              className="bg-white/10 text-white text-xs px-2.5 py-1 rounded-full border border-white/15"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={() => onSeeMore(data)}
            className="w-full border border-white/40 text-white hover:bg-white hover:text-red-800 text-sm py-2 rounded-xl transition-colors duration-150 font-medium"
          >
            বিস্তারিত দেখুন →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Detail Modal ─── */
function GroomModal({ groom, onClose }) {
  if (!groom) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-red-800 rounded-t-2xl p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-xl leading-none"
          >
            ✕
          </button>

          <div className="flex items-center gap-4">
            {groom.image ? (
              <img
                src={groom.image}
                alt={groom.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30 flex-shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-red-700 border-2 border-white/30 flex items-center justify-center text-white text-xl font-medium flex-shrink-0 select-none">
                {getInitials(groom.name)}
              </div>
            )}
            <div>
              <p className="text-white font-semibold text-lg">{groom.name}</p>
              <p className="text-red-200 text-sm">{groom.profession}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-white/15 text-white text-xs px-2.5 py-1 rounded-full">
                  ✓ যাচাইকৃত
                </span>
                <span className="bg-white/15 text-white text-xs px-2.5 py-1 rounded-full">
                  {groom.maritalStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2 p-4">
          {[
            { label: "বয়স", value: groom.age + " বছর" },
            { label: "উচ্চতা", value: groom.height },
            { label: "মাসিক আয়", value: groom.salary },
          ].map((s) => (
            <div key={s.label} className="bg-red-50 rounded-xl p-3 text-center">
              <p className="text-red-800 font-semibold text-sm">{s.value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="px-4 pb-5 space-y-3">
          <InfoSection title="ব্যক্তিগত তথ্য">
            <InfoRow label="গায়ের রং" value={groom.complexion} />
            <InfoRow label="ধর্ম" value={groom.religion} />
            <InfoRow label="অবস্থান" value={groom.location} />
          </InfoSection>

          <InfoSection title="শিক্ষা ও পেশা">
            <InfoRow label="শিক্ষা" value={groom.education} />
            <InfoRow label="পেশা" value={groom.profession} />
            <InfoRow label="মাসিক আয়" value={groom.salary} />
          </InfoSection>

          <InfoSection title="পারিবারিক তথ্য">
            <InfoRow label="পারিবারিক অবস্থা" value={groom.familyType} />
          </InfoSection>

          <InfoSection title="শখ ও আগ্রহ">
            <div className="flex flex-wrap gap-1.5 pt-1">
              {groom.hobbies.map((h) => (
                <span
                  key={h}
                  className="bg-red-50 text-red-800 text-xs px-3 py-1 rounded-full border border-red-100"
                >
                  {h}
                </span>
              ))}
            </div>
          </InfoSection>

          <div className="bg-red-50 rounded-xl p-3 border-l-4 border-red-700">
            <p className="text-gray-600 text-sm italic">{groom.about}</p>
          </div>

          <Link href={'/blog/raw'}><button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl text-sm font-medium transition-colors">
            যোগাযোগ করুন
          </button></Link>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ title, children }) {
  return (
    <div className="border border-gray-100 rounded-xl p-3">
      <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
        {title}
      </p>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
      <span className="text-gray-400 text-xs">{label}</span>
      <span className="text-gray-800 text-xs font-medium">{value}</span>
    </div>
  );
}

/* ─── Main Page ─── */
export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("groom");
  const [selectedGroom, setSelectedGroom] = useState(null);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <div className="bg-red-800 py-10 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          জীবনসঙ্গী খুঁজুন সহজেই
        </h1>
        <p className="text-red-200 text-sm md:text-base mt-1">
          পছন্দের পাত্র অথবা পাত্রী খুঁজে নিন একদম সহজ উপায়ে
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-red-300 mb-8 max-w-xs mx-auto">
          {[
            { key: "groom", label: "পাত্র" },
            { key: "bride", label: "পাত্রী" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === tab.key
                  ? "bg-red-800 text-white"
                  : "bg-white text-gray-500 hover:text-red-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Groom Grid */}
        {activeTab === "groom" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {groomsData.map((groom) => (
              <GroomCard
                key={groom.id}
                data={groom}
                onSeeMore={setSelectedGroom}
              />
            ))}
          </div>
        )}

        {/* Bride empty state */}
        {activeTab === "bride" && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl font-bold mb-2">
              ভালো পাত্রী খুঁজে পাওয়া যায়নি 😊
            </p>
            <p>দয়া করে পাত্র বিভাগটি দেখুন</p>
            <p className="mt-1">কি, রাগ করলা ? 🙂</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedGroom && (
        <GroomModal
          groom={selectedGroom}
          onClose={() => setSelectedGroom(null)}
        />
      )}
    </div>
  );
}
