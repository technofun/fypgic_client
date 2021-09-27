import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { ScanStudent } from './scanstudent';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import ResultCard from './ResultCard';
import csLogo from '../../images/cs_logo.jpg';

function StudentData() {

    const qrRef = useRef(null);
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const [students, setStudents] = useState([])
    const [resultStudent, setResultStudent] = useState({})
    useEffect(() => {
        axios.get('https://fypgic.herokuapp.com/api/student/allstudents')
            // axios.get('http://localhost:5000/api/student/allstudents')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
        // console.log(scanResultWebCam);


    }, [])
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }

    const findSt = () => {
        setTimeout(() => {
            let st = students.find(a => a._id === scanResultWebCam)
            setResultStudent(st)
        }, 500)

    }

    return (
        <div>
            {console.log(students)}
            <div className="container" >
           
                <div className="row">
                    <div className=" col-sm-12 col-md-2 col-lg-2"> <img alt="image" src="http://gpgic.edu.pk/wp-content/uploads/2021/01/Untitled-1-1.png" /></div>
                    <div className=" col-sm-10 col-md-10 col-lg-10"><span className="display-4"> Govt Islamia Graduate College </span></div>

                </div>
                <div>
                    <div className=" col-sm-10 col-md-10 col-lg-10" style={{ margin: 'auto',fontSize:'3rem' ,border:'1px solid black'}}>
                        <span > Department of Computer Science </span>
                        <img src={csLogo} width="100" />
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4 border" >
                        <Grid item xl={4} lg={8} md={4} sm={4} xs={12}>
                            <QrReader
                                delay={100}
                                style={{ width: '100%' }}
                                onError={handleErrorWebCam}
                                onScan={handleScanWebCam}
                            />
                        </Grid>
                    </div>
                    {
                        students
                            .filter(std => std._id === scanResultWebCam)
                            .map(st => (
                                <>
                                    <div className="col-6 border">
                                        <table className="table-responsive">
                                            <tr>
                                                <th>Student Name:</th>
                                                <td>{st.name}</td>
                                            </tr>
                                            <tr>
                                                <th>College Roll#:</th>
                                                <td> {st.rollnumber}</td>
                                            </tr>
                                            <tr>
                                                <th>University Roll#:</th>
                                                <td>{st.universityRollNumber}</td>
                                            </tr>
                                            <tr>
                                                <th>Registration #:</th>
                                                <td>{st.registrationNumber}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-2 text-center">
                                        <div className="border ">
                                            <img alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I6Qhnp4-neWYQngu5ZCxH62SvHakgJxRoznCaobRA=s83-c-mo" />
                                        </div>
                                    </div>
                                    <ResultCard studentData={st} />
                                </>
                            ))
                    }
                </div>
            </div>
            {/* 
            {
                students
                    .filter(std => std._id === scanResultWebCam)
                    .map(st => (
                        <>
                            <div className="container">

                                <div className="row">
                                    <div className="col-4" >
                                        <Grid item xl={4} lg={8} md={4} sm={4} xs={12}>
                                            <QrReader
                                                delay={100}
                                                // style={{ width: '100%' }}
                                                onError={handleErrorWebCam}
                                                onScan={handleScanWebCam}
                                            />
                                        </Grid>
                                    </div>
                                    <div className="col-6 border">
                                        <table className="table-responsive">
                                            <tr>
                                                <th>Student Name:</th>
                                                <td>{st.name}</td>
                                            </tr>
                                            <tr>
                                                <th>College Roll#:</th>
                                                <td> {st.rollnumber}</td>
                                            </tr>
                                            <tr>
                                                <th>University Roll#:</th>
                                                <td>318745</td>
                                            </tr>
                                            <tr>
                                                <th>Registration #:</th>
                                                <td>2017-GCUF-056567</td>
                                            </tr>
                                            <tr>
                                                <th>SR:</th>
                                                <td><input value={scanResultWebCam} onChange={findSt} /></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-2 text-center">
                                        <div className="border ">
                                            <img alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I6Qhnp4-neWYQngu5ZCxH62SvHakgJxRoznCaobRA=s83-c-mo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ResultCard studentData={st} />
                        </>
                    ))
            } */}

        </div>
    )
}

export default StudentData
