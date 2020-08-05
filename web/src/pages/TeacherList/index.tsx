import React from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
    const title = 'Estes são os proffys disponíveis.';
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title={title}>
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input id="week-day" type="text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;