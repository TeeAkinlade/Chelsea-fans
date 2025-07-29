import { motion, useAnimation } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { image1, image10, image11, image2, image3, image4, image5, image6, image7, image8, image9 } from "../constants/media";

const ShopSection = () => {
  const controls = useAnimation();
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
      controls.start("visible");
    } else if (hasBeenInView) {
      controls.start("hidden");
    }
  }, [controls, inView, hasBeenInView]);

  const container: Variants = {
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemFromLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      } as Transition
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } as Transition
    }
  };

  const itemFromRight: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      } as Transition
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } as Transition
    }
  };

  const itemFromBottom: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      } as Transition
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } as Transition
    }
  };

  return (
    <motion.section 
      id="shop"
      ref={ref}
      initial="hidden"
      animate={controls}
      className="max-w-6xl mx-auto px-8 lg:px-0 my-20 py-10"
    >
      <motion.div 
        variants={container}
        className="flex items-center gap-2 mb-2 lg:hidden"
      >
        <motion.span 
          variants={itemFromLeft}
          className="text-sm text-[#034694] font-semibold border-l-[1px] border-[#034694] mb-5 pl-2"
        >
          SHOP
        </motion.span>
      </motion.div>

      <motion.h2 
        variants={itemFromBottom}
        className="text-center text-2xl md:text-3xl font-semibold mb-2"
      >
        Rep the <span className="text-[#034694]">Blues</span> with Pride
      </motion.h2>

      <motion.div 
        variants={container}
        className="relative"
      >
        <motion.p 
          variants={itemFromBottom}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 max-w-md mx-auto my-8 text-base"
        >
          Rep your club the real way — fresh kits and gear straight from the{' '}
          <span className="font-semibold text-[#034694] cursor-pointer">Chelsea store</span>. 
          No agents, no fake. <br />Just Naija pricing for real Blues.
        </motion.p>
        <motion.span 
          variants={itemFromRight}
          transition={{ delay: 0.6 }}
          className="hidden lg:block absolute left-0 bottom-0 text-xs text-[#034694] font-semibold border-l-[1px] border-[#034694] pl-2"
        >
          SHOP
        </motion.span>
      </motion.div>

      <motion.div 
        variants={container}
        className="grid grid-cols-3 md:grid-cols-9 gap-4 md:gap-6"
      >
        <motion.div 
          variants={itemFromLeft}
          transition={{ delay: 0.4 }}
          className="relative flex items-center justify-center md:col-span-3 h-[410px] rounded-lg bg-[#E9E9E9] shadow shadow-[#0038A814] w-full overflow-hidden group"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <motion.img 
            src={image1} 
            alt="shop" 
            className="object-contain"
            initial={{ scale: 1.1 }}
            whileHover={{ 
              scale: 1.15,
              transition: { duration: 0.4 }
            }}
          />
          <motion.button 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Shop Now
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemFromBottom}
          transition={{ delay: 0.6 }}
          className="md:col-span-4 h-[350px] shadow shadow-[#0038A814] w-full"
        >
          <motion.div 
            className="bg-[#E9E9E9] w-full h-[140px] overflow-hidden rounded-lg group"
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              src={image2} 
              alt="shop" 
              className="w-full h-full shadow"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.4 }
              }}
            />
            <motion.button 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
            Shop Now
          </motion.button>
          </motion.div>
          <div className="flex justify-between gap-3 w-full mt-3">
            <div className="w-1/2 flex items-center justify-center flex-col gap-3">
              <motion.div 
                className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[125px] overflow-hidden group"
                variants={itemFromLeft}
                transition={{ delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={image3} 
                  alt="shop" 
                  className="w-full h-full object-contain"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.4 }
                  }}
                />
                <motion.button 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[125px] overflow-hidden group"
                variants={itemFromLeft}
                transition={{ delay: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={image4} 
                  alt="shop" 
                  className="w-full h-full shadow object-contain"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.4 }
                  }}
                />
                <motion.button 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
            <motion.div 
              className="w-1/2"
              variants={itemFromRight}
              transition={{ delay: 0.7 }}
            >
              <div className="w-auto relative h-[263px] rounded-lg bg-[#E9E9E9] flex items-center justify-center overflow-hidden group">
              <motion.img 
                src={image5} 
                alt="shop" 
                className="w-auto h-auto lg:w-full lg:h-full object-cover"
                whileHover={{ scale: 1.1 }}
              />
              <motion.button 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemFromRight}
          transition={{ delay: 0.8 }}
          className="md:col-span-2 h-[350px] w-ful"
        >
          <div className="relative h-[140px] rounded-lg bg-[#E9E9E9] overflow-hidden group mb-2">
            <motion.img 
              src={image6} 
              alt="shop" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <motion.button 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#034694] text-white rounded-full px-2 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </div>
          <motion.div 
            className="flex justify-between items-center gap-3 mt-2 shadow shadow-[#0038A814]"
            variants={container}
          >
            <motion.div 
              className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[55px] overflow-hidden group"
              variants={itemFromBottom}
              transition={{ delay: 1.0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img src={image7} alt="shop" className="w-full h-full object-contain" />
              <motion.button 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full p-1 font-semibold text-[9px] hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Shop Now
              </motion.button>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[55px] overflow-hidden shadow shadow-[#0038A814] group"
              variants={itemFromBottom}
              transition={{ delay: 1.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img src={image8} alt="shop" className="w-full h-full object-contain" />
              <motion.button 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full p-1 font-semibold text-[9px] hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-between items-center gap-3 my-2"
            variants={container}
          >
            <motion.div 
              className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[55px] overflow-hidden shadow shadow-[#0038A814] group"
              variants={itemFromBottom}
              transition={{ delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img src={image9} alt="shop" className="w-full h-full object-contain" />
              <motion.button 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full p-1 font-semibold text-[9px] hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Shop Now
              </motion.button>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center rounded-lg bg-[#E9E9E9] w-full h-[55px] overflow-hidden shadow shadow-[#0038A814] group"
              variants={itemFromBottom}
              transition={{ delay: 1.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img src={image10} alt="shop" className="w-full h-full object-contain" />
              <motion.button 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full p-1 font-semibold text-[9px] hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Shop Now
            </motion.button>
            </motion.div>
          </motion.div>
          
         <div className="relative h-[140px] rounded-lg bg-[#E9E9E9] overflow-hidden group">
            <motion.img 
              src={image11} 
              alt="shop" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <motion.button 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#034694] shadow text-white rounded-full px-3 py-1 font-semibold text-xs hover:bg-blue-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center mt-12 lg:hidden">
        <button 
          className=" bg-[#034694] shadow text-white rounded-full px-4 py-2 font-semibold text-sm hover:bg-blue-900 transition-all duration-300 cursor-pointer"
          >
            Shop Now
          </button>
      </div>
    </motion.section>
  );
};

export default ShopSection;