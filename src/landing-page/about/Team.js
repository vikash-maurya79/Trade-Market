import { Link } from "react-router-dom";

function People() {
    return (
        <div className="container text-center mt-5 mb-5 border-top">
            <h5 className="mt-5">Who I am ?</h5>
            <div className="row mt-5 pb-5">
                <div className="col my-dp-container">
                    <div className="dp-circle">
                        <img src="/media/image/my-dp-image.jpg"></img>
                    </div>
                    <h5 className="name">Vikash Maurya</h5>
                    <p>Software Engineer.</p>
                </div>

                <div className="col text-center">
                    <p>A Software Engineer specializing in the MERN Stack (MongoDB, Express.js, React.js, and Node.js). I love turning ideas into real-world web applications that are fast, scalable, and user-friendly.
                       I work with Node.js to build efficient backend APIs and use React.js to craft modern, responsive frontends , currently this one is not. My development workflow is powered by Git/GitHub for version control and CI/CD pipelines for smooth, automated deployments.
                       Solved 120+ <Link className="intero-link" to='https://leetcode.com/u/vikash_maurya79/'>DSA problems</Link> <br></br><Link className="intero-link" to='https://leetcode.com/u/vikash_maurya79/'>Got 50 Days</Link> badge from LeetCode. I’m passionate about clean code, problem-solving, and continuous learning — always exploring better ways to build full-stack solutions that make an impact.</p>
                </div>
            </div>
        </div>
    );
}

export default People;