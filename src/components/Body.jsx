// import React from 'react'
import "../assets/styles/Body.scss";
import pp from "../assets/images/profilepic.png";
import { IoIosAddCircle } from "react-icons/io";
function Body() {
  return (
    <div className="wrapperbig">
      <h1>Profile</h1>
      <div className="content">
        <div className="content__left">
          <div className="content__left__top">
            <img src={pp} alt="" />
            <p>Robin Singh</p>
            <p className="number">+91 98765 43210</p>
            <div className="techknown">
              <p>UI/UX</p>
              <p>Perks</p>
              <p>Canteen</p>
              <p>Full Time</p>
            </div>
            <a href="">Update Personal Details </a>
          </div>
          <hr />
          <div className="content__left__bottom">
            <h3>Build Resume with Recruitr</h3>
            <p>
              Update these details for better chances of selection, These
              Information can be view by Hiring Teams.
            </p>
            <div className="cardselectorActive">
              <div className="headingName">
                <h4>Work Experience & Skills</h4>
                <p>Add all your Internships, Work Details...</p>
              </div>
              <div className="plusSign">
                <IoIosAddCircle />
              </div>
            </div>
            <div className="cardselector">
              <div className="headingName">
                <h4>Qualifications</h4>
                <p>Highlight your Education in the eye of recruiters...</p>
              </div>
              <div className="plusSign">
                <IoIosAddCircle />
              </div>
            </div>
            <div className="cardselector">
              <div className="headingName">
                <h4>Highlights, Sports...</h4>
                <p>Show your Highlights & Sports etc to recruiting te...</p>
              </div>
              <div className="plusSign">
                <IoIosAddCircle />
              </div>
            </div>
            <div className="cardselector">
              <div className="headingName">
                <h4>Recommendations</h4>
                <p>Provide Recommendations, get Recommendation...</p>
              </div>
              <div className="plusSign">
                <IoIosAddCircle />
              </div>
            </div>
            <div className="cardselector">
              <div className="headingName">
                <h4>Upload Video Resume</h4>
                <p>Now share your details in video form to Employer...</p>
              </div>
              <div className="plusSign">
                <IoIosAddCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="content__right">
          <p>Add Experience</p>
          <form action="" method="post">
            <div className="formtop">
              <div className="formleft">
                <label htmlFor="">Job Title</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Example: Product manager"
                />
                <label htmlFor="">Employment Type</label>
                <br />
                <select name="" id="">
                  <option value="">Full Time</option>
                  <option value="">Part Time</option>
                  <option value="">Internship</option>
                  <option value="">Contract</option>
                </select>
                <label htmlFor="">Work Location</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Example: London-Work from home"
                />
                <label htmlFor="">Starting Date</label>
                <br />
                <input type="date" name="" id="" />
              </div>
              <div className="formright">
                <label htmlFor="">Company Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Example: Google"
                />
                <label htmlFor="">Working Status</label>
                <br />
                <select name="" id="">
                  <option value="">Currently Working</option>
                  <option value="">Not Working</option>
                </select>
                <label htmlFor="">Add C.T.C</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="#only figure entry in salary"
                />
                <label htmlFor="">Ending Date</label>
                <br />
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className="formbottom">
              <label htmlFor="">Description</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Description about you..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;