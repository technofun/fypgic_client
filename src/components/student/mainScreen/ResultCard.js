import React from 'react'
import SemesterCard from './semestercard'

function ResultCard(props) {
    const { name, semester } = props.studentData

    console.log(semester ? true : false);
    return (
        <>
            <div className="row border">

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
                        {semester[0]['semester1'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject1']['midterm'] +
                                        semester[0]['semester1'][0]['subject1']['sessional'] +
                                        semester[0]['semester1'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject2']['midterm'] +
                                        semester[0]['semester1'][0]['subject2']['sessional'] +
                                        semester[0]['semester1'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject3']['midterm'] +
                                        semester[0]['semester1'][0]['subject3']['sessional'] +
                                        semester[0]['semester1'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject4']['midterm'] +
                                        semester[0]['semester1'][0]['subject4']['sessional'] +
                                        semester[0]['semester1'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject5']['midterm'] +
                                        semester[0]['semester1'][0]['subject5']['sessional'] +
                                        semester[0]['semester1'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester1'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester1'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester1'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester1'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester1'][0]['subject6']['midterm'] +
                                        semester[0]['semester1'][0]['subject6']['sessional'] +
                                        semester[0]['semester1'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>

                {/* <SemesterCard semester={semester} sem={'semester2'}/> */}

                <div className="col-6 border border-4">
                    <h3>Semester2</h3>
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
                        {semester[0]['semester2'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject1']['midterm'] +
                                        semester[0]['semester2'][0]['subject1']['sessional'] +
                                        semester[0]['semester2'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject2']['midterm'] +
                                        semester[0]['semester2'][0]['subject2']['sessional'] +
                                        semester[0]['semester2'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject3']['midterm'] +
                                        semester[0]['semester2'][0]['subject3']['sessional'] +
                                        semester[0]['semester2'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject4']['midterm'] +
                                        semester[0]['semester2'][0]['subject4']['sessional'] +
                                        semester[0]['semester2'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject5']['midterm'] +
                                        semester[0]['semester2'][0]['subject5']['sessional'] +
                                        semester[0]['semester2'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester2'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester2'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester2'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester2'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester2'][0]['subject6']['midterm'] +
                                        semester[0]['semester2'][0]['subject6']['sessional'] +
                                        semester[0]['semester2'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>

            </div>
            <div className="row border">
                <div className="col-6 border border-4">
                    <h3>Semester3</h3>
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
                        {semester[0]['semester3'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject1']['midterm'] +
                                        semester[0]['semester3'][0]['subject1']['sessional'] +
                                        semester[0]['semester3'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject2']['midterm'] +
                                        semester[0]['semester3'][0]['subject2']['sessional'] +
                                        semester[0]['semester3'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject3']['midterm'] +
                                        semester[0]['semester3'][0]['subject3']['sessional'] +
                                        semester[0]['semester3'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject4']['midterm'] +
                                        semester[0]['semester3'][0]['subject4']['sessional'] +
                                        semester[0]['semester3'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject5']['midterm'] +
                                        semester[0]['semester3'][0]['subject5']['sessional'] +
                                        semester[0]['semester3'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester3'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester3'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester3'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester3'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester3'][0]['subject6']['midterm'] +
                                        semester[0]['semester3'][0]['subject6']['sessional'] +
                                        semester[0]['semester3'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>

                <div className="col-6 border border-4">
                    <h3>Semester4</h3>
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
                        {semester[0]['semester4'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject1']['midterm'] +
                                        semester[0]['semester4'][0]['subject1']['sessional'] +
                                        semester[0]['semester4'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject2']['midterm'] +
                                        semester[0]['semester4'][0]['subject2']['sessional'] +
                                        semester[0]['semester4'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject3']['midterm'] +
                                        semester[0]['semester4'][0]['subject3']['sessional'] +
                                        semester[0]['semester4'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject4']['midterm'] +
                                        semester[0]['semester4'][0]['subject4']['sessional'] +
                                        semester[0]['semester4'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject5']['midterm'] +
                                        semester[0]['semester4'][0]['subject5']['sessional'] +
                                        semester[0]['semester4'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester4'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester4'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester4'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester4'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester4'][0]['subject6']['midterm'] +
                                        semester[0]['semester4'][0]['subject6']['sessional'] +
                                        semester[0]['semester4'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>
            </div>
            <div className="row border">
                <div className="col-6 border border-4">
                    <h3>Semester5</h3>
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
                        {semester[0]['semester5'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject1']['midterm'] +
                                        semester[0]['semester5'][0]['subject1']['sessional'] +
                                        semester[0]['semester5'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject2']['midterm'] +
                                        semester[0]['semester5'][0]['subject2']['sessional'] +
                                        semester[0]['semester5'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject3']['midterm'] +
                                        semester[0]['semester5'][0]['subject3']['sessional'] +
                                        semester[0]['semester5'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject4']['midterm'] +
                                        semester[0]['semester5'][0]['subject4']['sessional'] +
                                        semester[0]['semester5'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject5']['midterm'] +
                                        semester[0]['semester5'][0]['subject5']['sessional'] +
                                        semester[0]['semester5'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester5'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester5'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester5'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester5'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester5'][0]['subject6']['midterm'] +
                                        semester[0]['semester5'][0]['subject6']['sessional'] +
                                        semester[0]['semester5'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>

                <div className="col-6 border border-4">
                    <h3>Semester6</h3>
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
                        {semester[0]['semester6'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject1']['midterm'] +
                                        semester[0]['semester6'][0]['subject1']['sessional'] +
                                        semester[0]['semester6'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject2']['midterm'] +
                                        semester[0]['semester6'][0]['subject2']['sessional'] +
                                        semester[0]['semester6'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject3']['midterm'] +
                                        semester[0]['semester6'][0]['subject3']['sessional'] +
                                        semester[0]['semester6'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject4']['midterm'] +
                                        semester[0]['semester6'][0]['subject4']['sessional'] +
                                        semester[0]['semester6'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject5']['midterm'] +
                                        semester[0]['semester6'][0]['subject5']['sessional'] +
                                        semester[0]['semester6'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester6'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester6'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester6'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester6'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester6'][0]['subject6']['midterm'] +
                                        semester[0]['semester6'][0]['subject6']['sessional'] +
                                        semester[0]['semester6'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>
            </div>
            <div className="row border">
                <div className="col-6 border border-4">
                    <h3>Semester7</h3>
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
                        {semester[0]['semester7'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject1']['midterm'] +
                                        semester[0]['semester7'][0]['subject1']['sessional'] +
                                        semester[0]['semester7'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject2']['midterm'] +
                                        semester[0]['semester7'][0]['subject2']['sessional'] +
                                        semester[0]['semester7'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject3']['midterm'] +
                                        semester[0]['semester7'][0]['subject3']['sessional'] +
                                        semester[0]['semester7'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject4']['midterm'] +
                                        semester[0]['semester7'][0]['subject4']['sessional'] +
                                        semester[0]['semester7'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject5']['midterm'] +
                                        semester[0]['semester7'][0]['subject5']['sessional'] +
                                        semester[0]['semester7'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester7'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester7'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester7'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester7'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester7'][0]['subject6']['midterm'] +
                                        semester[0]['semester7'][0]['subject6']['sessional'] +
                                        semester[0]['semester7'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>

                <div className="col-6 border border-4">
                    <h3>Semester8</h3>
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
                        {semester[0]['semester8'].length === 1 ?
                            <>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject1']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject1']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject1']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject1']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject1']['midterm'] +
                                        semester[0]['semester8'][0]['subject1']['sessional'] +
                                        semester[0]['semester8'][0]['subject1']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject2']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject2']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject2']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject2']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject2']['midterm'] +
                                        semester[0]['semester8'][0]['subject2']['sessional'] +
                                        semester[0]['semester8'][0]['subject2']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject3']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject3']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject3']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject3']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject3']['midterm'] +
                                        semester[0]['semester8'][0]['subject3']['sessional'] +
                                        semester[0]['semester8'][0]['subject3']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject4']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject4']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject4']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject4']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject4']['midterm'] +
                                        semester[0]['semester8'][0]['subject4']['sessional'] +
                                        semester[0]['semester8'][0]['subject4']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject5']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject5']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject5']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject5']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject5']['midterm'] +
                                        semester[0]['semester8'][0]['subject5']['sessional'] +
                                        semester[0]['semester8'][0]['subject5']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{semester[0]['semester8'][0]['subject6']['subjectname']}</td>
                                    <td>{semester[0]['semester8'][0]['subject6']['midterm']}</td>
                                    <td>{semester[0]['semester8'][0]['subject6']['sessional']}</td>
                                    <td>{semester[0]['semester8'][0]['subject6']['finals']}</td>
                                    <td>{
                                        semester[0]['semester8'][0]['subject6']['midterm'] +
                                        semester[0]['semester8'][0]['subject6']['sessional'] +
                                        semester[0]['semester8'][0]['subject6']['finals']
                                    }</td>
                                    <td></td>
                                </tr>
                            </>
                            : null
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default ResultCard
