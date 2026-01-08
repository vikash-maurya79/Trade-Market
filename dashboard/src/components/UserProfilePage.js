import axios from "axios";
import Button from '@mui/material/Button'
import { useAuth } from "./AuthContext";
import { useStock } from "./Context/StockContext";
import { useNavigate } from "react-router-dom";
function UserProfilePage() {
    const { setIsLoggedIn } = useAuth();
    const { setHoldings } = useStock();
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
            navigate('/login');
        }
        setIsLoggedIn(false);
        setHoldings(null);

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