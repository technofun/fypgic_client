import React, { useState, useRef, useEffect } from 'react'
import NavigationBar from '../NavigationBar'
import axios from 'axios'
import { toLower } from 'lodash'
import { style, width } from '@material-ui/system'
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link, useHistory } from 'react-router-dom'

function GenerateQr() {
    const [selectSession, setSelectSession] = useState('')
    const [selectSemester, setSelectSemester] = useState('')
    const [selectBatch, setSelectBatch] = useState('')
    const [stCards, setStCards] = useState([])

    const qrRef = useRef(null);
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const history = useHistory()
    // const downloadQr = (e) => {
    //     generateQrCode();
    //     console.log('qr code generated');
    // }
    const generateQr = async (e) => {
        try {
            const response = await QRCode.toDataURL(e.target.id);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
        // setText(e.target.id);
        // console.log(text);
    }
    const printDocument = (e) => {
        const input = document.getElementById('studentcard');
        console.log(e.target.className);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save(`stCard.pdf`);
            })
            ;
    }

    const DownloadQrCode = async (e) => {

        try {
            const response = await QRCode.toDataURL(e.target.id);
            setImageUrl(response);
            // printDocument(e);
        } catch (error) {
            console.log(error);
        }
    }
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleStudentSubmit = () => {
        if (selectSession && selectSemester && selectBatch) {
            console.log(selectSession, selectSemester, selectBatch);
            axios.get(`https://fypgic.herokuapp.com/api/student/studentsqr/${selectSession}/${selectSemester}/${selectBatch}`)
                .then(res => {
                    setStCards(res.data)
                    console.log(stCards ? true : false);
                })
                .catch(err => alert(err.message))
        }
        else {
            console.log('select filters');
            alert('bhai filter select kry')
        }


    }
    const updateStudent = (student) => {

        localStorage.setItem(
            'myStudent', JSON.stringify(student)
        )

    }
    return (
        <>
            <NavigationBar />

            <div className="form-row row px-lg-5 px-md-5">
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <label className="font-weight-bold text-muted">select Session</label>
                    <select className="form-control" value={selectSession} onChange={e => setSelectSession(e.target.value)}>
                        <option value="">Select Session</option>
                        <option>2017-2021</option>
                        <option>2018-2022</option>
                        <option>2019-2023</option>
                        <option>2020-2024</option>
                        <option>2021-2025</option>

                    </select>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <label className="text-muted font-weight-bold">Select Semester</label>
                    <select
                        className="form-control"
                        value={selectSemester}
                        onChange={e => setSelectSemester(e.target.value)}
                    >
                        <option value=''>Select Semester</option>
                        <option value='semester1'>Semester 1</option>
                        <option value='semester2'>Semester 2</option>
                        <option value='semester3'>Semester 3</option>
                        <option value='semester4'>Semester 4</option>
                        <option value='semester5'>Semester 5</option>
                        <option value='semester6'>Semester 6</option>
                        <option value='semester7'>Semester 7</option>
                        <option value='semester8'>Semester 8</option>
                    </select>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <label className="font-weight-bold text-muted">Select Batch</label>
                    <select
                        className="form-control"
                        value={selectBatch}
                        onChange={e => setSelectBatch(e.target.value)}>
                        <option value="">Select Batch</option>
                        <option>Morning</option>
                        <option>Evening</option>
                    </select>
                </div>
                <button
                    onClick={handleStudentSubmit}
                    className="btn btn-secondary btn-lg btn-block mt-2">Students QR</button>

                <div>
                    {
                        stCards.length !== 0 ?
                            stCards.map(card => (
                                <>
                                    <div className="row" key={card._id} style={{ width: 1400 }}>
                                        <div className="col-6">
                                            <div id="studentcard" className="card mt-2">
                                                <h3> Student Name:    <i>{card.name}</i></h3>
                                                <p>Registration No:{card.registrationNumber}</p>
                                                {imageUrl ? (
                                                    <a href={imageUrl} download>

                                                        <img src={imageUrl} alt="img" />
                                                        <img src={card.profilePicture} />

                                                        <button id={card._id} className={`${card.name} ${card.rollnumber}`} onClick={DownloadQrCode}>Download QR</button>
                                                    </a>) : null}
                                                {/* <Link to={{
                                                    pathname: '/updatemarks',

                                                    state: {
                                                        myStudent: card
                                                    }
                                                }}


                                                >Update Result</Link> */}
                                                <Link className="btn btn-outline-warning" onClick={()=>updateStudent(card)} to="/updatemarks" target="_blank">Update Result</Link>
                                                <button id={card._id} className="btn btn-primary" onClick={generateQr}>Generate QR</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                            :

                            <h1>Not Found</h1>
                    }
                </div>
            </div>

        </>
    )
}

export default GenerateQr
