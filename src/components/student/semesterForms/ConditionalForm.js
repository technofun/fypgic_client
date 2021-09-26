import React from 'react'
import MarksForm from './MarksForm';
import MarksForm2 from './MarksForm2';
import MarksForm3 from './MarksForm3';
import MarksForm4 from './MarksForm4';
import MarksForm5 from './MarksForm5';
import MarksForm6 from './MarksForm6';
import MarksForm7 from './MarksForm7';
import MarksForm8 from './MarksForm8';

function ConditionalForm({ selectSemester }) {
    switch (selectSemester) {
        case 'semester1':
            return (
                <MarksForm />
            )
        case 'semester2':
            return (
                <MarksForm2 />
            )
        case 'semester3':
            return (
                <MarksForm3 />
            )
        case 'semester4':
            return (
                <MarksForm4 />
            )
        case 'semester5':
            return (
                <MarksForm5 />
            )
        case 'semester6':
            return (
                <MarksForm6 />
            )
        case 'semester7':
            return (
                <MarksForm7 />
            )
        case 'semester8':
            return (
                <MarksForm8 />
            )
        default:
            return (
                <h1>No Semester available</h1>)
    }

}

export default ConditionalForm;
