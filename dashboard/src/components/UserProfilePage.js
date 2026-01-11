import axios from "axios";
import Button from '@mui/material/Button'
import { useAuth } from "./AuthContext";
import { useStock } from "./Context/StockContext";
import { useUser } from "./Context/UserContext";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
function UserProfilePage() {
    const { setIsLoggedIn } = useAuth();
    const { setHoldings } = useStock();
    const { user, setUser } = useUser();
    console.log('User that is getting on profile page is ', user);
    const navigate = useNavigate();

    async function sendLogoutRequest() {
        try {
            await axios.post('http://localhost:3001/logout',
                {}, {
                withCredentials: true
            })
        }
        catch (error) {
            console.log('error');
        } finally {
            setIsLoggedIn(false);
            setHoldings(null);
        }

    }
    if (!user) {
        return <div className="container text-center" style={{ height: '100%', }}>
            <h5 style={{ marginTop: '250px' }}>  <CircularProgress enableTrackSlot size="3rem" /> </h5>
        </div>
    }
    return (
        <><h5>
            User profile page is working.
            <h5>Username is {user[0].username}</h5>
            <Button className="signup-btn" onClick={sendLogoutRequest} variant="outlined" style={{ marginRight: '10px' }}>Logout</Button>
        </h5>

        </>
    );
}

export default UserProfilePage;