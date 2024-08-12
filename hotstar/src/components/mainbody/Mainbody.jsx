import React from "react";
import Cards from "./Cards";
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";


const Mainbody = () => {

    const userdata = [

        {
            username: "Talvar",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/2950/1000082950/1000082950-v"
        },


        {
            username: "super30",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2412/1707280352412-i"
        },

        {
            username: "Chhichhore",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3343/1707280633343-i"
        },
        {
            username: "Cuttputli",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/833/1650833-i-0fe6a37d72ce"
        },
        {
            username: "Bhuj",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5471/1565471-i-18f6334d9e6c"
        },
        {
            username: "Sanak",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5551/1625551-i-0ec1f6f1bcf3"
        },
        {
            username: "Taqdeer",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4740/14740-v"
        },
        {   username:"Hero",
            image_url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/4190/1000074190/1000074190-v"
        },
        {
            username: "Bang Bang",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/4503/1000034503/1000034503-v"
        },
        {
            username: "VIP 2",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3911/1000213911/1000213911-v"
        },
        {
            username: "MS Dhoni",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"
        },
        {
            username: "Sanam Re",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3421/1000093421/1000093421-v"
        },
        {
            username: "Janatha Garage",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5071/1000155071/1000155071-v"
        },
        {
            username: "Lootera",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5842/1000055842/1000055842-v"
        },
        {
            username: "super30",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2412/1707280352412-i"
        },
        {
           username: "Chhichhore",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3343/1707280633343-i"
        },
        {
            username: "Janatha Garage",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5071/1000155071/1000155071-v"
        },
        {
            username: "Sanak",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5551/1625551-i-0ec1f6f1bcf3"
        },
        {
           username: "Junglee",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1327/441327-v"
        },
        {
            username: "Raid",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9163/1707274889163-i"
        },
        {
            username: "Houseful 4",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4773/1544773-i-780799471081"
        },
        {
           username: "Junglee",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1327/441327-v"
        },
        {
            username: "Houseful 4",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4773/1544773-i-780799471081"
        },
        {
            username: "Junglee",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1327/441327-v"
        },
        {
             username: "Lootera",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5842/1000055842/1000055842-v"
        },
        {
            username: "Sanak",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4227/1713533894227-v"
        },
        {
            username: "Saamhara",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8512/308512-v"
        },
        {
            username: "Bahubali 2",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5085/635085-v"
        },
        {
             username: "Lootera",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5842/1000055842/1000055842-v"
        },
        {
           username: "Taqdeer",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4740/14740-v"
        },
        {
            username: "Houseful 4",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4773/1544773-i-780799471081" 
        },
        {
            username: "D-16",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4813/1707280644813-i"
        },
        {
            username: "Hate Story 3",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/7393/1000087393/1000087393-v"
        },
        {
            username: "Bala",
            image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8086/1408086-i-c92ec7cebcf5"
        },
        {
            username:"Bhootnath Returns",
            image_url:"https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4748/1544748-t-ea757b332154"
        }

    ]
    return (
        <main>
            <div className="topbody">
              <div className="insidetop">
                <h3 className="line1">2011.2h 16m.2 Languages. <span><button className="button1">U/A 13+</button></span> </h3>
                <h3 className="line2">Police officer Vikram finally captures Vedha, a dreaded gangster. When the latter engages Vikram in a mind game, it challenges his notion of good and evil.</h3>
                
               <h3 className="line1">Romance | Drama | Comedy | Couples |</h3>
                
                <button className=" button2">Hindi <span>Original</span></button>
                
                <div className="lastline">
                <button className="button3">▶  Subscribe to Watch</button>
                <button className="button4">
                <FaPlus />
                </button>
                </div>
                
                
              </div>
                 </div>
            {userdata.map((ele) => {
                return (
                    <Cards data={ele} />
                )
            })
            }
            <div className="bottombody">
                <div className="box1">
                    
                    <ul>
                        <li className="li1">Company</li> <br /> <br />
                        <li>About Us</li> <br />
                        <li>Careers</li>  <br /> <br />
                        <li className="li2">© 2024 STAR. All Rights Reserved.</li>
                        <li className="li2">Terms of Use   Privacy  Policy FAQ</li>
                        
                    </ul>
                    
                </div>
                <div className="box2">
                    <ul>
                        <li className="li1">View Website in</li> <br /> <br />
                        <li>
                        <TiTick />English</li>
                    </ul>
                </div>
                <div className="box3">
                    <ul>
                        <li className="li1">Need Help?</li> <br /> <br />
                        <li>Visit Help Center</li> <br />
                        <li>Share Feedback</li>
                    </ul>
                </div>
                <div className="box4">
                   <ul>
                    <li className="li1">Connect with Us</li> <br /> <br />
                    
                   </ul>
                   <div className="box5">
                   <FiFacebook />  <FiTwitter />
                   
                 
                   </div>
                   <div className="lastbox">
                    <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="" />
                    <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="" />
                   </div>

                   
                </div>
            </div>

        </main>
    )
}
export default Mainbody