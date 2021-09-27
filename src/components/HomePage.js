import React from 'react'
import { Link } from 'react-router-dom';
// import LoginScreen from './student/mainScreen/LoginScreen';
import NavigationBar from './NavigationBar';

function HomePage() {
    return (
        <>
            <NavigationBar />
            <div>

                <div style={{ textAlign: 'center' }}>
                    <h1 className="display-3 m-auto">Govt Islamia Graduate College Faisalabad</h1>
                    {/* <LoginScreen /> */}
                </div>
                <div className="d-flex" style={{justifyContent:'space-evenly'}}>
                    <div className="card text-center mt-5 ml-5" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h2 className="card-title">Register Student</h2>
                            <p className="card-text">Register new student with current semester.</p>
                            <Link to="/addStudent" className="btn btn-primary">Register</Link>
                        </div>
                    </div>
                    <div className="card text-center mt-5 ml-5" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h2 className="card-title">Scan Student</h2>
                            <p className="card-text">Scan student QR Code to show Result</p>
                            <Link to="/studentdata" className="btn btn-primary">Scan QR</Link>
                        </div>
                    </div>
                    <div className="card text-center mt-5 ml-5" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h2 className="card-title">Download QR</h2>
                            <p className="card-text">Filter session and Generate QR Code to download</p>
                            <Link to="/generateqr" className="btn btn-primary">QR Codes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
