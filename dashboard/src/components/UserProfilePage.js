import axios from "axios";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function UserProfilePage() {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    async function sendLogoutRequest() {
        await axios.post('http://localhost:3001/logout',
            {}, {
            withCredentials: true
        })
        setIsLoggedIn(false);
        navigate('/login');

    }
    return (
        <><h5>
            User profile page is working.
            <Button className="signup-btn" onClick={sendLogoutRequest} variant="outlined" style={{ marginRight: '10px' }}>Logout</Button>
        </h5>

        </>
    );
}

export default UserProfilePage;