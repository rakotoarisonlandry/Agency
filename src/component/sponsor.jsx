import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion"; // Import de framer-motion
import Google from "../assets/image/Google.png";
import Netflix from "../assets/image/netflix.png";
import Slack from "../assets/image/Slack.png";
import Amazon from "../assets/image/Amazon.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Sponsor() {
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  const sponsors = [
    { id: "google", link: "https://www.google.com/", image: Google },
    { id: "netflix", link: "https://www.netflix.com/", image: Netflix },
    { id: "slack", link: "https://slack.com/", image: Slack },
    { id: "amazon", link: "https://www.amazon.fr/", image: Amazon },
  ];

  return (
    <React.Fragment>
      <section >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingLeft="100px"
        >
          {sponsors.map((sponsor) => (
            <Box
              key={sponsor.id}
              sx={{ marginRight: 20, display: "flex", alignItems: "center" }}
            >
              <a href={sponsor.link}>
                <motion.img
                  src={sponsor.image}
                  alt={sponsor.id}
                  style={{ width: "120px" }}
                  initial="initial"
                  whileHover="hover"
                  variants={imageVariants}
                />
              </a>
            </Box>
          ))}
        </Stack>
      </section>
    </React.Fragment>
  );
}

export default Sponsor;
