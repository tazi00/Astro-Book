import React from "react";
import StorySlider from "@/components/story-slider";

function HomePage() {
  return (
    <div className="lg:overflow-y-scroll md:pt-0 pt-[52px]">
      <div
        className="top-0 left-0 w-full h-[2px] 
bg-[linear-gradient(to_right,white_0%,white_20%,gray_50%,white_80%,white_100%)]"
      ></div>
      <StorySlider />
      <div className="space-y-4 md:overflow-y-scroll h-screen">
        <PostFeed />
      </div>
    </div>
  );
}

export default HomePage;

export function AstroPostCard({ post }: { post: any }) {
  return (
    <div className="w-full mx-auto bg-white overflow-hidden ">
      <div
        className="top-0 left-0 w-full h-[2px] 
bg-[linear-gradient(to_right,white_0%,white_20%,gray_50%,white_80%,white_100%)]"
      ></div>

      {/* Header */}
      <div className="flex items-center justify-between p-1 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-300 flex items-center justify-center text-white font-semibold">
            S
          </div>

          <div>
            <p className="font-semibold text-secondary"> {post?.name}</p>
            <p className="text-xs text-tertiary mt-[-4px] ">{post?.tag}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-primary text-xs font-medium">Follow +</button>
          <span className="text-3xl">⋮</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-[480px] bg-gradient-to-br from-indigo-900 via-purple-700 to-fuchsia-600 flex items-center justify-center">
        {/* Sword like object (fake placeholder) */}
        <div className="absolute left-6 top-4 rotate-12 w-1 h-72 bg-yellow-400 rounded-full" />

        <div className="text-center px-6">
          <h2 className="text-white text-3xl font-bold mb-3">
            প্রতিটি নার্সিনী
          </h2>

          <p className="text-white/80 text-sm leading-relaxed">
            ইহা নারী শক্তির প্রতীক, শক্তি রূপে প্রতিষ্ঠিত। নক্ষত্রের সংস্পর্শে
            নক্ষত্রের মতো ঝলমল করে।
          </p>
        </div>

        {/* Branding */}
        <div className="absolute bottom-4 left-4 text-white font-semibold">
          Astro <span className="text-pink-300">Book</span>
        </div>

        <div className="absolute bottom-4 right-4 text-white text-sm">
          শুভেচ্ছা ও শুভকামনা
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 space-y-3">
        <p className="text-xs text-gray-700">
          মাসের আগমন থেকে সকল বাধার অবসান...
          <span className="text-gray-400">more</span>
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-gray-600">
            <span>👍 {post.likes}</span>
            <span>💬 {post.comments}</span>
            <span>↗ {post.shares}</span>
          </div>

          <button className="bg-primary text-white px-4 py-1  text-xs hover:bg-primary transition">
            Book Now
          </button>
        </div>

        <p className="text-xs text-gray-400">{post.date}</p>
      </div>
    </div>
  );
}

export function PostFeed() {
  const posts = [
    {
      id: 1,
      name: "Suprio Karmakar",
      tag: "Vedic",
      title: "প্রতিটি নার্সিনী",
      desc: "ইহা নারী শক্তির প্রতীক, শক্তি রূপে প্রতিষ্ঠিত।",
      bg: "from-indigo-900 via-purple-700 to-fuchsia-600",
      likes: 121,
      comments: 22,
      shares: 3,
      date: "01 Nov, 2025",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      tag: "Astrology",
      title: "শক্তির উত্থান",
      desc: "আজ নতুন শক্তি তোমার জীবনে প্রবেশ করবে।",
      bg: "from-emerald-700 via-teal-600 to-cyan-500",
      likes: 88,
      comments: 14,
      shares: 2,
      date: "02 Nov, 2025",
    },
    {
      id: 3,
      name: "Anita Roy",
      tag: "Tarot",
      title: "ভাগ্যের চাকা",
      desc: "ভাগ্য আজ তোমার পক্ষে ঘুরছে।",
      bg: "from-orange-700 via-amber-600 to-yellow-400",
      likes: 201,
      comments: 41,
      shares: 9,
      date: "03 Nov, 2025",
    },
    {
      id: 4,
      name: "Raj Das",
      tag: "Vedic",
      title: "নতুন সূচনা",
      desc: "পুরনো দুঃখ শেষ হয়ে নতুন পথ খুলবে।",
      bg: "from-rose-700 via-pink-600 to-fuchsia-500",
      likes: 99,
      comments: 10,
      shares: 1,
      date: "04 Nov, 2025",
    },
    {
      id: 5,
      name: "Megha Sen",
      tag: "Numerology",
      title: "সংখ্যার রহস্য",
      desc: "আজকের দিন ভাগ্যবান সংখ্যা নিয়ে আসবে।",
      bg: "from-slate-800 via-gray-700 to-zinc-600",
      likes: 77,
      comments: 8,
      shares: 0,
      date: "05 Nov, 2025",
    },
    {
      id: 6,
      name: "Arjun Paul",
      tag: "Tarot",
      title: "নতুন আশা",
      desc: "আশার আলো অন্ধকার দূর করবে।",
      bg: "from-blue-800 via-sky-600 to-cyan-400",
      likes: 150,
      comments: 20,
      shares: 4,
      date: "06 Nov, 2025",
    },
    {
      id: 7,
      name: "Kavita Roy",
      tag: "Vedic",
      title: "শান্তির পথ",
      desc: "মনের অশান্তি ধীরে ধীরে কমবে।",
      bg: "from-lime-700 via-green-600 to-emerald-400",
      likes: 66,
      comments: 6,
      shares: 1,
      date: "07 Nov, 2025",
    },
    {
      id: 8,
      name: "Suman Ghosh",
      tag: "Astrology",
      title: "তারার বার্তা",
      desc: "নক্ষত্র আজ শুভ সংকেত দিচ্ছে।",
      bg: "from-violet-900 via-purple-800 to-indigo-600",
      likes: 190,
      comments: 30,
      shares: 6,
      date: "08 Nov, 2025",
    },
    {
      id: 9,
      name: "Neha Das",
      tag: "Tarot",
      title: "ভবিষ্যতের চিহ্ন",
      desc: "ভবিষ্যৎ আজ তোমাকে ডাকছে।",
      bg: "from-red-800 via-orange-600 to-amber-500",
      likes: 54,
      comments: 5,
      shares: 0,
      date: "09 Nov, 2025",
    },
    {
      id: 10,
      name: "Amit Sen",
      tag: "Numerology",
      title: "সাফল্যের সময়",
      desc: "আজ সাফল্য খুব কাছাকাছি।",
      bg: "from-neutral-800 via-stone-700 to-zinc-500",
      likes: 300,
      comments: 60,
      shares: 12,
      date: "10 Nov, 2025",
    },
  ];

  return (
    <div className="">
      {posts.map((post) => (
        <AstroPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
