import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm6() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem6, setSem6 } = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: "Artificial Intelligence",
        subject2Name: "Computer Networks",
        subject3Name: "Web Design and Development",
        subject4Name: "Distributed Database Systems",
        subject5Name: "Technical & Business Writing"
    })
    const [midMarks, setmidMarks] = useState({
        artificialintelligenceMid: 0,
        computernetworkMid: 0,
        webdesignMid: 0,
        ddbsMid: 0,
        technicalwritingMid: 0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        artificialintelligenceSessional: 0,
        computernetworkSessional: 0,
        webdesignSessional: 0,
        ddbsSessional: 0,
        technicalwritingSessional: 0
    })
    const [finalMarks, setfinalMarks] = useState({
        artificialintelligenceFinal: 0,
        computernetworkFinal: 0,
        webdesignFinal: 0,
        ddbsFinal: 0,
        technicalwritingFinal: 0
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
                midterm: midMarks.artificialintelligenceMid,
                sessional: sessionalMarks.artificialintelligenceSessional,
                finals: finalMarks.artificialintelligenceFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.computernetworkMid,
                sessional: sessionalMarks.computernetworkSessional,
                finals: finalMarks.computernetworkFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.webdesignMid,
                sessional: sessionalMarks.webdesignSessional,
                finals: finalMarks.webdesignFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.ddbsMid,
                sessional: sessionalMarks.ddbsSessional,
                finals: finalMarks.ddbsFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.technicalwritingMid,
                sessional: sessionalMarks.technicalwritingSessional,
                finals: finalMarks.technicalwritingFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        setSem6([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.artificialintelligenceMid,
                sessional: sessionalMarks.artificialintelligenceSessional,
                finals: finalMarks.artificialintelligenceFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.computernetworkMid,
                sessional: sessionalMarks.computernetworkSessional,
                finals: finalMarks.computernetworkFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.webdesignMid,
                sessional: sessionalMarks.webdesignSessional,
                finals: finalMarks.webdesignFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.ddbsMid,
                sessional: sessionalMarks.ddbsSessional,
                finals: finalMarks.ddbsFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.technicalwritingMid,
                sessional: sessionalMarks.technicalwritingSessional,
                finals: finalMarks.technicalwritingFinal
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
            <p className="display-4">semester 6</p>
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
                            <td>CSI-508</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="artificialintelligenceMid"
                                maxLength="2"
                                value={midMarks.artificialintelligenceMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="artificialintelligenceSessional"
                                value={sessionalMarks.artificialintelligenceSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="artificialintelligenceFinal"
                                value={finalMarks.artificialintelligenceFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.artificialintelligenceMid) + parseInt(sessionalMarks.artificialintelligenceSessional) + parseInt(finalMarks.artificialintelligenceFinal)}
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
                            <td>CSI-512</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="computernetworkMid"
                                value={midMarks.computernetworkMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="computernetworkSessional"
                                value={sessionalMarks.computernetworkSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="computernetworkFinal"
                                value={finalMarks.computernetworkFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>4(3-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.computernetworkMid) + parseInt(sessionalMarks.computernetworkSessional) + parseInt(finalMarks.computernetworkFinal)}
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
                            <td>CSI-506</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="webdesignMid"
                                value={midMarks.webdesignMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.webdesignSessional}
                                onChange={handleSessionalMarks}
                                name="webdesignSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="webdesignFinal"
                                value={finalMarks.webdesignFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(2-1)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.webdesignMid) + parseInt(sessionalMarks.webdesignSessional) + parseInt(finalMarks.webdesignFinal)}

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
                            <td>CSI-504</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="ddbsMid"
                                    value={midMarks.ddbsMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.ddbsSessional}
                                onChange={handleSessionalMarks}
                                name="ddbsSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="ddbsFinal"
                                value={finalMarks.ddbsFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(2-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.ddbsMid) + parseInt(sessionalMarks.ddbsSessional) + parseInt(finalMarks.ddbsFinal)}

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
                            <td>ENG-510</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="technicalwritingMid"
                                value={midMarks.technicalwritingMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.technicalwritingSessional}
                                onChange={handleSessionalMarks}
                                name="technicalwritingSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="technicalwritingFinal"
                                value={finalMarks.technicalwritingFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.technicalwritingMid) + parseInt(sessionalMarks.technicalwritingSessional) + parseInt(finalMarks.technicalwritingFinal)}

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

export default MarksForm6;
