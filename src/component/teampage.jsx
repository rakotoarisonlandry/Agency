import React from "react";
import { Stack } from "@mui/system";
import TeamSection from "./teamPageSection";
import Illustration2 from "../assets/image/Home_B.png";
function Team() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="center"
        spacing="220px"
        marginTop="100px"
      >
        <TeamSection />
        <div style={{ textAlign: "left", marginBottom: "100px" }}>
          <p
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "20px",
              color: "#4745bb",
              fontWeight: "bold",
            }}
          >
            Our Team
          </p>
          <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
            Discussion Your
            <br /> Project Our Team
          </h1>
          <p style={{ marginTop: "25px", fontSize: "12px", opacity: "0.7" }}>
            Discover a world of amazing products at our E-commerce store. Shop
            <br /> with confidence and find the perfect items <br />
            for your lifestyle.
          </p>
          <a href="#">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#4842c8",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(226, 233, 239, 0.8)", // Box shadow with the color #e2e9ef
                marginTop: "35px",
              }}
              className=" my-[0px] font-bold text-[#fff] px-[30px] py-[11px] rounded-[7px]"
            >
              Get Started
            </button>
          </a>
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Team;
