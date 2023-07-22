import { Stack } from "@mui/system";
import React from "react";
import Illustration2 from "../assets/image/flame.gif";
function Home() {
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="flex-end" justifyContent="center" spacing="220px" marginTop="100px">
        <div style={{ textAlign: "left", marginBottom: "100px" }}>
          <h1 style={{ fontSize: "39px", fontWeight: "bold"  }}>
            Best Solution For <br /> Your <span style={{ color: "#4842c8" }}>Business</span> <br />Startup
          </h1>
          <p style={{ marginTop: "25px", fontSize: "12px"  }}>
            Discover a world of amazing products at our E-commerce <br/>store. Shop with confidence and find the perfect items <br/>for your lifestyle.
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
                marginTop: "20px"
              }}
              className=" my-[0px] font-bold text-[#fff] px-[30px] py-[11px] rounded-[7px]"
            >
              Get Started
            </button>
          </a>
        </div>
        <div style={{ marginBottom: "-30px" }}>
         <img src={Illustration2} alt="Illustration" width="500px" height="500px"/>
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Home;

