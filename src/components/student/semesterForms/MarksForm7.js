import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm7() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem7, setSem7 } = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: "Mobile and Application Development",
        subject2Name: "Software Engineering-II",
        subject3Name: "Parallel & Distributed Computing",
        subject4Name: "Information Security",
        subject5Name: "Pakistan Studies"
    })
    const [midMarks, setmidMarks] = useState({
        mobileappMid: 0,
        softeng2Mid: 0,
        parallelcomputingMid: 0,
        infosecurityMid: 0,
        pakstudyMid: 0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        mobileappSessional: 0,
        softeng2Sessional: 0,
        parallelcomputingSessional: 0,
        infosecuritySessional: 0,
        pakstudySessional: 0
    })
    const [finalMarks, setfinalMarks] = useState({
        mobileappFinal: 0,
        softeng2Final: 0,
        parallelcomputingFinal: 0,
        infosecurityFinal: 0,
        pakstudyFinal: 0
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
                midterm: midMarks.mobileappMid,
                sessional: sessionalMarks.mobileappSessional,
                finals: finalMarks.mobileappFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.softeng2Mid,
                sessional: sessionalMarks.softeng2Sessional,
                finals: finalMarks.softeng2Final
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.parallelcomputingMid,
                sessional: sessionalMarks.parallelcomputingSessional,
                finals: finalMarks.parallelcomputingFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.infosecurityMid,
                sessional: sessionalMarks.infosecuritySessional,
                finals: finalMarks.infosecurityFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.pakstudyMid,
                sessional: sessionalMarks.pakstudySessional,
                finals: finalMarks.pakstudyFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        setSem7([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.mobileappMid,
                sessional: sessionalMarks.mobileappSessional,
                finals: finalMarks.mobileappFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.softeng2Mid,
                sessional: sessionalMarks.softeng2Sessional,
                finals: finalMarks.softeng2Final
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.parallelcomputingMid,
                sessional: sessionalMarks.parallelcomputingSessional,
                finals: finalMarks.parallelcomputingFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.infosecurityMid,
                sessional: sessionalMarks.infosecuritySessional,
                finals: finalMarks.infosecurityFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.pakstudyMid,
                sessional: sessionalMarks.pakstudySessional,
                finals: finalMarks.pakstudyFinal
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
            <p className="display-4">semester 7</p>
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
                            <td>CSI-615</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="mobileappMid"
                                maxLength="2"
                                value={midMarks.mobileappMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="mobileappSessional"
                                value={sessionalMarks.mobileappSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="mobileappFinal"
                                value={finalMarks.mobileappFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(2-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.mobileappMid) + parseInt(sessionalMarks.mobileappSessional) + parseInt(finalMarks.mobileappFinal)}
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
                            <td>SWE-603</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="softeng2Mid"
                                value={midMarks.softeng2Mid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="softeng2Sessional"
                                value={sessionalMarks.softeng2Sessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="softeng2Final"
                                value={finalMarks.softeng2Final}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.softeng2Mid) + parseInt(sessionalMarks.softeng2Sessional) + parseInt(finalMarks.softeng2Final)}
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
                            <td>CSI-621</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="parallelcomputingMid"
                                value={midMarks.parallelcomputingMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.parallelcomputingSessional}
                                onChange={handleSessionalMarks}
                                name="parallelcomputingSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="parallelcomputingFinal"
                                value={finalMarks.parallelcomputingFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.parallelcomputingMid) + parseInt(sessionalMarks.parallelcomputingSessional) + parseInt(finalMarks.parallelcomputingFinal)}

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
                            <td>CSI-619</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="infosecurityMid"
                                    value={midMarks.infosecurityMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.infosecuritySessional}
                                onChange={handleSessionalMarks}
                                name="infosecuritySessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="infosecurityFinal"
                                value={finalMarks.infosecurityFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.infosecurityMid) + parseInt(sessionalMarks.infosecuritySessional) + parseInt(finalMarks.infosecurityFinal)}

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
                            <td>PST-321</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="pakstudyMid"
                                value={midMarks.pakstudyMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.pakstudySessional}
                                onChange={handleSessionalMarks}
                                name="pakstudySessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="pakstudyFinal"
                                value={finalMarks.pakstudyFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.pakstudyMid) + parseInt(sessionalMarks.pakstudySessional) + parseInt(finalMarks.pakstudyFinal)}

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

export default MarksForm7;
