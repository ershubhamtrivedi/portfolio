import Header from './Header'
import './Education.css'

const Education=()=>{
    return(
        <div className='MainContainer'>
          <Header/>
          <h1>Education Details</h1>
          <div className='EducationContainer'>
            <div className='EducationDetails'>
               <h1>Nxtwave Disruptive Technologies </h1>
               <p>Industry Ready Certification in Full-stack Development</p>
               <p>Aug 2024 - July 2025</p>
            </div>
            <img src="https://thekarostartup.com/wp-content/uploads/2024/06/NxtWave-Named-World-Economic-Forum-Tech-Pioneer-2024-Redefining-EdTech-in-Hyderabad-1024x576.webp" alt="nxtwave" className='institute'/>
          </div>
          <div className='EducationContainer'>
            <div className='EducationDetails'>
               <h1>Darshan College, Rajkot - GTU</h1>
               <p>B.Tech (Bachelor of Technologies) in Computer Science</p>
               <p>2018 to 2022</p>
               <p>CGPA : 7.41</p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1753510222/DU_Campus_AboutUs_rnam8l.jpg" alt="NSS-College-Image" className='institute'/>
          </div>
          <div className='EducationContainer'>
            <div className='EducationDetails'>
               <h1>Shree P.V.Modi School Rajkot</h1>
               <p>Science - 12th</p>
               <p>2016 to 2018</p>
               <p>Percentage Scored : 52%</p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1753510511/p.v.modischool_butvg8.jpg" alt="SNVHSS-Image" className='institute'/>
          </div>
          <div className='EducationContainer'>
            <div className='EducationDetails'>
               <h1>Shree P.V.Modi School Rajkot </h1>
               <p>Secondary School Of Certificate - 10th</p>
               <p>2015 to 2016</p>
               <p>Percentage Scored : 78%</p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1753510511/p.v.modischool_butvg8.jpg" alt="SNVHSS-Image" className='institute'/>
          </div>
        </div>
    )
}

export default Education