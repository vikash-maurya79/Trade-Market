import axios from "axios";
import { useState, useEffect } from "react";
import BuySell from "./BuySell";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    let [visible, setVisible] = useState(null);
    let [login, setLogin] = useState(false);

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
            await axios.get('http://localhost:3001/check_login', {
                withCredentials: true
            }).then((res) => {
                setLogin(res.data.isLoggedIn);
            }).catch((err) => {
                setLogin(false);
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
                                    login ?
                                        <>
                                            <p><button style={{ backgroundColor: 'green', border: 'none', fontSize: '15px', borderRadius: '5px' }} onClick={() => { setBuySell(index) }}>Buy</button></p>
                                            

                                        </>
                                        :
                                        <></>
                                )}
                                <p>{stock.price}</p>
                                <p style={{ color: stock.percent[0] === '-' ? 'red' : 'green' }} id={index}>{stock.percent}</p>
                                <p style={{ color: stock.percent[0] === '-' ? 'red' : 'green' }} id={index}>{stock.percent[0] === '-' ? <i class="fa-solid fa-arrow-down"></i> : <i class="fa-solid fa-arrow-up"></i>}</p>
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