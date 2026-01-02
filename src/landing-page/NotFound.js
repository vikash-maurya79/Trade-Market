import { Link } from "react-router-dom";

function NotFound() {
    return ( 
         <div className='text-center not-found'>
            <h5>404 couldn’t find that page</h5>
            <p></p>
            <Link to='/' className="not-found-link">Home</Link>
        </div>
     );
}

export default NotFound;