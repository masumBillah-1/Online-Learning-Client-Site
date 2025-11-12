import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafi Ahmed",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    text: "এই কোর্সটা একদম বাস্তব অভিজ্ঞতা দিয়েছে। শেখার প্রতিটি ধাপে project থাকায় আমি খুব দ্রুত improve করতে পেরেছি।",
    rating: 5,
  },
  {
    name: "Nabila Yasmin",
    role: "Junior Engineer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    text: "React, Node আর MongoDB একসাথে বুঝে গেছে এই কোর্সে। এখন আমি নিজের প্রোজেক্ট বানাতে পারি আত্মবিশ্বাস নিয়ে।",
    rating: 5,
  },
  {
    name: "Mahmudul Hasan",
    role: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "UI/UX এর ধারণা এত পরিষ্কারভাবে কেউ বোঝায়নি। এই কোর্স আমাকে প্রফেশনাল ডিজাইন শিখিয়েছে।",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-[#193485] to-[#0b1d4b] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          আমাদের শিক্ষার্থীদের অভিজ্ঞতা পড়ুন — যারা ইতিমধ্যেই তাদের ক্যারিয়ারে সফলতা পেয়েছে।
        </p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white/30 object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-100 italic mb-4">“{item.text}”</p>

              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-300">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
