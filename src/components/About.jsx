import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import lottieFile from '../assets/lottie/study.json';
import AnimationLottie from "./helper/animation";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>👩🏻‍💻 About me... </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a final-year B.Tech student, a dedicated web developer, and an avid machine learning enthusiast, actively exploring innovations 
       within the realm of the technical field. 
        I specialize in crafting dynamic, user-centric web applications integrated with intelligent machine learning models.
        My passion lies in leveraging data-driven approaches to solve real-world problems, while continuously expanding my expertise at the intersection of software engineering and artificial intelligence.
         <span className="text-transparent bg-clip-text">
                      
                    </span>
                    <br />
                    <TypeAnimation
                      sequence={[
                        "Interests:🖌 Drawing✍",
                        1000,
                        "Interests:📖 Reading✍",
                        1000,
                        
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
      </motion.p>

     <div className='mt-10 flex flex-wrap gap-10 items-center justify-center'>
  <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/2">
    <AnimationLottie animationPath={lottieFile} />
  </div>
</div>

    </>
  );
};

export default SectionWrapper(About, "about");