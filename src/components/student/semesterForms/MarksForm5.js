import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm5() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem5, setSem5 } = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: "Compiler Construction",
        subject2Name: "Database Systems",
        subject3Name: "Software Engineering-I",
        subject4Name: "Multivariable Calculus",
        subject5Name: "Psychology"
    })
    const [midMarks, setmidMarks] = useState({
        compilerMid: 0,
        databasesystemsMid: 0,
        softwareeng1Mid: 0,
        multivariableMid: 0,
        psychologyMid: 0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        compilerSessional: 0,
        databasesystemsSessional: 0,
        softwareeng1Sessional: 0,
        multivariableSessional: 0,
        psychologySessional: 0
    })
    const [finalMarks, setfinalMarks] = useState({
        ictFinal: 0,
        databasesystemsFinal: 0,
        softwareeng1Final: 0,
        multivariableFinal: 0,
        psychologyFinal: 0
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
                midterm: midMarks.compilerMid,
                sessional: sessionalMarks.compilerSessional,
                finals: finalMarks.ictFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.databasesystemsMid,
                sessional: sessionalMarks.databasesystemsSessional,
                finals: finalMarks.databasesystemsFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.softwareeng1Mid,
                sessional: sessionalMarks.softwareeng1Sessional,
                finals: finalMarks.softwareeng1Final
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.multivariableMid,
                sessional: sessionalMarks.multivariableSessional,
                finals: finalMarks.multivariableFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.psychologyMid,
                sessional: sessionalMarks.psychologySessional,
                finals: finalMarks.psychologyFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        setSem5([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.compilerMid,
                sessional: sessionalMarks.compilerSessional,
                finals: finalMarks.ictFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.databasesystemsMid,
                sessional: sessionalMarks.databasesystemsSessional,
                finals: finalMarks.databasesystemsFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.softwareeng1Mid,
                sessional: sessionalMarks.softwareeng1Sessional,
                finals: finalMarks.softwareeng1Final
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.multivariableMid,
                sessional: sessionalMarks.multivariableSessional,
                finals: finalMarks.multivariableFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.psychologyMid,
                sessional: sessionalMarks.psychologySessional,
                finals: finalMarks.psychologyFinal
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
            <p className="display-4">semester 5</p>
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
                            <td>CSI-505</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="compilerMid"
                                maxLength="2"
                                value={midMarks.compilerMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="compilerSessional"
                                value={sessionalMarks.compilerSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="ictFinal"
                                value={finalMarks.ictFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.compilerMid) + parseInt(sessionalMarks.compilerSessional) + parseInt(finalMarks.ictFinal)}
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
                            <td>CSI-503</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="databasesystemsMid"
                                value={midMarks.databasesystemsMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="databasesystemsSessional"
                                value={sessionalMarks.databasesystemsSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="databasesystemsFinal"
                                value={finalMarks.databasesystemsFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>4(3-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.databasesystemsMid) + parseInt(sessionalMarks.databasesystemsSessional) + parseInt(finalMarks.databasesystemsFinal)}
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
                            <td>SWE-503</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="softwareeng1Mid"
                                value={midMarks.softwareeng1Mid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.softwareeng1Sessional}
                                onChange={handleSessionalMarks}
                                name="softwareeng1Sessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="softwareeng1Final"
                                value={finalMarks.softwareeng1Final}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.softwareeng1Mid) + parseInt(sessionalMarks.softwareeng1Sessional) + parseInt(finalMarks.softwareeng1Final)}

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
                            <td>MTH-324</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="multivariableMid"
                                    value={midMarks.multivariableMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.multivariableSessional}
                                onChange={handleSessionalMarks}
                                name="multivariableSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="multivariableFinal"
                                value={finalMarks.multivariableFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.multivariableMid) + parseInt(sessionalMarks.multivariableSessional) + parseInt(finalMarks.multivariableFinal)}

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
                            <td>SOC-555</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="psychologyMid"
                                value={midMarks.psychologyMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.psychologySessional}
                                onChange={handleSessionalMarks}
                                name="psychologySessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="psychologyFinal"
                                value={finalMarks.psychologyFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.psychologyMid) + parseInt(sessionalMarks.psychologySessional) + parseInt(finalMarks.psychologyFinal)}

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

export default MarksForm5;
