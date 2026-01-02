import { Link } from "react-router-dom";

function FloatingNavbar({setCheck }) {
    return (
        <div className="floatingnavbar-container">
            <div className="cross-button"><a onClick={() => setCheck(false)}><i class="fa-solid fa-xmark"></i></a></div>
            <div> <Link  to='/dashboard'>Dashboard</Link></div>
            <div> <Link to='/holdings'>Holdings</Link></div>
            <div> <Link to='/positions'>Positions</Link></div>
            <div> <Link to='/funds'>Funds</Link></div>
            <div> <Link to='/apps'>Apps</Link></div>
            <div> <Link to='/signup'>Signup</Link></div>
            <div><Link to='/login'>Login</Link></div>
        </div>
    );
}

export default FloatingNavbar;