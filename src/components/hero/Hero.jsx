import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion';
const Hero = () => {

  const transition ={type: 'spring' , duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
   <div className="hero" id='home'>

    <div className="blur hero-blur"></div>
    <div className="left-h">
        <Header/>
{/* the best add */}          
        <div className="the-best-add">
          <motion.div
            initial={{left:mobile? "140px" :'320px'}}
            whileInView={{left:'15px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>


         {/* Hero Heading */}
         <div className="hero_text">
            <div>
                <span className  = 'stroke-text'>Shape </span>
                <span>Your</span>
             </div>
             <div>
                <span>Ideal body</span>
             </div>
             <div> 
               <span>
               In here we will help you to shape and build your ideal body and live up your life
               to fullest
               </span>
             </div>
         </div>

         {/*figures*/ }
         <div className="figures">
            <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                </span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                </span>
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                </span>
                <span>fitnes programs</span>
            </div>
         </div>

         {/*hero buttons */}
         <div className="hero-buttons">
            <button onClick={(e) => {
                            e.preventDefault();
                              window.location.href='https://trainingprogramsnew.blogspot.com/2023/07/blog-post.html';
                                }}className="btn">Get Started</button>
            <button onClick={(e) => {
                            e.preventDefault();
                              window.location.href='https://trainingprogramsnew.blogspot.com/2023/07/blog-post.html';
                                }}className="btn">Learn More</button>
         </div>
     </div>
     <div className="right-h">
         <button className="btn">Join Now</button>

         <motion.div 
          initial={{right: "-1.5rem"}}
          whileInView={{right: "6rem"}}
          transition={transition}
          className="heart-rate">

            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
         </motion.div>

         {/*hero images*/}
         <img src={hero_image} alt="" className="hero-image" />
         <motion.img
         initial={{right: '11rem'}}
         whileInView={{right: '25rem'}}
         transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />

         {/*calories*/}
         <motion.div
         initial={{right: "45rem"}}
         whileInView={{right: "40rem"}}
         transition={transition}
         className="calories"
         >
            <img src={calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
         </motion.div>
     </div>
   </div>
 )
}

export default Hero
