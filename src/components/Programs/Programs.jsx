import React from 'react'
import './Programs.css'
import{programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
   
    <div className="Programs" id="programs">
        {/* header*/}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To shape you</span>
        </div>
         <div className="program-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                      <span className="link">
                        <button type="button"
                          onClick={(e) => {
                            e.preventDefault();
                              window.location.href='https://thefitc1ub.blogspot.com/2023/07/blog-post.html';
                                }}>Details</button>
                       </span>
                      <img src={RightArrow} alt="" /></div>
                </div>
            ))}
            

         </div>
  

    </div>
  );
};

export default Programs
