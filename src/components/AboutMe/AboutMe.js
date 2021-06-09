import './Styling.css'
import pic from '../images/withhayley.jpg'
import Navbar from '../Navbar'

const AboutMe = () => {
    return (
      <>
      <Navbar />
        <div className="container">
          <div className="row">
          <img src={pic} className="myPic"/>
            <div className="col-sm-7 main">
              <h6 className="iH">Full Stack Developer</h6>
              <h1>KYLE OHLWILER</h1>
              
              <div className="about">
    
                <p>
                  Hello!
                </p>
                <p>
                  I am 32 years old and have several years of relatable experience. I attended Brigham Young University where I received my Bachelor's degree in Recreation Management. For the next 5+ years I worked in that industry organizing and running youth camps; then later on managing client relations and events at a retirement investment firm. 
                </p>
                <p>
                  As COVID-19 began to effect the world, I decided it was time to seek out new opportunities and pursue another passion, coding. I have since then I have developed my skills in JavaScript, JQuery, Node, React, MySql, Mongo, and APIs.
                </p>
                <p>
                  I am available for free-lance, contract, and full-time work. You can contact me through the contact link provided.
                </p>
    
              </div>
           </div>
        </div>
      </div>
     </> 
    )
  }

  export default AboutMe