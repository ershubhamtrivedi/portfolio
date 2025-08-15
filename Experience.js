import Header from './Header'
import './Experience.css'

const Experience=()=>{
    return(
        <div className='MainContainer'>
          <Header/>
          <h1>Experience Details</h1>
          <div className='ExperienceContainer'>
            <div className='ExperienceDetails'>
               <h1>Sparks To Ideas - Ahmedabad, Gujarat </h1>
               <p>Jan 2022 - June 2022</p>
               <p>Software Developer Intern</p>
               <p>Utilized version control systems like Git effectively managing changes over time allowing for
                  seamless collaboration among team members. Demonstrated time management, organizational, prioritization and planning skills by
                  successfully handling tasks, projects and priorities</p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1755236077/sparks_to_ideas_cover_qyet97.jpg" alt="sparkstoideas" className='company'/>
          </div>
          <div className='ExperienceContainer'>
            <div className='ExperienceDetails'>
               <h1>Alstom Transport - Bengaluru, Karnataka </h1>
               <p>March 2023 - Sept 2023</p>
               <p>Software Analyst</p>
               <p>I was worked as a V&V Engineer in this company. I had to Varification and Validation of developed tools and Tested them whether they are matched
                  perfectly with algorithm or not.
                </p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1755236471/Alstom_mobility_by_nature_2019_guq4kc.jpg" alt="alstomtransport" className='company'/>
          </div>
          <div className='ExperienceContainer'>
            <div className='ExperienceDetails'>
               <h1>Naimisar Technologies - Vadodara, Gujarat</h1>
               <p>Oct 2023 - Apr 2024</p>
               <p>Software Engineer</p>
               <p>Understand and analyse in house users and clients requirements and work in close
                  coordination with users or clients and project team to translate requirements.
                  Involved in development of critical modules.
                </p>
            </div>
            <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1755236950/naimisar_Home_tyazg8_b_rgb_C2C9D6_bwqypv.jpg" alt="SNVHSS-Image" className='institute'/>
          </div>
        </div>
    )
}

export default Experience