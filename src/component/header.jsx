// import { Button } from "@mui/material";
import React from "react";
function Header(){
    return (
            <div className="flex  justify-center space-x-44 space-y-[15px] ">
                <div className="items-center text-[22px] pt-[30px] text-[#4842c8] font-bold">
                    Agency
                </div>
                <div className="items-center pt-[18px]">
                    <ul className="flex space-x-[50px] font-bold" >
                        <li><a href="#">Home</a></li>
                        <li><a href="#"> About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>   
                </div>
                <div className="items-center  ">
                    <a href="#"><button className="bg-[#f6632d] my-[0px] font-bold text-[#fff] px-[30px] py-[11px] rounded-[7px]">Get A Queue</button></a>    
                </div>
            </div>

    );
}
export default Header;