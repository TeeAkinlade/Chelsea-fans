import { motion } from "framer-motion";
import { chelseaLogo, facebook, fan1, fan2, fan3, fan4, overlay, overlay3, whatsapp } from "../constants/media";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonsItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      delay: 0.7
    } 
  }
};

const fanImage = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const HeroSection = () => {
  const fanImages = [fan1, fan2, fan3, fan4, fan1, fan4, fan2, fan1, fan3, fan4];

  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="show"
      className="relative font-inter bg-white lg:min-h-screen pt-16 -mt-2"
      style={{ backgroundImage: `url(${overlay})`, backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-2 lg:pt-12 px-8 lg:px-0">
        <motion.div 
          className="flex-1 min-w-[320px] lg:mt-20"
          variants={container}
        >
          <motion.div variants={item} className="text-[#034694] text-xs font-semibold tracking-wide mb-6 mr-6">
            OGBA CHELSEA SUPPORTERS NIGERIA
          </motion.div>
          
          <motion.h1 variants={item} className="text-2xl md:text-4xl font-bold leading-snug mb-4">
            <span className="flex items-center gap-8">
              The Loudest 
              <motion.img 
                src={chelseaLogo} 
                alt="Chelsea logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full shadow"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
              />
            </span>
            <span className="text-[#034694]">Chelsea Supporters</span> In Lagos, Straight From <span className="text-[#034694]">Ogba</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-gray-600 text-base md:text-lg my-6">
            Matchday madness, Blue banter, live gist, march, and <br /> global Chelsea vibes — all in one place.
          </motion.p>
          
          <motion.div variants={buttonsItem} className="flex gap-4 pt-5 pb-2 md:pb-0 md:mt-0 mb-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#034694] text-white rounded-full px-2 lg:px-6 py-2 font-semibold text-sm hover:bg-blue-900 transition-colors cursor-pointer"
            >
              🔥 Join The Squad
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-900 rounded-full px-2 lg:px-6 py-2 border border-[#D0D5DD] font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              ⚽ Check Fixtures
            </motion.button>
          </motion.div>
          
          <motion.div variants={item} className="flex gap-3 mb-5 text-base">
            <span className="flex items-center text-[#4B5563] text-sm gap-2">
              <motion.img 
                src={whatsapp} 
                alt="whatsapp" 
                className="w-6 h-6 object-cover rounded-full shadow"
                whileHover={{ y: -3 }}
              /> 
              1k+ Members
            </span>
            <div className="h-5 w-[0.5px] bg-gray-400 border-0"></div>
            <span className="flex items-center text-[#4B5563] text-sm gap-2">
              <motion.img 
                src={facebook} 
                alt="fb" 
                className="w-6 h-6 object-cover rounded-full shadow"
                whileHover={{ y: -3 }}
              /> 
              2k+ Members
            </span>
          </motion.div>
        </motion.div>

        <div className="md:hidden w-full overflow-hidden py-4 relative">
          <motion.div
            className="flex gap-4 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...fanImages, ...fanImages].map((img, index) => (
              <div key={`mobile-${index}`} className="shrink-0">
                <img
                  style={{ backfaceVisibility: "hidden"}}
                  src={img} 
                  alt={`Chelsea fan ${index}`} 
                  className="w-56 h-40 object-cover rounded-xl shadow" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="hidden md:flex flex-1 items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <div className="grid grid-cols-5 grid-rows-3 gap-3 md:gap-3">
            {/* Row 1 */}
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            
            {/* Row 2 */}
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan2} alt="Chelsea fan 2" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            
            {/* Row 3 */}
            <div></div>
            <div></div>
            <motion.div 
              variants={fanImage}
              whileHover={{ scale: 1.1, zIndex: 1 }}
            >
              <img src={fan3} alt="Chelsea fan 3" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 3" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            
            {/* Row 4 */}
            <div></div>
            <motion.div 
              variants={fanImage}
              whileHover={{ scale: 1.1, zIndex: 1 }}
            >
              <img src={fan4} alt="Chelsea fan 4" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 4" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            
            {/* Row 5 */}
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
            <div></div>
            <motion.div variants={fanImage}>
              <img src={fan1} alt="Chelsea fan 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
        className="absolute -bottom-1 left-0 w-full h-[75px] md:h-auto"
      >
        <img src={overlay3} alt="overlay" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;