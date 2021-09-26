import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm4() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem4, setSem4 } = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: "Design & Analysis of Algorithms",
        subject2Name: "Operating Systems",
        subject3Name: "Theory of Automata",
        subject4Name: "Numerical Computing",
        subject5Name: "Human Resource Management"
    })
    const [midMarks, setmidMarks] = useState({
        designalgoMid: 0,
        operatingsysMid: 0,
        automataMid: 0,
        numericalcomputingMid: 0,
        hrMid: 0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        designalgoSessional: 0,
        operatingsysSessional: 0,
        automataSessional: 0,
        numericalcomputingSessional: 0,
        hrSessional: 0
    })
    const [finalMarks, setfinalMarks] = useState({
        designalgoFinal: 0,
        operatingsysFinal: 0,
        automataFinal: 0,
        numericalcomputingFinal: 0,
        hrFinal: 0
    })
    useEffect(() => {
        // console.log(midMarks);
        // console.log(sessionalMarks);
        // console.log(finalMarks);
    }, [])
    const handleSubjectNames = (evt) => {
        const value = evt.target.value;
        setSubjectNames({
            ...subjectNames,
            [evt.target.name]: value
        });
    }

    const handleMidMarks = (evt) => {
        const value = evt.target.value;
        setmidMarks({
            ...midMarks,
            [evt.target.name]: value
        });
    }
    const handleSessionalMarks = (evt) => {
        const value = evt.target.value;
        setsessionalMarks({
            ...sessionalMarks,
            [evt.target.name]: value
        });
    }
    const handleFinalMarks = (evt) => {
        const value = evt.target.value;
        setfinalMarks({
            ...finalMarks,
            [evt.target.name]: value
        });
    }

    const handleAddMarks = (e) => {
        e.preventDefault()
        setsemesterSubjects([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.designalgoMid,
                sessional: sessionalMarks.designalgoSessional,
                finals: finalMarks.designalgoFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.operatingsysMid,
                sessional: sessionalMarks.operatingsysSessional,
                finals: finalMarks.operatingsysFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.automataMid,
                sessional: sessionalMarks.automataSessional,
                finals: finalMarks.automataFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.numericalcomputingMid,
                sessional: sessionalMarks.numericalcomputingSessional,
                finals: finalMarks.numericalcomputingFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.hrMid,
                sessional: sessionalMarks.hrSessional,
                finals: finalMarks.hrFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        setSem4([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.designalgoMid,
                sessional: sessionalMarks.designalgoSessional,
                finals: finalMarks.designalgoFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.operatingsysMid,
                sessional: sessionalMarks.operatingsysSessional,
                finals: finalMarks.operatingsysFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.automataMid,
                sessional: sessionalMarks.automataSessional,
                finals: finalMarks.automataFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.numericalcomputingMid,
                sessional: sessionalMarks.numericalcomputingSessional,
                finals: finalMarks.numericalcomputingFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.hrMid,
                sessional: sessionalMarks.hrSessional,
                finals: finalMarks.hrFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        // console.log(semesterSubjects);
    }
    return (
        <div>
            <p className="display-4">semester 4</p>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Mid Term</th>
                            <th>Sessional</th>
                            <th>Final Term</th>
                            <th>Credit Hours</th>
                            <th>Total</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CSI-406</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="designalgoMid"
                                maxLength="2"
                                value={midMarks.designalgoMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="designalgoSessional"
                                value={sessionalMarks.designalgoSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="designalgoFinal"
                                value={finalMarks.designalgoFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.designalgoMid) + parseInt(sessionalMarks.designalgoSessional) + parseInt(finalMarks.designalgoFinal)}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td>{SubjectGrade}
                                <input
                                    maxLength="1"
                                    minLength="1"
                                    type="text"
                                    className="form-control text-uppercase" />
                            </td>

                        </tr>
                        <tr>
                            <td>CSI-402</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="operatingsysMid"
                                value={midMarks.operatingsysMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="operatingsysSessional"
                                value={sessionalMarks.operatingsysSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="operatingsysFinal"
                                value={finalMarks.operatingsysFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>4(3-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.operatingsysMid) + parseInt(sessionalMarks.operatingsysSessional) + parseInt(finalMarks.operatingsysFinal)}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td>{SubjectGrade}
                                <input
                                    maxLength="1"
                                    minLength="1"
                                    type="text"
                                    className="form-control text-uppercase" />
                            </td>
                        </tr>
                        <tr>
                            <td>CSI-404</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="automataMid"
                                value={midMarks.automataMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.automataSessional}
                                onChange={handleSessionalMarks}
                                name="automataSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="automataFinal"
                                value={finalMarks.automataFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.automataMid) + parseInt(sessionalMarks.automataSessional) + parseInt(finalMarks.automataFinal)}

                                    type="number"
                                    className="form-control" />
                            </td>
                            <td>{SubjectGrade}
                                <input
                                    maxLength="1"
                                    minLength="1"
                                    type="text"
                                    className="form-control text-uppercase" />
                            </td>
                        </tr>
                        <tr>
                            <td>CSI-408</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="numericalcomputingMid"
                                    value={midMarks.numericalcomputingMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.numericalcomputingSessional}
                                onChange={handleSessionalMarks}
                                name="numericalcomputingSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="numericalcomputingFinal"
                                value={finalMarks.numericalcomputingFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.numericalcomputingMid) + parseInt(sessionalMarks.numericalcomputingSessional) + parseInt(finalMarks.numericalcomputingFinal)}

                                    type="number"
                                    className="form-control" />
                            </td>
                            <td>{SubjectGrade}
                                <input
                                    maxLength="1"
                                    minLength="1"
                                    type="text"
                                    className="form-control text-uppercase" />
                            </td>
                        </tr>
                        <tr>
                            <td>BBA-506</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="hrMid"
                                value={midMarks.hrMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.hrSessional}
                                onChange={handleSessionalMarks}
                                name="hrSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="hrFinal"
                                value={finalMarks.hrFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.hrMid) + parseInt(sessionalMarks.hrSessional) + parseInt(finalMarks.hrFinal)}

                                    type="number"
                                    className="form-control" />
                            </td>
                            <td>{SubjectGrade}
                                <input
                                    maxLength="1"
                                    minLength="1"
                                    type="text"
                                    className="form-control text-uppercase" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button
                onClick={handleAddMarks}
                className="btn btn-secondary btn-lg btn-block mb-1">Add Marks</button>
        </div>
    )
}

export default MarksForm4;
