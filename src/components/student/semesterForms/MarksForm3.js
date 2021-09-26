import React, { useState, useEffect, useContext } from 'react'
import { StudentData } from '../../contexts/studentContext'
function MarksForm3() {
    const [totalSubjectMarks, setTotalSubjectMarks] = useState(0)
    const [SubjectGrade, setSubjectGrade] = useState(null)
    const { semesterSubjects, setsemesterSubjects } = useContext(StudentData)
    const { sem3, setSem3} = useContext(StudentData)

    const [subjectNames, setSubjectNames] = useState({
        subject1Name: "Computer Organization & Assembly Language",
        subject2Name: "Data Structure and Algorithms",
        subject3Name: "Discrete Structures ",
        subject4Name: "Professional Practices",
        subject5Name: "Differential Equations",
        subject6Name: "Linear Algebra"
    })
    const [midMarks, setmidMarks] = useState({
        assemblylanguageMid: 0,
        datastructureMid: 0,
        discreteMid: 0,
        professionalpracticeMid: 0,
        differentialequationMid: 0,
        linearalgebraMid:0
    })
    const [sessionalMarks, setsessionalMarks] = useState({
        assemblylanguageSessional: 0,
        datastructureSessional: 0,
        discreteSessional: 0,
        professionalpracticeSessional: 0,
        differentialequationSessional: 0,
        linearalgebraSessional:0
    })
    const [finalMarks, setfinalMarks] = useState({
        assemblylanguageFinal: 0,
        datastructureFinal: 0,
        discreteFinal: 0,
        professionalpracticeFinal: 0,
        differentialequationFinal: 0,
        linearalgebraFinal:0
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
                midterm: midMarks.assemblylanguageMid,
                sessional: sessionalMarks.assemblylanguageSessional,
                finals: finalMarks.assemblylanguageFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.datastructureMid,
                sessional: sessionalMarks.datastructureSessional,
                finals: finalMarks.datastructureFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.discreteMid,
                sessional: sessionalMarks.discreteSessional,
                finals: finalMarks.discreteFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.professionalpracticeMid,
                sessional: sessionalMarks.professionalpracticeSessional,
                finals: finalMarks.professionalpracticeFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.differentialequationMid,
                sessional: sessionalMarks.differentialequationSessional,
                finals: finalMarks.differentialequationFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: midMarks.linearalgebraMid,
                sessional: sessionalMarks.linearalgebraSessional,
                finals: finalMarks.linearalgebraFinal
            },

        }])
        setSem3([{
            subject1: {
                subjectname: subjectNames.subject1Name,
                midterm: midMarks.assemblylanguageMid,
                sessional: sessionalMarks.assemblylanguageSessional,
                finals: finalMarks.assemblylanguageFinal
            },
            subject2: {
                subjectname: subjectNames.subject2Name,
                midterm: midMarks.datastructureMid,
                sessional: sessionalMarks.datastructureSessional,
                finals: finalMarks.datastructureFinal
            },

            subject3: {
                subjectname: subjectNames.subject3Name,
                midterm: midMarks.discreteMid,
                sessional: sessionalMarks.discreteSessional,
                finals: finalMarks.discreteFinal
            },
            subject4: {
                subjectname: subjectNames.subject4Name,
                midterm: midMarks.professionalpracticeMid,
                sessional: sessionalMarks.professionalpracticeSessional,
                finals: finalMarks.professionalpracticeFinal
            },
            subject5: {
                subjectname: subjectNames.subject5Name,
                midterm: midMarks.differentialequationMid,
                sessional: sessionalMarks.differentialequationSessional,
                finals: finalMarks.differentialequationFinal
            },
            subject6: {
                subjectname: subjectNames.subject6Name,
                midterm: midMarks.linearalgebraMid,
                sessional: sessionalMarks.linearalgebraSessional,
                finals: finalMarks.linearalgebraFinal
            },

        }])
        // console.log(semesterSubjects);
    }
    return (
        <div>
            <p className="display-4">semester 3</p>
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
                            <td>CSI-303</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject1Name}
                                    onChange={handleSubjectNames}
                                    name="subject1Name"
                                /></td>
                            <td><input
                                name="assemblylanguageMid"
                                maxLength="2"
                                value={midMarks.assemblylanguageMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="assemblylanguageSessional"
                                value={sessionalMarks.assemblylanguageSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="assemblylanguageFinal"
                                value={finalMarks.assemblylanguageFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.assemblylanguageMid) + parseInt(sessionalMarks.assemblylanguageSessional) + parseInt(finalMarks.assemblylanguageFinal)}
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
                            <td>CSI-301</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject2Name}
                                    onChange={handleSubjectNames}
                                    name="subject2Name" />
                            </td>
                            <td><input
                                name="datastructureMid"
                                value={midMarks.datastructureMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                name="datastructureSessional"
                                value={sessionalMarks.datastructureSessional}
                                onChange={handleSessionalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="datastructureFinal"
                                value={finalMarks.datastructureFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>4(3-1)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.datastructureMid) + parseInt(sessionalMarks.datastructureSessional) + parseInt(finalMarks.datastructureFinal)}
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
                            <td>Eng-322</td>
                            <td><input
                                type="text"
                                value={subjectNames.subject3Name}
                                onChange={handleSubjectNames}
                                name="subject3Name" /></td>
                            <td><input
                                name="discreteMid"
                                value={midMarks.discreteMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.discreteSessional}
                                onChange={handleSessionalMarks}
                                name="discreteSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="discreteFinal"
                                value={finalMarks.discreteFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.discreteMid) + parseInt(sessionalMarks.discreteSessional) + parseInt(finalMarks.discreteFinal)}

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
                            <td>MTH-323</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject4Name}
                                    onChange={handleSubjectNames}
                                    name="subject4Name" /></td>
                            <td>
                                <input
                                    name="professionalpracticeMid"
                                    value={midMarks.professionalpracticeMid}
                                    onChange={handleMidMarks}
                                    type="number"
                                    className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.professionalpracticeSessional}
                                onChange={handleSessionalMarks}
                                name="professionalpracticeSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="professionalpracticeFinal"
                                value={finalMarks.professionalpracticeFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.professionalpracticeMid) + parseInt(sessionalMarks.professionalpracticeSessional) + parseInt(finalMarks.professionalpracticeFinal)}

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
                            <td>LNG-321</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject5Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="differentialequationMid"
                                value={midMarks.differentialequationMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.differentialequationSessional}
                                onChange={handleSessionalMarks}
                                name="differentialequationSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="differentialequationFinal"
                                value={finalMarks.differentialequationFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.differentialequationMid) + parseInt(sessionalMarks.differentialequationSessional) + parseInt(finalMarks.differentialequationFinal)}

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
                            <td>MTH-424</td>
                            <td>
                                <input
                                    type="text"
                                    value={subjectNames.subject6Name}
                                    onChange={handleSubjectNames}
                                    name="subject5Name" /></td>
                            <td><input
                                name="differentialequationMid"
                                value={midMarks.linearalgebraMid}
                                onChange={handleMidMarks}
                                type="number"
                                className="form-control" />
                            </td>
                            <td><input
                                value={sessionalMarks.linearalgebraSessional}
                                onChange={handleSessionalMarks}
                                name="differentialequationSessional"
                                type="number"
                                className="form-control" /></td>
                            <td><input
                                name="differentialequationFinal"
                                value={finalMarks.linearalgebraFinal}
                                onChange={handleFinalMarks}
                                type="number"
                                className="form-control" /></td>
                            <td>3(3-0)</td>
                            <td>
                                <input
                                    disabled={true}
                                    placeholder={parseInt(midMarks.linearalgebraMid) + parseInt(sessionalMarks.linearalgebraSessional) + parseInt(finalMarks.linearalgebraFinal)}

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

export default MarksForm3
