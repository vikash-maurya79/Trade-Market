import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <>
        
            <div className='equity-container'>
                <div className="container text-center" style={{ height: '100%', }}>
                    <h5 style={{ marginTop: '250px' }}>404 Page not found</h5>
                    <br></br>
                    <Link to='/' style={{ textDecoration: 'none' }}>Back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;