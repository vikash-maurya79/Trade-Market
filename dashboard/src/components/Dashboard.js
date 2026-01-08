import axios from "axios";
import { useState, useEffect } from "react";
import BuySell from "./BuySell";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useAuth } from "./AuthContext";

function Dashboard() {
    const navigate = useNavigate();
    let [visible, setVisible] = useState(null);
    const { isLoggedIn } = useAuth();

    function mouseEnter(i) {
        setVisible(i);
    }

    function mouseLeave(i) {
        setVisible(i);
    }

    let [buySell, setBuySell] = useState(null);

    let [allWatchlist, setAllWatchlist] = useState([]);
    useEffect(() => {
        async function runner() {
            await axios.get("http://localhost:3001/watchlist", {
                withCredentials: true
            }).then((res) => {
                setAllWatchlist(res.data);
            }

            ).catch((err) => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            })
        }
        runner();
    }, [])

    return (
        <>
            <div className="dashboard-box">
                <div className="search-box">
                    <div className="search">
                        <input type="text" placeholder="Search bse ,gold mcx"></input>
                    </div>
                    <div className="digit">
                        <p>{allWatchlist.length} / 50</p>
                    </div>
                </div>
                {allWatchlist.map((stock, index) => {
                    return <div className=" container" key={index}>
                        <div className="row border-top border-bottom " >
                            <div className="dashboard-items" onMouseEnter={() => { mouseEnter(index) }} onMouseLeave={() => { mouseLeave(null) }}>
                                <p className="m-2" style={{ color: stock.isDown ? 'red' : 'green' }}>{stock.name}</p>
                                {visible === index && (
                                    isLoggedIn ?
                                        <>
                                            <p><Button variant="outlined" color="success" onClick={() => { setBuySell(index) }}>Buy</Button></p>


                                        </>
                                        :
                                        <></>
                                )}
                                <p>{stock.price}</p>
                                <p style={{ color: stock.percent[0] === '-' ? 'red' : 'green' }} id={index}>{stock.percent}</p>
                                <p style={{ color: stock.percent[0] === '-' ? 'red' : 'green' }} id={index}>{stock.percent[0] === '-' ? <i class="fa-solid fa-arrow-down"></i> : <i class="fa-solid fa-arrow-up"></i>}</p>
                                {isLoggedIn ? <p><Button onClick={() => { navigate(`/view-stock/${stock._id}`) }}><RemoveRedEyeIcon /></Button></p> : <></>}

                            </div>
                        </div>
                        {buySell === index && (
                            <BuySell buySell={buySell} setBuySell={setBuySell} index={index} id={stock._id} name={stock.name}></BuySell>
                        )}
                    </div>

                })}
            </div>
        </>
    );
}

export default Dashboard;