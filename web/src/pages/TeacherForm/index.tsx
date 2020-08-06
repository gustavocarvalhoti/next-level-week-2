import React from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";

function TeacherForm() {
    const title = 'Form 01';
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title={title}/>
        </div>
    )
}

export default TeacherForm;