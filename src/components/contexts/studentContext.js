import React, { useState, createContext } from 'react';
export const StudentData = createContext();

export function StudentDataProvider({ children }) {
    const [selectSession, setSelectSession] = useState('')
    const [selectSemester, setSelectSemester] = useState('')
    const [selectBatch, setSelectBatch] = useState('')
    const [semesterSubjects, setsemesterSubjects] = useState([])

    const [sem1, setSem1] = useState([])
    const [sem2, setSem2] = useState([])
    const [sem3, setSem3] = useState([])
    const [sem4, setSem4] = useState([])
    const [sem5, setSem5] = useState([])
    const [sem6, setSem6] = useState([])
    const [sem7, setSem7] = useState([])
    const [sem8, setSem8] = useState([])

    // useEffect(() => {
    //     console.log(selectSession, selectSemester, selectBatch,semesterSubjects);
    // }, [])

    return (
        <StudentData.Provider value={{
            selectSession,
            setSelectSession,
            selectSemester,
            setSelectSemester,
            selectBatch,
            setSelectBatch,
            semesterSubjects,
            setsemesterSubjects,
            sem1,setSem1, sem2, setSem2, sem3,setSem3,sem4,setSem4,
            sem5,setSem5,sem6,setSem6,sem7,setSem7,sem8,setSem8

        }}>
            {children}
        </StudentData.Provider>
    )
}



