
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { useAuth } from "./AuthContext";
function LoginPage() {

    const navigate = useNavigate();

    let [mail, setMail] = useState();
    let [pass, setPassword] = useState();
    let [error, setError] = useState();
    const { setIsLoggedIn } = useAuth();



    function mailHandler(e) {
        setMail(e.target.value);
    }
    function passHandler(e) {
        setPassword(e.target.value);
    }
    async function sendRequest() {

        await axios.post('http://localhost:3001/user/loginuser/api', {
            email: mail,
            password: pass
        }
            , {
                withCredentials: true
            }
        ).then((res) => {
            if (res.status === 200) {
                setMail('');
                setPassword('');
                setIsLoggedIn(true);
                navigate('/dashboard');
            }
        }).catch((err) => {
            setError(err.response.data.message);
        })
    }
    return (
        <>
            <div className="container signup-container" style={{ height: '100%', width: '100%' }}>
                <div className="row signup-row" style={{ height: '500px', width: '700px', marginTop: '50px' }}>
                    <div className="row mt-5 pt-5">
                        <form className="frm" onSubmit={(e) => { e.preventDefault() }}>

                            <div className="row">
                                <input type="email" placeholder="Enter email.." onChange={(e) => { mailHandler(e) }} value={mail}></input>
                            </div>
                            <div className="row">
                                <input type="password" placeholder="Enter password.." onChange={(e) => { passHandler(e) }} value={pass}></input>
                            </div>
                            {error ? <h5 className="error">{error}</h5> : ''}

                            <Button className="signup-btn" onClick={sendRequest} variant="outlined">Login</Button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;