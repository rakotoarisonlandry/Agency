import { Stack } from "@mui/system";
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
  const baseDelay = 0.2; // Adjust this delay based on your preference

  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="center"
        spacing="140px"
        marginTop="100px"
      >
        <div
          style={{ textAlign: "left", marginBottom: "0px", marginTop: "40px" }}
        >
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "69px" }}
          >
            <AnimatedText text="Best Solution For" delay={baseDelay} />
            <br />
            <AnimatedText text="Your" delay={baseDelay + 0.5} />
            <AnimatedText text=" " delay={baseDelay + 1} gradient={true} />
            <br />
            <div style={{ marginTop: "4px" }}>
              <AnimatedText text="Startup:" delay={baseDelay + 1.5} />
            </div>
          </h1>
          <motion.p
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              fontSize: "12px",
              opacity: "0.7",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.4 }}
          >
            Discover a world of amazing products at our E-commerce <br />
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
              style={{
                padding: "10px 20px",
                background: "linear-gradient(60deg, #e0559e, #4842c8)",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(226, 233, 239, 0.8)", // Box shadow with the color #e2e9ef
                marginTop: "20px",
              }}
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ delay: 3.7, duration: 0.7 }}
              className=" my-[0px] font-bold text-[#fff] px-[30px] py-[11px] rounded-[7px]"
            >
              Get Started
            </motion.button>
          </motion.a>
        </div>
        <motion.div
          style={{ marginBottom: "2px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <img
            src={Illustration2}
            alt="Illustration"
            width="650px"
            height="1100px"
          />
        </motion.div>
      </Stack>
    </React.Fragment>
  );
}

export default Home;
