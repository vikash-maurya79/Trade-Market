import FloatingNavbar from "./FloatingNavbar";
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { useAuth } from "./AuthContext";


function TopBar() {
    const navigate = useNavigate();

    const { isLoggedIn } = useAuth();
    return (
        <div>

            <nav class="navbar navbar-light bg-light border-bottom my-nav-bar">
                <div className="nifty">
                    <div className="nifty50">
                        <h6>NIFTY50</h6>
                        <h6>100.2</h6>
                    </div>
                    <div className="sensex">
                        <h6>SENSEX</h6>
                        <h6>100.2</h6>
                    </div>
                </div>

                <Link class="navbar-brand company_logo" to='/dashboard'>
                    <img src="/media/image/Trade-Logo-Original.png" width="100" height="50" class="d-inline-block align-top  nav-bar-logo" alt="">
                    </img>
                </Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/dashboard' className="nav-l navbarlinks">Dashboard</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/orders' className="nav-l navbarlinks">Orders</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/holdings' className="nav-l navbarlinks">Holdings</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/positions' className="nav-l navbarlinks">Positions</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/funds' className="nav-l navbarlinks">Funds</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/apps' className="nav-l navbarlinks">Apps </Link>


                {isLoggedIn ?
                    <>
                        <Button onClick={() => { navigate('/profile') }} style={{ borderRadius: '40%', marginRight: '20px' }}> <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar></Button>
                    </>
                    :
                    <>
                        <Link style={{ fontSize: '12px', marginLeft: '-20px', marginRight: '30px' }} to='/signup' className="nav-l navbarlinks"><Button className="signupbtn">Signup</Button></Link>
                        <Link style={{ fontSize: '12px', marginLeft: '-20px', marginRight: '30px' }} to='/login' className="nav-l navbarlinks"><Button variant="contained" className="signupbtn">Login</Button></Link>
                    </>
                }
                <a className="menu"><FloatingNavbar /></a>

            </nav>
        </div>

    );
}

export default TopBar;