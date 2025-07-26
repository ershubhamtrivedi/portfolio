import Header from './Header'
import './Projects.css'

const Projects=()=>{
    return(
        <div className='MainContainer'>
          <Header/>
          <h1>Project Details</h1>
          <div className='ProjectContainer'>
            <div className='ProjectDetails'>
               <h1>Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)</h1>
               <p>Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.</p>
               <ul>
                <li> Designed pages for Login, Products, and Product details with React Router and React components. </li>
                <li> Ensured user security through JWT tokens, REST API calls, and local storage.  </li>
               </ul>
               <p>Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication .</p>
            </div>
            <a
                href="https://shubhamttrendz.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
            >
                View Project
            </a>
          </div>

          <div className='ProjectContainer'>
            <div className='ProjectDetails'>
               <h1>IPL Dashboard  </h1>
               <p>Implemented IPL Dashboard app where users can list of ipl team, individual team
                  details and respective team matches info </p>
               <ul>
                <li>  Implemented UI such as home dashboard, individual team info routes by
                      using React Router library components like Route, Switch, Link, props,
                      lists & keys.  
                </li>
                <li> Fetched teams list from server asynchronously using fetch GET HTTP
                     API call & individual team details, matches info by sending team id as
                     path parameter.
                </li>
                <li>
                     Implemented 404 not found page for invalid paths by keeping 404 Route
                     as last route in the Switch component with * path.
                </li>
               </ul>
               <p>Technologies used: React JS, Routing, REST API Calls, CSS, Bootstrap </p>
            </div>
            <a
                href="https://shubhamipldash.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
            >
                View Project
            </a>
          </div>

          <div className='ProjectContainer'>
            <div className='ProjectDetails'>
               <h1>Spotify Remix (Spotify Clone) </h1>
               <p> Built a user-centric music streaming app, Spotify Remix, featuring personalised playlists, categories, and new releases based on user preferences and location. </p>
               <ul>
                <li>Ensured smooth user flow by implementing different routes for login, home, playlists, and albums using React Router components. </li>
                <li>  Utilised HTML audio tags to enable song playback within playlists, categories, and albums.  </li>
                <li>Incorporated Spotify Developer APIs to obtain music-related data such as featured playlists, categories, and album details </li>
               </ul>
               <p>Technologies used:  HTML, CSS, JavaScript, React JS, Bootstrap, Figma, client storage, Spotify Developer API </p>
            </div>
            <a
                href="https://shubhammusicweb.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
            >
                View Project
            </a>
          </div>
          
          <div className="ProjectContainer">
            <div className="ProjectDetails">
                <h1>Jobby App </h1>
                <p>
                Developed a comprehensive job search solution, Jobby App.
                </p>
                <ul>
                <li>Designed pages for Login, Home, Jobs, and Job item details with React
                    components and form inputs.
                </li>
                <li>Secured user data with JWT tokens, REST API calls, and local storage.</li>
                <li>Implemented protected routes and persisted login state with React
                    Router and local storage.
                </li>
                </ul>
                <p>
                <strong>Tech Stack:</strong> React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local
                                             Storage, JWT Token, Authorization, Authentication
                </p>
            </div>
            <a
                href="https://shubhamjobby.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
            >
                View Project
            </a>
          </div> 
        </div>
    )
}

export default Projects