import { motion } from "framer-motion";
import { checkedMark, football, overlay2 } from "../constants/media";

const WhyJoinSection = () => {
  return (
    <section className="max-w-6xl mx-auto mt-16">
      <div className="bg-[#0a2342] lg:rounded-2xl p-6 md:p-12 flex flex-col md:flex-row relative"
        style={{ backgroundImage: `url(${overlay2})`, backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
      >
        <div className="text-white z-40 w-full lg:w-[70%]">
          <div className="flex-1 flex justify-center items-baseline-last z-10 w-full lg:hidden">
            <img src={football} alt="Soccer ball" className="w-40 md:w-56 drop-shadow-xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold italic text-center lg:text-end mb-6">Why Join OCS Naija?</h2>
          <div className="bg-white/20 rounded-xl p-5 mb-4 w-full mx-auto md:mx-0">
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2"><img src={checkedMark} alt="checkMark" className="w-4 md:w-4" /> Matchday Madness</li>
              <li className="flex items-center gap-2"><img src={checkedMark} alt="checkMark" className="w-4 md:w-4" /> Hot takes dropping as-it-happens</li>
              <li className="flex items-center gap-2"><img src={checkedMark} alt="checkMark" className="w-4 md:w-4" /> Airtime drops, surprise merch, giveaways</li>
              <li className="flex items-center gap-2"><img src={checkedMark} alt="checkMark" className="w-4 md:w-4" /> Banter groups, hangouts, meetups</li>
              <li className="flex items-center gap-2"><img src={checkedMark} alt="checkMark" className="w-4 md:w-4" /> Meet fellow Chelsea die-hards across Ogba, Yaba, Abuja, Ibadan, even Yankee</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <span className="text-white/80 text-sm mb-3 lg:mb-0">💬 If you never join OCS during match time, you dey dull</span>
            <motion.button
              className="bg-[#034694] text-white rounded-full px-4 py-2 font-semibold text-sm hover:bg-blue-900 transition-colors ml-0 md:ml-4 cursor-pointer"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              Join OCS Squad
            </motion.button>
          </div>
        </div>
        <div className="hidden flex-1 lg:flex justify-center items-baseline-last mt-8 md:mt-0 z-10 w-[30%]">
          <img src={football} alt="Soccer ball" className="w-40 md:w-56 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;