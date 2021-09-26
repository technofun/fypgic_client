import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm2() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem2, setSem2 } = useContext(StudentData)
    const [subjectNames, setSubjectNames] = useState({
        subject1Name: " Digital Logic and Design",
        subject2Name: "Object Oriented Programming ",
        subject3Name: " Communication & Presentation Skills",
        subject4Name: "Probability and Statistics",
        subject5Name: "Applied Physics",
        subject6Name:" Issues in Pakistan Economy"
    })
    const [midMarks, setmidMarks] = useState({
        dldMid: 0,
        oopMid: 0,
        communicationskillMid: 0,
        statisticsMid: 0,
        physicsMid: 0,
        economicsMid:0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        dldSessional: 0,
        oopSessional: 0,
        communicationskillSessional: 0,
        statisticsSessional: 0,
        physicsSessional: 0,
        economicsSessional:0
    })
    const [finalMarks, setfinalMarks] = useState({
        dldFinal: 0,
        oopFinal: 0,
        communicationskillFinal: 0,
        statisticsFinal: 0,
        physicsFinal: 0,
        economicsFinal:0
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
                midterm: midMarks.dldMid,
                sessional: sessionalMarks.dldSessional,
                finals: finalMarks.dldFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.oopMid,
                sessional: sessionalMarks.oopSessional,
                finals: finalMarks.oopFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.communicationskillMid,
                sessional: sessionalMarks.communicationskillSessional,
                finals: finalMarks.communicationskillFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.statisticsMid,
                sessional: sessionalMarks.statisticsSessional,
                finals: finalMarks.statisticsFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.physicsMid,
                sessional: sessionalMarks.physicsSessional,
                finals: finalMarks.physicsFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: midMarks.economicsMid,
                sessional: sessionalMarks.economicsSessional,
                finals: finalMarks.economicsFinal
            },

        }])
        setSem2([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.dldMid,
                sessional: sessionalMarks.dldSessional,
                finals: finalMarks.dldFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.oopMid,
                sessional: sessionalMarks.oopSessional,
                finals: finalMarks.oopFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.communicationskillMid,
                sessional: sessionalMarks.communicationskillSessional,
                finals: finalMarks.communicationskillFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.statisticsMid,
                sessional: sessionalMarks.statisticsSessional,
                finals: finalMarks.statisticsFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.physicsMid,
                sessional: sessionalMarks.physicsSessional,
                finals: finalMarks.physicsFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: midMarks.economicsMid,
                sessional: sessionalMarks.economicsSessional,
                finals: finalMarks.economicsFinal
            },

        }])
        // console.log(semesterSubjects);
    }
    return (
        <div>
            <p className="display-4">semester 2</p>
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
                            <td>CSI-304</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="dldMid"
                                maxLength="2"
                                value={midMarks.dldMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="dldSessional"
                                value={sessionalMarks.dldSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="dldFinal"
                                value={finalMarks.dldFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.dldMid) + parseInt(sessionalMarks.dldSessional) + parseInt(finalMarks.dldFinal)}
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
                            <td>CSI-302</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="oopMid"
                                value={midMarks.oopMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="oopSessional"
                                value={sessionalMarks.oopSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="oopFinal"
                                value={finalMarks.oopFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>4(3-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.oopMid) + parseInt(sessionalMarks.oopSessional) + parseInt(finalMarks.oopFinal)}
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
                            <td>Eng-421</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="communicationskillMid"
                                value={midMarks.communicationskillMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.communicationskillSessional}
                                onChange={handleSessionalMarks}
                                name="communicationskillSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="communicationskillFinal"
                                value={finalMarks.communicationskillFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.communicationskillMid) + parseInt(sessionalMarks.communicationskillSessional) + parseInt(finalMarks.communicationskillFinal)}

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
                            <td>STA-324</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="statisticsMid"
                                    value={midMarks.statisticsMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.statisticsSessional}
                                onChange={handleSessionalMarks}
                                name="statisticsSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="statisticsFinal"
                                value={finalMarks.statisticsFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.statisticsMid) + parseInt(sessionalMarks.statisticsSessional) + parseInt(finalMarks.statisticsFinal)}

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
                            <td>PHY-323</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="physicsMid"
                                value={midMarks.physicsMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.physicsSessional}
                                onChange={handleSessionalMarks}
                                name="physicsSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="physicsFinal"
                                value={finalMarks.physicsFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.physicsMid) + parseInt(sessionalMarks.physicsSessional) + parseInt(finalMarks.physicsFinal)}

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
                        {/* <tr>
                            <td>ECO-408</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject6Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="physicsMid"
                                value={midMarks.economicsMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.economicsSessional}
                                onChange={handleSessionalMarks}
                                name="physicsSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="physicsFinal"
                                value={finalMarks.economicsFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.economicsMid) + parseInt(sessionalMarks.economicsSessional) + parseInt(finalMarks.economicsFinal)}

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
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <button
                onClick={handleAddMarks}
                className="btn btn-secondary btn-lg btn-block mb-1">Add Marks</button>
        </div>
    )
}

export default MarksForm2
