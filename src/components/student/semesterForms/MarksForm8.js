import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm8() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem8, setSem8 } = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: " Fundamental of Data Mining ",
        subject2Name: " Computer Graphics",
        subject3Name: "Islamic Studies/Ethics",
        subject4Name: " Final Year Project",
    })
    const [midMarks, setmidMarks] = useState({
        ictMid: 0,
        programmingMid: 0,
        englishMid: 0,
        calculusMid: 0,
        chineseMid: 0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        ictSessional: 0,
        programmingSessional: 0,
        englishSessional: 0,
        calculusSessional: 0,
        chineseSessional: 0
    })
    const [finalMarks, setfinalMarks] = useState({
        ictFinal: 0,
        programmingFinal: 0,
        englishFinal: 0,
        calculusFinal: 0,
        chineseFinal: 0
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
                midterm: midMarks.ictMid,
                sessional: sessionalMarks.ictSessional,
                finals: finalMarks.ictFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.programmingMid,
                sessional: sessionalMarks.programmingSessional,
                finals: finalMarks.programmingFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.englishMid,
                sessional: sessionalMarks.englishSessional,
                finals: finalMarks.englishFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.calculusMid,
                sessional: sessionalMarks.calculusSessional,
                finals: finalMarks.calculusFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.chineseMid,
                sessional: sessionalMarks.chineseSessional,
                finals: finalMarks.chineseFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: "",
                sessional: "",
                finals: ""
            },

        }])
        setSem8([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.ictMid,
                sessional: sessionalMarks.ictSessional,
                finals: finalMarks.ictFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.programmingMid,
                sessional: sessionalMarks.programmingSessional,
                finals: finalMarks.programmingFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.englishMid,
                sessional: sessionalMarks.englishSessional,
                finals: finalMarks.englishFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.calculusMid,
                sessional: sessionalMarks.calculusSessional,
                finals: finalMarks.calculusFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.chineseMid,
                sessional: sessionalMarks.chineseSessional,
                finals: finalMarks.chineseFinal
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
            <p className="display-4">semester 8</p>
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
                            <td>CSI-616</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="ictMid"
                                maxLength="2"
                                value={midMarks.ictMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="ictSessional"
                                value={sessionalMarks.ictSessional}
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
                                    placeholder={parseInt(midMarks.ictMid) + parseInt(sessionalMarks.ictSessional) + parseInt(finalMarks.ictFinal)}
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
                            <td>CSI-604</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="programmingMid"
                                value={midMarks.programmingMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="programmingSessional"
                                value={sessionalMarks.programmingSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="programmingFinal"
                                value={finalMarks.programmingFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(2-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.programmingMid) + parseInt(sessionalMarks.programmingSessional) + parseInt(finalMarks.programmingFinal)}
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
                            <td>ISL-321</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="englishMid"
                                value={midMarks.englishMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.englishSessional}
                                onChange={handleSessionalMarks}
                                name="englishSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="englishFinal"
                                value={finalMarks.englishFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                   disabled={true}
                                   placeholder={parseInt(midMarks.englishMid) + parseInt(sessionalMarks.englishSessional) + parseInt(finalMarks.englishFinal)}

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
                            <td>CSI-630</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="calculusMid"
                                    value={midMarks.calculusMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.calculusSessional}
                                onChange={handleSessionalMarks}
                                name="calculusSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="calculusFinal"
                                value={finalMarks.calculusFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>6(0-6)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.calculusMid) + parseInt(sessionalMarks.calculusSessional) + parseInt(finalMarks.calculusFinal)}

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

export default MarksForm8;