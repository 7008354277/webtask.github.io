import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { IoTennisballSharp } from "react-icons/io5";
import { PiFilmSlateThin } from "react-icons/pi";

import { GoHomeFill } from "react-icons/go";
import { FaSearch,FaGreaterThan } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";


const Navbar=()=>{
    const icondata=[
        {icon:FaRegUserCircle,iconName:"My Space"},
        {icon:FaSearch,iconName:"Search"},
        {icon:GoHomeFill,iconName:"Home"},
        {icon:PiTelevisionSimpleDuotone,iconName:"TV"},
        {icon:PiFilmSlateThin,iconName:"Movies"},
        {icon:IoTennisballSharp,iconName:"Sports"},
        {icon:BiSolidCategory,iconName:"Categories"}
]

    return (
        <nav>
            <div className="topnav">
                <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="" />
                <div className="subscribe"><a href="">Subscribe <FaChevronRight />
                </a></div>
            </div>
            
            <div className="bottomnav">
            
                <div className="iconslist">
                    {
                    icondata.map((ele)=>{
                        // const IconComponent=ele.icon
                    return(
                        
                        <div className='icon_group'>

                        {/* <div className="icon"><IconComponent/> </div> */}
                        <div className="icon"><ele.icon/> </div>
                           <div className="icon_txt">{ele.iconName}</div>
                    </div>
                    )
                })
                }
                    </div>
                </div>
        </nav>
    )
}
export default Navbar