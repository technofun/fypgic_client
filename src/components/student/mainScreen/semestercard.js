import React from 'react'

function SemesterCard({ semester, sem }) {
    return (
        <div className="col-6 border border-4">
            <h3>Semester1</h3>
            <table className="table table-sm table-hover table-bordered">
                <tr>
                    {/* <th>credit hours</th> */}
                    <th>Subject Name</th>
                    <th>Mid</th>
                    <th>Sessional</th>
                    <th>Final</th>
                    <th>Total</th>
                    <th>Grade</th>

                </tr>
                <tr>
                    {/* <td></td> */}
                    <td>
                        {
                            semester[0][sem][0]['subject1']['subjectname']
                                ===
                                'undefined'
                                ? ''
                                :
                                semester[0][sem][0]['subject1']['subjectname']
                        }
                    </td>
                    <td>
                        {
                        semester[0][sem][0]['subject1']['midterm']
                        ===
                        undefined
                        ? ''
                        :
                        semester[0][sem][0]['subject1']['midterm']
                        }
                        </td>
                    <td>{
                    semester[0][sem][0]['subject1']['sessional']
                    ===
                    undefined
                    ? ''
                    :
                    semester[0][sem][0]['subject1']['sessional']
                    }</td>
                    <td>
                        {
                        semester[0][sem][0]['subject1']['finals']
                        ===
                        undefined
                        ? ''
                        :
                        semester[0][sem][0]['subject1']['finals']
                        }
                        </td>
                    <td>{
                        semester[0][sem][0]['subject1']['midterm'] +
                        semester[0][sem][0]['subject1']['sessional'] +
                        semester[0][sem][0]['subject1']['finals']
                        ===
                        undefined
                        ? ''
                        :
                        semester[0][sem][0]['subject1']['midterm'] +
                        semester[0][sem][0]['subject1']['sessional'] +
                        semester[0][sem][0]['subject1']['finals']
                    }</td>
                    <td></td>
                </tr>
                <tr>
                    {/* <td></td> */}
                    {/* <td>{semester[0][sem][0]['subject2']['subjectname']}</td>
                    <td>{semester[0][sem][0]['subject2']['midterm']}</td>
                    <td>{semester[0][sem][0]['subject2']['sessional']}</td>
                    <td>{semester[0][sem][0]['subject2']['finals']}</td>
                    <td>{
                        semester[0][sem][0]['subject2']['midterm'] +
                        semester[0][sem][0]['subject2']['sessional'] +
                        semester[0][sem][0]['subject2']['finals']
                    }</td> */}
                    <td></td>
                </tr>
                <tr>
                    {/* <td></td> */}
                    {/* <td>{semester[0][sem][0]['subject3']['subjectname']}</td>
                    <td>{semester[0][sem][0]['subject3']['midterm']}</td>
                    <td>{semester[0][sem][0]['subject3']['sessional']}</td>
                    <td>{semester[0][sem][0]['subject3']['finals']}</td>
                    <td>{
                        semester[0][sem][0]['subject3']['midterm'] +
                        semester[0][sem][0]['subject3']['sessional'] +
                        semester[0][sem][0]['subject3']['finals']
                    }</td> */}
                    <td></td>
                </tr>
                <tr>
                    {/* <td></td> */}
                    {/* <td>{semester[0][sem][0]['subject4']['subjectname']}</td>
                    <td>{semester[0][sem][0]['subject4']['midterm']}</td>
                    <td>{semester[0][sem][0]['subject4']['sessional']}</td>
                    <td>{semester[0][sem][0]['subject4']['finals']}</td>
                    <td>{
                        semester[0][sem][0]['subject4']['midterm'] +
                        semester[0][sem][0]['subject4']['sessional'] +
                        semester[0][sem][0]['subject4']['finals']
                    }</td>
                    <td></td> */}
                </tr>
                <tr>
                    {/* <td></td> */}
                    {/* <td>{semester[0][sem][0]['subject5']['subjectname']}</td>
                    <td>{semester[0][sem][0]['subject5']['midterm']}</td>
                    <td>{semester[0][sem][0]['subject5']['sessional']}</td>
                    <td>{semester[0][sem][0]['subject5']['finals']}</td>
                    <td>{
                        semester[0][sem][0]['subject5']['midterm'] +
                        semester[0][sem][0]['subject5']['sessional'] +
                        semester[0][sem][0]['subject5']['finals']
                    }</td>
                    <td></td> */}
                </tr>
                <tr>
                    {/* <td></td> */}
                    {/* <td>{semester[0][sem][0]['subject6']['subjectname']}</td>
                    <td>{semester[0][sem][0]['subject6']['midterm']}</td>
                    <td>{semester[0][sem][0]['subject6']['sessional']}</td>
                    <td>{semester[0][sem][0]['subject6']['finals']}</td>
                    <td>{
                        semester[0][sem][0]['subject6']['midterm'] +
                        semester[0][sem][0]['subject6']['sessional'] +
                        semester[0][sem][0]['subject6']['finals']
                    }</td>
                    <td></td> */}
                </tr>
            </table>
        </div>
    )
}

export default SemesterCard
