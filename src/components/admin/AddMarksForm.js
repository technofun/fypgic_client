import React, { useState, useEffect, useContext } from 'react'
import MarksForm from '../student/semesterForms/MarksForm';
import MarksForm2 from '../student/semesterForms/MarksForm2';
import MarksForm3 from '../student/semesterForms/MarksForm3';
import MarksForm4 from '../student/semesterForms/MarksForm4';
import MarksForm5 from '../student/semesterForms/MarksForm5';
import MarksForm6 from '../student/semesterForms/MarksForm6';
import MarksForm7 from '../student/semesterForms/MarksForm7';
import MarksForm8 from '../student/semesterForms/MarksForm8';
import { StudentData } from '../contexts/studentContext';
import { DeleteForever } from '@material-ui/icons'
import './addMarks.scss'
import axios from 'axios';
import { Redirect, useLocation, useParams, useHistory } from 'react-router';
function AddMarksForm() {
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8 } = useContext(StudentData)

    const mst = localStorage.getItem('myStudent');
    const myStudent = JSON.parse(mst)
    // console.log(semesterSubjects);
    // console.log(myStudent)

    const [name, setName] = useState(myStudent.name)
    const [rollnumber, setRollNumber] = useState(myStudent.rollnumber)
    const [universityRollNumber, setUniversityRollNumber] = useState(myStudent.universityRollNumber)
    const [session, setSession] = useState(myStudent.session)
    const [currentSemester, setCurrentSemester] = useState(myStudent.currentSemester)

    const handleStudentSubmit = (e) => {
        e.preventDefault()

        const updatedStudent = {
            name: name,
            rollnumber: rollnumber,
            registrationNumber: myStudent.registrationNumber,
            universityRollNumber: universityRollNumber,
            username: myStudent.username,
            email: myStudent.email,
            session: session,
            batch: myStudent.batch,
            currentSemester: currentSemester,

            semester: [
                {
                    // [myStudent.currentSemester]:semesterSubjects,

                    ['semester1']: sem1,
                    ['semester2']: sem2,
                    ['semester3']: sem3,
                    ['semester4']: sem4,
                    ['semester5']: sem5,
                    ['semester6']: sem6,
                    ['semester7']: sem7,
                    ['semester8']: sem8,

                }
            ]
        }
        console.log(updatedStudent);
        console.log(myStudent._id)
        axios.put(`https://fypgic.herokuapp.com/api/student/${myStudent._id}`, updatedStudent)
            .then(res => {
                alert(`${myStudent.name} has been updated successfully!`)
                localStorage.removeItem('myStudent');
                window.close();
            })
            .catch(err => alert(err))

    }
    let semForm;
    switch (myStudent.currentSemester) {
        case 'semester1':
            semForm = <>
                <MarksForm myStudent={myStudent} />
                <MarksForm2 />
            </>
            break;
        case 'semester2':
            semForm = <>
                <MarksForm />
                <MarksForm2 />
                <MarksForm3 />
            </>
            break;
        case 'semester3':
            semForm = <>
                <MarksForm />
                <MarksForm2 />
                <MarksForm3 />
                <MarksForm4 />
            </>
            break;
        case 'semester4':
            semForm = <>
                <MarksForm />
                <MarksForm2 />
                <MarksForm3 />
                <MarksForm4 />
                <MarksForm5 />
            </>
            break;
            case 'semester5':
                semForm = <>
                    <MarksForm />
                    <MarksForm2 />
                    <MarksForm3 />
                    <MarksForm4 />
                    <MarksForm5 />
                    <MarksForm6 />
                </>
                break;
                case 'semester6':
                    semForm = <>
                        <MarksForm />
                        <MarksForm2 />
                        <MarksForm3 />
                        <MarksForm4 />
                        <MarksForm5 />
                        <MarksForm6 />
                        <MarksForm7 />
                    </>
                    break;
                    case 'semester7':
                        semForm = <>
                            <MarksForm />
                            <MarksForm2 />
                            <MarksForm3 />
                            <MarksForm4 />
                            <MarksForm5 />
                            <MarksForm6 />
                            <MarksForm7 />
                            <MarksForm8 />

                        </>
                        break;
                        case 'semester8':
                            semForm = <>
                                <MarksForm />
                                <MarksForm2 />
                                <MarksForm3 />
                                <MarksForm4 />
                                <MarksForm5 />
                                <MarksForm6 />
                                <MarksForm7 />
                                <MarksForm8 />
                            </>
                            break;
        default:
            break;
    }


    return (
        <div className="container">
            <span className="cancel-editing"> Cancel<DeleteForever onClick={() => {
                localStorage.removeItem('myStudent');
                window.close();
            }} id="icon" /> </span>
            <form>
                {!mst ? <h2>No Details</h2> :
                    <div className="studentDetails">
                        <div>
                            <label>Name:</label> <input onChange={(e) => setName(e.target.value)} defaultValue={myStudent.name} />
                        </div>
                        <div>
                            <label>College Roll#:</label><input onChange={(e) => setRollNumber(e.target.value)} defaultValue={myStudent.rollnumber} />
                        </div>
                        <div>
                            <label>Uni Roll#:</label> <input onChange={(e) => setUniversityRollNumber(e.target.value)} defaultValue={myStudent.universityRollNumber} />
                        </div>
                        <div>
                            <label>Session:</label><input onChange={(e) => setSession(e.target.value)} defaultValue={myStudent.session} />
                        </div>
                        <div>
                            <label>Current Semester:</label><input onChange={(e) => setCurrentSemester(e.target.value)} defaultValue={myStudent.currentSemester} />
                        </div>

                    </div>
                }

                <div className="row">
                    {semForm}
                    {/* 
                    <MarksForm myStudent={myStudent} />
                    <MarksForm2 />
                    <MarksForm3 />
                    <MarksForm4 />
                    <MarksForm5 />
                    <MarksForm6 />
                    <MarksForm7 />
                    <MarksForm8 /> */}

                    <button type="submit" className="btn btn-danger btn-lg btn-block mb-4" onClick={handleStudentSubmit}>Update Student</button>
                </div>
            </form>
        </div>
    )
}

export default AddMarksForm
