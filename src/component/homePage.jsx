import React from "react";
import Illustration2 from "../assets/image/Home.svg";
import { motion } from "framer-motion";


function AnimatedText({ text, delay, gradient }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.1, duration: 0.4 }}
        >
          {letter}
        </motion.span>
      ))}
      {gradient && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay, duration: 0.4 }}
          style={{
            background: "linear-gradient(60deg, #e0559e, #4842c8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Business
        </motion.span>
      )}
    </motion.span>
  );
}

function Home() {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen w-full dark:bg-slate-900  dark:text-gray-100">
        <div className="w-full lg:w-[30%] mx-[10%] lg:text-left  mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-10 lg:leading-14">
            <AnimatedText text="Best Solution For" delay={0.2} />
            <br />
            <AnimatedText text="Your" delay={0.7} />
            <AnimatedText text=" " delay={1.2} gradient={true} />
            <br />
            <div className="mt-1">
              <AnimatedText text="Startup:" delay={1.7} />
            </div>
          </h1>
          <motion.p
            className="mt-4 lg:mt-6 text-sm lg:text-base opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.4 }}
          >
            Discover a world of amazing products at Our E-commerce <br />
            store. Shop with confidence and find the perfect items <br />
            for your lifestyle.
          </motion.p>
          <motion.a
            href="#"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 3.7, duration: 0.4 }}
          >
            <motion.button
              className="mt-4 lg:mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 text-white shadow-md"
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ delay: 3.7, duration: 0.7 }}
            >
              Get Started
            </motion.button>
          </motion.a>
        </div>
        <motion.div
          className="hidden lg:block w-1/3 mt-4 lg:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <img
            src={Illustration2}
            alt="Illustration"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </React.Fragment>
  );
}

export default Home;
