import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useStock } from "./Context/StockContext";
import CircularProgress from '@mui/material/CircularProgress';

function DashboardDataPage() {

    const { allHoldings } = useStock();
    let [user, setUser] = useState();
    useEffect(() => {
        async function runner() {
            await axios.get('http://localhost:3001/user',
                { withCredentials: true }

            ).then((res) => {
                console.log('User founded for is...', res.data.user[0].username);
                setUser(res.data.user[0].username);
            })
        }
        runner();
    }, [])
    if (allHoldings == null) {
        return (
            <div className="container text-center" style={{ height: '100%', }}>
                <CircularProgress color="secondary" />
            </div>
        )
    }
    let i = allHoldings.length;


    return (
        <div className="equity-container">
            <div className="container border-bottom pt-1">
                <h5 className="greeting">Hi, {user} !</h5>
            </div>
            <div className="container mt-5">
                <h5 style={{ fontSize: 'medium', opacity: '0.9', marginLeft: '40px' }}>Equity</h5>
            </div>
            <div className="container mt-5 pt-5 border-bottom">
                <div className="row text-center ">
                    <div className="col">
                        <h4 style={{ opacity: '0.9' }}>3.74K</h4>
                        <p style={{ fontSize: '10px' }}>Margin avaliable</p>
                    </div>
                    <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="line"></div>
                    </div>
                    <div className="col mb-5 pb-5">
                        <p style={{ opacity: '0.9', fontSize: '10px' }}>Margin used 0</p>
                        <p style={{ opacity: '0.9', fontSize: '10px' }}>Opening balance 3.74K</p>
                    </div>
                </div>

            </div>
            <div className="container mt-5">
                <h6 style={{ marginLeft: '40px' }}>Holdings ({i})</h6>

                <div className="row mt-5 text-center">
                    <div className="col">
                        <h5 style={{ color: 'green', opacity: '0.7' }}>1.55K</h5>
                    </div>
                    <div className="col">
                        <p style={{ fontSize: '10px' }}>Current value 31.43K</p>
                        <p style={{ fontSize: '10px' }}>Investment 31.44K</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default DashboardDataPage;