import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


function SignupPage() {
    const navigate = useNavigate();
    let [name, setName] = useState();
    let [mail, setMail] = useState();
    let [pass, setPassword] = useState();
    let [error, setError] = useState();

    function nameHandler(e) {
        console.log(name);
        setName(e.target.value);
    }
    function mailHandler(e) {
        setMail(e.target.value);
    }
    function passHandler(e) {
        setPassword(e.target.value);
    }

    async function sendRequest() {

        await axios.post('http://localhost:3001/user/signup/api', {
            username: name,
            email: mail,
            password: pass
        }, {
            withCredentials: true
        }

        ).then((res) => {
            console.log(res);
            navigate('/dashboard')
        }).catch((err) => {
            if (err.status === 400) {
                setError('Fill all required fields !');
            }
            else if (err.status === 409) {
                setError('User already exists !');
            }
            else {
                setError('Somthing went wrong !');
            }
        })



        setName('');
        setMail('');
        setPassword('');
    }

    return (
        <>
            <div className="container signup-container" style={{ height: '100%', width: '100%' }}>
                <div className="row signup-row" style={{ height: '500px', width: '700px', marginTop: '50px' }}>
                    <div className="row mt-5 pt-5">
                        <form className="frm" onSubmit={(e) => { e.preventDefault() }}>
                            <div className="row">
                                <input type="text" placeholder="Enter name.." onChange={(e) => { nameHandler(e) }} value={name}></input>
                            </div>
                            <div className="row">
                                <input type="email" placeholder="Enter email.." onChange={(e) => { mailHandler(e) }} value={mail}></input>
                            </div>
                            <div className="row">
                                <input type="password" placeholder="Enter password.." onChange={(e) => { passHandler(e) }} value={pass}></input>
                            </div>
                            {error ? <h5 className="error">{error}</h5> : ''}

                            <Button className="signup-btn" onClick={sendRequest} variant="outlined">Signup</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;