import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import experienceAnimation from "../assets/lottie/code.json"; // Ensure this path is correct
import AnimationLottie from "./helper/animation"; // Ensure this component exists and is named correctly

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center lg:py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Debarima Basu",
                1000,
                "Web Developer",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
           Welcome to my portfolio! I am a passionate web developer with a knack for creating dynamic and responsive web applications.
          </p>
        
           <div>
  <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4  items-start">
  <a
    href="#contact"
     className="text-center px-4 py-2 lg:px-5 lg:py-2.5 text-sm lg:text-xl rounded-full bg-gradient-to-br from-purple-800 to-pink-500 hover:bg-slate-200 text-white transition duration-300"
  >
    Hire Me
  </a>
  <a
    href="https://drive.google.com/file/d/1rC5c7Cso8hzUCdUaRUvPUijBgpURDX-_/view?usp=sharing"
  
    className="text-center py-0.5 px-1 lg:py-1.0 lg:px-1 text-sm lg:text-xl rounded-full bg-gradient-to-br from-purple-800 to-pink-500 hover:bg-slate-800 text-white transition duration-300"
  >
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2 lg:px-3 lg:py-1.5 transition duration-300">
      resume
    </span>
  </a>
</div>




          </div>
        </motion.div>

        {/* Lottie animation section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 2.5}}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-20 sm:mt-28 md:mt-0 flex justify-center items-center"

          // className="col-span-4 place-self-center mt-6 lg:mt-0 flex justify-center items-center"
        >
          <div className="relative overflow-hidden flex items-center justify-center w-full h-full">
            <AnimationLottie
              animationPath={experienceAnimation}
              width="80%"  // Default size for small screens
              height="auto"
              className="lg:w-[500px] lg:h-[500px]"  // Custom size for large screens
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
