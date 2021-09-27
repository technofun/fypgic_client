import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import ConditionalForm from './ConditionalForm'
import { StudentData } from '../../contexts/studentContext'
import NavigationBar from '../../NavigationBar';

export function Semester1() {
    const { selectSession,
        setSelectSession,
        selectSemester,
        setSelectSemester,
        selectBatch,
        setSelectBatch,
        semesterSubjects
    } = useContext(StudentData)
    const [studentName, setstudentName] = useState('')
    const [fatherName, setfatherName] = useState('')
    const [collegeRollno, setcollegeRollno] = useState('')
    const [universityRollNo, setuniversityRollNo] = useState('')
    const [registrationNo, setregistrationNo] = useState('')
    const [cnic, setcnic] = useState('')
    const [phoneno, setphoneNo] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')

    const handleStudentSubmit = (e) => {
        e.preventDefault()
        if (studentName && fatherName &&
            collegeRollno && universityRollNo &&
            registrationNo && cnic && email) {

            const newStudent = {
                name: studentName,
                rollnumber: collegeRollno,
                registrationNumber: registrationNo,
                universityRollNumber: universityRollNo,
                username: studentName + '@' + fatherName,
                email: email,
                session: selectSession,
                batch:selectBatch,
                currentSemester: selectSemester,
                semester: [
                    // {
                    //     [selectSemester]: semesterSubjects
                    // }

                ]
            }

            axios.post('https://fypgic.herokuapp.com/api/student/registerstudent/', newStudent)
                .then(res => {
                    alert(`${res.data.name} has been Register successfully!`)
                    setstudentName('')
                    setfatherName('')
                    setcollegeRollno('')
                    setuniversityRollNo('')
                    setregistrationNo('')
                    setcnic('')
                    setphoneNo('')
                    setemail('')
                    setaddress('')

                })
                .catch(err => document.write(err))
            console.log(newStudent);
        }
        else {
            alert('enter all details')
        }

    }

    useEffect(() => {
        // axios.get('https://fypgic.herokuapp.com/api/student/610d5d3223b8042ac0136847')
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // console.log(semesterSubjects)
    }, [])
    return (
        <>
            <NavigationBar />
            <div className="container-fluid px-lg-5 px-md-5">
                <h1 className="text-center py-4 mt-2 bg-dark text-light border border-secondary rounded">Student Registration</h1>
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
                </div>
                <div>
                    {
                        selectSession !== '' && selectSemester !== '' && selectBatch !== ''
                            ?
                            <div className="container justify-content-center pb-2">
                                <form className="form-row">
                                    <h1 className="font-weight-light">BSCS {selectSemester} Session({selectSession}) {selectBatch}</h1>
                                    <div className="form-group col-md-6">
                                        <label>
                                            Student Name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            required
                                            value={studentName}
                                            onChange={e => setstudentName(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Student Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            Father Name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            required
                                            value={fatherName}
                                            onChange={e => setfatherName(e.target.value)}
                                            className="form-control"
                                            type="text"
                                            placeholder="Father Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            College Roll#
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            required
                                            value={collegeRollno}
                                            onChange={e => setcollegeRollno(e.target.value)}
                                            className="form-control"
                                            type="number"
                                            placeholder="e.g 552" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            University Roll#
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            required
                                            value={universityRollNo}
                                            onChange={e => setuniversityRollNo(e.target.value)}
                                            className="form-control"
                                            type="number"
                                            placeholder="e.g 123456" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            Registration No
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            required
                                            value={registrationNo}
                                            onChange={e => setregistrationNo(e.target.value)}
                                            className="form-control"
                                            type="text"
                                            placeholder="2017-GCUF-123457" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            CNIC
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            value={cnic}
                                            onChange={e => setcnic(e.target.value)}
                                            className="form-control"
                                            type="text"
                                            placeholder="3310012345678"
                                            maxLength="13"
                                            minLength="13"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >
                                            Phone No
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            value={phoneno}
                                            onChange={e => setphoneNo(e.target.value)}
                                            className="form-control"
                                            type="number"
                                            placeholder="e.g 03245678910"
                                            maxLength="11"
                                            minLength="11"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>
                                            Email

                                        </label>
                                        <input
                                            value={email}
                                            onChange={e => setemail(e.target.value)}
                                            className="form-control"
                                            type="email"
                                            placeholder="e.g abc12@gmail.com"
                                        />
                                    </div>
                                    <div className="form-group col-12">
                                        <label>Address</label>
                                        <textarea
                                            value={address}
                                            onChange={e => setaddress(e.target.value)}
                                            className="form-control"
                                            placeholder="johar colony x-block ..."
                                        ></textarea>
                                    </div>


                                    {/* <ConditionalForm selectSemester={selectSemester} /> */}


                                    <button
                                        onClick={handleStudentSubmit}
                                        className="btn btn-secondary btn-lg btn-block mb-4">Add Student</button>


                                </form>

                            </div>
                            :
                            <h1 className="display-4 mx-auto text-center text-danger">Select Session and semester </h1>



                    }
                </div>
            </div>
        </>
    )
}
