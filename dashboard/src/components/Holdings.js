
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function HoldingsPage() {

    let [allHoldings, setHoldings] = useState([]);
    const navigate = useNavigate();

     useEffect(() => {
        async function runner() {
            await axios.get("http://localhost:3001/holdings", {
                withCredentials: true
            }).then((res) => {
                setHoldings(res.data);
                console.log(res.data);
            }).catch((err) => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            })
        }
        runner();

    }, [])
    return (
        <div className="equity-container">                {/* do not change the class name of this div */}
            <div className="container">
                <h5 className="m-5">Holdings ({allHoldings.length})</h5>
            </div>
            <div className="container">
                <div className="row border text-center  row-items">
                    <div className="col mt-3">
                        <p>Stock name</p>
                    </div>
                    <div className="col mt-3">
                        <p>Instrument</p>
                    </div>
                    <div className="col mt-3">
                        <p>Qty.</p>
                    </div>
                    <div className="col mt-3">
                        <p>Avg.</p>
                    </div>
                    <div className="col mt-3">
                        <p>LTP</p>
                    </div>
                    <div className="col mt-3">
                        <p>Cur.val</p>
                    </div>
                    <div className="col mt-3">
                        <p>P&L</p>
                    </div>
                    <div className="col mt-3">
                        <p>Net chg.</p>
                    </div>
                    <div className="col mt-3">
                        <p>Day chg.</p>
                    </div>
                </div>

                {allHoldings.map((stock, index) => {
                    const currVal = stock.price * stock.qty;
                    const dayClass = stock.isLoss ? "loss" : "profit";
                    return <div className="row border text-center  row-items">
                        <div className="col mt-3">
                            <p>{stock.name}</p>
                        </div>
                        <div className="col mt-3">
                            <p>{stock.price}</p>
                        </div>
                        <div className="col mt-3">
                            <p>{stock.qty}</p>
                        </div>
                        <div className="col mt-3">
                            <p>{stock.avg}</p>
                        </div>
                        <div className="col mt-3">
                            <p>{stock.price}</p>
                        </div>
                        <div className="col mt-3">
                            <p>{currVal}</p>
                        </div>
                        <div className="col mt-3">
                            <p style={{ color: dayClass === 'profit' ? 'green' : 'red' }}>{dayClass}</p>
                        </div>

                        <div className="col mt-3">
                            <p style={{ color: stock.net[0] === '+' ? 'green' : 'red' }}>{stock.net}</p>
                        </div>
                        <div className="col mt-3">
                            <p style={{ color: stock.day[0] === '+' ? 'green' : 'red' }}>{stock.day}</p>
                        </div>
                    </div>
                })}








                <div className="row mt-5 pt-5 text-center">
                    <div className="col">
                        <h5>29,875.</h5>
                        <p style={{ fontSize: '12px' }}>55</p>
                    </div>
                    <div className="col">
                        <h5>31,428.</h5>
                        <p style={{ fontSize: '12px' }}>95</p>
                    </div>
                    <div className="col">
                        <h5 style={{ color: 'green' }}>1,553.40 (+5.20%)</h5>
                    </div>

                </div>




                <div className="row text-center mt-4">
                    <div className="col">
                        <p style={{ fontSize: '11px' }}>Total investment</p>
                    </div>
                    <div className="col">

                        <p style={{ fontSize: '11px' }}>Current value</p>
                    </div>
                    <div className="col">
                        <p style={{ fontSize: '11px' }}> P&L</p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HoldingsPage;