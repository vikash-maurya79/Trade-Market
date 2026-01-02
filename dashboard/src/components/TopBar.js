import FloatingNavbar from "./FloatingNavbar";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TopBar() {
    let [check, setCheck] = useState(false);
    let [login, setLogin] = useState();
    const navigate = useNavigate();
    async function sendLogoutRequest() {
        await axios.post('http://localhost:3001/logout',
            {}, {
            withCredentials: true
        })
        navigate('/login');
        setLogin(null);

    }

    useEffect(() => {
        async function runner() {
            await axios.get('http://localhost:3001/check_login',
                { withCredentials: true }).then((res) => {
                    setLogin(res.data.isLoggedIn);
                }).catch((err) => {
                    if (err.response.status === 401) {
                        runner();
                    }
                })
        }
        runner();
    }, [])


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

                <Link class="navbar-brand" to=''>
                    {check ? <FloatingNavbar setCheck={setCheck} /> : ''}

                    <img src="/media/image/Trade-Logo-Original.png" width="100" height="50" class="d-inline-block align-top  nav-bar-logo" alt="">
                    </img>
                </Link>
                {check ? '' : <a className="menu"><i class="fa-solid fa-bars" onClick={() => setCheck(true)}></i></a>}


                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/dashboard' className="nav-l">Dashboard</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/orders' className="nav-l">Orders</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/holdings' className="nav-l">Holdings</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/positions' className="nav-l">Positions</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/funds' className="nav-l">Funds</Link>
                <Link style={{ fontSize: '12px', marginLeft: '-20px' }} to='/apps' className="nav-l">Apps </Link>


                {login ?
                    <Button className="signup-btn" onClick={sendLogoutRequest} variant="outlined" style={{ marginRight: '10px' }}>Logout</Button>
                    :
                    <>
                        <Link style={{ fontSize: '12px', marginLeft: '-20px', marginRight: '30px' }} to='/signup' className="nav-l"><Button className="signupbtn">Signup</Button></Link>
                        <Link style={{ fontSize: '12px', marginLeft: '-20px', marginRight: '30px' }} to='/login' className="nav-l"><Button variant="contained" className="signupbtn">Login</Button></Link>
                    </>
                }




            </nav>

        </div>

    );
}

export default TopBar;