import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound=()=>{
    return(
        <div className="mainContainer">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2022/06/05/vector-illustration-of-page-not-found-Graphics-31773430-1.jpg" alt="notfound" className='image'/>
            <Link to="/">
              Back to HomePage
            </Link>
        </div>
    )
}

export default NotFound