
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PositionsPage() {
    let [allPositions, setPositions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function runner() {
            await axios.get("http://localhost:3001/data/positions/api",
                 { withCredentials: true }).then((res) => {
                setPositions(res.data);
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
        <div className="equity-container">

            <div className="container">
                <h5 className="m-5">Positions ({allPositions.length})</h5>
            </div>                      {/* do not change the name of the class of this div*/}
            <div className="container">

                <div className="row border mt-5 text-center row-items">
                    <div className="col">
                        <p className="mt-3">Product</p>
                    </div>

                    <div className="col">
                        <p className="mt-3">Investment</p>
                    </div>
                    <div className="col">
                        <p className="mt-3">Qty.</p>
                    </div>
                    <div className="col">
                        <p className="mt-3">Avg.</p>
                    </div>
                    <div className="col">
                        <p className="mt-3">LTP</p>
                    </div>
                    <div className="col">
                        <p className="mt-3">P&L</p>
                    </div>
                    <div className="col">
                        <p className="mt-3">Chg.</p>
                    </div>
                </div>

                {allPositions.map((position, index) => {
                    const profitOrLoss = position.isLoss ? 'loss' : 'profit';


                    return <div className="row border text-center row-items">
                        <div className="col">
                            <p className="mt-3">{position.name}</p>
                        </div>

                        <div className="col">
                            <p className="mt-3">{position.price}</p>
                        </div>
                        <div className="col">
                            <p className="mt-3">{position.qty}</p>
                        </div>
                        <div className="col">
                            <p className="mt-3">{position.avg}</p>
                        </div>
                        <div className="col">
                            <p className="mt-3">{position.price}</p>
                        </div>
                        <div className="col">
                            <p className="mt-3" style={{ color: profitOrLoss === 'loss' ? 'red' : 'green' }}>{profitOrLoss}</p>
                        </div>
                        <div className="col">
                            <p className="mt-3" style={{ color: position.net[0] === '+' ? 'green' : 'red' }}>{position.net}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default PositionsPage;